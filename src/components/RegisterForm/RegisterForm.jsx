import styled from "styled-components";

import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";


const RegisterForm = ({onSubmit}) => {
  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

  const { name, email, password } = state;
  
  return (
    <Card>
      <h2>Register page</h2>
      <Form action="" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="">User name:</Label>
          <Input value={name} name="name" onChange={handleChange} type="text" placeholder="Enter username" required />
        </div>
        <div>
          <Label htmlFor="">User Email:</Label>
          <Input value={email} name="email" onChange={handleChange} type="email" placeholder="Enter email" />
        </div>
        <div>
          <Label htmlFor="">User password:</Label>
          <Input value={password} name="password" onChange={handleChange} type="password" placeholder="Enter password" />
        </div>
        <div>
          <Btm type="submit">Registration</Btm>
        </div>
      </Form>
    </Card>
  )
};

export default RegisterForm;

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