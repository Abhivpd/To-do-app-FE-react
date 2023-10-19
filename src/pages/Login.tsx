import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const loginFields = [
  {
    type: "text",
    placeholder: "name",
  },
  {
    type: "password",
    placeholder: "password",
  },
];

const Login = () => {
  const submitHandler = () => {};

  return (
    <>
      <h3>LOG IN</h3>
      <Container maxWidth="xs">
        <form className="authForm">
          {loginFields.map((field) => (
            <InputField
            value=""
              placeholder={field.placeholder}
              key={field.placeholder}
              type={field.type}
            />
          ))}
          <Button variant="contained" onClick={submitHandler}>
            Log in
          </Button>
        </form>
      </Container>
      <p>
        New here? <Link to={"/register"}>Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
