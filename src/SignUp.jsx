import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const SignUpContentWrapper = styled.div`
  width: 25%;
`;
const SignUpTitle = styled.p`
  font-weight: bold;
`;
const SignUpForm = styled.form`
`;
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
  width: 300px;
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

export default class SignUp extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('submit!!');
  }
  render() {
    return (
      <SignUpWrapper>
        <SignUpContentWrapper>
          <SignUpTitle>新規登録</SignUpTitle>
          <SignUpForm onSubmit={this.handleSubmit}>
            <FormColumn>
              <FormLabel htmlFor='mail_address'>メールアドレス</FormLabel>
              <FormInput id='mail_address' type='text' placeholder='例：aaa@example.com' />
            </FormColumn>
            <FormColumn>
              <FormLabel htmlFor='password'>パスワード</FormLabel>
              <FormInput id='password' type='password' placeholder='パスワードを入力してください' />
            </FormColumn>
            <FormColumn>
              <FormLabel htmlFor='password_confirmation'>パスワード（再入力）</FormLabel>
              <FormInput id='password_confirmation' type='password' placeholder='パスワードを入力してください' />
            </FormColumn>
            <FormSubmitButton type='submit'>登録する</FormSubmitButton>
          </SignUpForm>
          <Link to='/'>トップへ</Link>
        </SignUpContentWrapper>
      </SignUpWrapper>
    );
  }
}
