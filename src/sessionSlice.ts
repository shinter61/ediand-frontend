import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";
import client from "./client";

interface User {
  email: string;
}

type SessionState = {
  uid: string;
  client: string;
  accessToken: string;
  user: User;
};

export const fetchCurrentUser = createAsyncThunk<
  { user: User },
  void,
  { rejectValue: { message: string } }
>("session/fetchCurrentUser", async (_arg, thunk) => {
  try {
    const res = await client.get("/v1/users/by_token");
    return { user: res.data.user };
  } catch (e) {
    return thunk.rejectWithValue({ message: "ログイン失敗" });
  }
});

const sessionSlice = createSlice({
  name: "session",
  initialState: {} as SessionState,
  reducers: {
    signUp(_state, action) {
      const { email, password } = action.payload;
      client.post("/v1/auth", { email, password }).then((res) => {
        jsCookie.set("uid", res.headers.uid);
        jsCookie.set("accessToken", res.headers["access-token"]);
        jsCookie.set("client", res.headers.client);
      });
    },
    signIn(_state, action) {
      const { email, password } = action.payload;
      client
        .post("/v1/auth/sign_in", { email, password })
        .then((res) => {
          jsCookie.set("uid", res.headers.uid);
          jsCookie.set("accessToken", res.headers["access-token"]);
          jsCookie.set("client", res.headers.client);
        })
        .catch((err) => console.log(err));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export const { signUp, signIn } = sessionSlice.actions;
export default sessionSlice.reducer;
