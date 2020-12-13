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

export const signIn = createAsyncThunk<
  { user: User },
  { email: string; password: string },
  { rejectValue: { message: string } }
>("session/signIn", async (arg, thunk) => {
  try {
    const { email, password } = arg;
    const res = await client.post("/v1/auth/sign_in", { email, password });
    jsCookie.set("uid", res.headers.uid);
    jsCookie.set("accessToken", res.headers["access-token"]);
    jsCookie.set("client", res.headers.client);
    return { user: res.data.data };
  } catch (e) {
    return thunk.rejectWithValue({ message: "ログイン失敗" });
  }
});

export const signUp = createAsyncThunk<
  { user: User },
  { email: string; password: string },
  { rejectValue: { message: string } }
>("session/signUp", async (arg, thunk) => {
  try {
    const { email, password } = arg;
    const res = await client.post("/v1/auth", { email, password });
    jsCookie.set("uid", res.headers.uid);
    jsCookie.set("accessToken", res.headers["access-token"]);
    jsCookie.set("client", res.headers.client);
    return { user: res.data.data };
  } catch (e) {
    return thunk.rejectWithValue({ message: "新規登録失敗" });
  }
});

const sessionSlice = createSlice({
  name: "session",
  initialState: {} as SessionState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export default sessionSlice.reducer;
