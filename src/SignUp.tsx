import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import client from "./client";

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 72px;
`;
const SignUpContentWrapper = styled.div`
  width: 25%;
`;
const SignUpTitle = styled.p`
  font-weight: bold;
`;
const SignUpForm = styled.form``;
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

const SignUp: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") {
      setPassword(value);
    } else if (name === "rePassword") {
      setRePassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== rePassword) {
      return;
    }

    client
      .post("/v1/auth", { email, password })
      .then((res) => console.log(res));
  };
  return (
    <SignUpWrapper>
      <SignUpContentWrapper>
        <SignUpTitle>新規登録</SignUpTitle>
        <SignUpForm onSubmit={handleSubmit}>
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
          <FormColumn>
            <FormLabel htmlFor="passwordConfirmation">
              パスワード（再入力）
            </FormLabel>
            <FormInput
              id="passwordConfirmation"
              name="rePassword"
              type="password"
              placeholder="パスワードを入力してください"
              value={rePassword}
              onChange={handleChangeInput}
            />
          </FormColumn>
          <FormSubmitButton type="submit">登録する</FormSubmitButton>
        </SignUpForm>
        <Link to="/">トップへ</Link>
      </SignUpContentWrapper>
    </SignUpWrapper>
  );
};

export default SignUp;
