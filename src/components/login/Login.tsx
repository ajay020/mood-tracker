import styled from "styled-components";
import { device } from "../../GlobalStyles";

const Container = styled.div`
  background-color: #031e74;
  border: 1px solid gray;
  width: 80%;
  box-sizing: border-box;
  margin: 4rem auto;
  color: white;
  padding: 1rem;
  @media ${device.tablet} {
    width: 70%;
  }
  @media ${device.laptop} {
    width: 50%;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
`;

const Form = styled.form``;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  width: 70%;
  outline: none;
  margin: 1rem auto;
  display: block;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #010148;
  color: #fff;
  border: none;
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
  cursor: pointer;
  width: 70%;
  margin: auto;
  display: block;
`;

const Wrapper = styled.div`
  /* background-color: gray; */
  width: 70%;
  margin: auto;
`;

const Anchor = styled.a`
  color: #cacaff;
`;

function Login() {
  return (
    <Container>
      <Title>LogIn</Title>
      <Form>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          required
        />

        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          required
        />

        <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
        />

        <SubmitButton type="submit" value="Sign Up">
          Submit
        </SubmitButton>
        <Wrapper>
          <p>
            Not a member ? <Anchor href="/signup">SignUp</Anchor>
          </p>
        </Wrapper>
      </Form>
    </Container>
  );
}

export default Login;
