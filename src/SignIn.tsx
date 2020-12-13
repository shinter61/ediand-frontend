import * as React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signIn } from "./sessionSlice";
import { AppDispatch } from "./App";

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 72px;
`;
const SignInContentWrapper = styled.div`
  width: 25%;
`;
const SignInTitle = styled.p`
  font-weight: bold;
`;
const SignInForm = styled.form``;
const FormLabel = styled.label`
  text-align: left;
  margin-bottom: 4px;
`;
const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 24px;
`;
const FormInput = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
`;
const FormSubmitButton = styled.button`
  width: 200px;
  line-height: 24px;
  margin-bottom: 24px;
  letter-spacing: 2px;
  font-weight: bold;
  color: #fff;
  background-color: #ff0461;
  border: 1px solid: #ff1a6f;
`;

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch: AppDispatch = useDispatch();

  const history = useHistory();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await dispatch(signIn({ email, password }));
    if (signIn.fulfilled.match(res)) {
      history.push("/counter");
    }
  };
  return (
    <SignInWrapper>
      <SignInContentWrapper>
        <SignInTitle>ログイン</SignInTitle>
        <SignInForm onSubmit={handleSubmit}>
          <FormColumn>
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="text"
              placeholder="例：aaa@example.com"
              value={email}
              onChange={handleChangeInput}
            />
          </FormColumn>
          <FormColumn>
            <FormLabel htmlFor="password">パスワード</FormLabel>
            <FormInput
              id="password"
              name="password"
              type="password"
              placeholder="パスワードを入力してください"
              value={password}
              onChange={handleChangeInput}
            />
          </FormColumn>
          <FormSubmitButton type="submit">ログイン</FormSubmitButton>
        </SignInForm>
        <Link to="/">トップへ</Link>
      </SignInContentWrapper>
    </SignInWrapper>
  );
};

export default SignIn;
