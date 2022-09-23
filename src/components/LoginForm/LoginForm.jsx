import styled from "styled-components";
import { useDispatch } from "react-redux";

import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import { login } from "redux/auth/auth-operations";


const LoginForm = () => {
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    dispatch(login(data));
  }

  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

  const { email, password } = state;
  
  return (
    <Card>
      <h2>Login page</h2>
      <Form action="" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="">User Email:</Label>
          <Input value={email} name="email" onChange={handleChange} type="email" placeholder="Enter email" />
        </div>
        <div>
          <Label htmlFor="">User password:</Label>
          <Input value={password} name="password" onChange={handleChange} type="password" placeholder="Enter password" />
        </div>
        <div>
          <Btm type="submit">Log in</Btm>
        </div>
      </Form>
    </Card>
  )
};

export default LoginForm;

const Card = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 400px;
  border: 4px solid;
  border-radius: 20px;
  background: lavender;
`
const Form = styled.form`
  margin: 12px;
  border: 2px solid grey;
  border-radius: 12px;
  padding: 8px;
`

const Label = styled.label`
  font-size: 20px;
`

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
  width: -webkit-fill-available;
`
const Btm = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background: darkgray;
  &:hover {
    background: #d3a6a6;
  }
`