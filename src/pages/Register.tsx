import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import { useState } from "react";
import axios from "axios";
import { server } from "../utils/consts";

const Register = () => {
  const [name, setName] = useState("Abhishek");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpFields = [
    {
      type: "text",
      placeholder: "name",
      value: name,
      state: setName,
    },
    {
      type: "email",
      placeholder: "email",
      value: email,
      state: setEmail,
    },
    {
      type: "password",
      placeholder: "password",
      value: password,
      state: setPassword,
    },
  ];

  const submitHandler = async () => {
    console.log(email, name, password);
    const response = await axios.post(
      `${server}/users/new`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(response);
  };

  return (
    <>
      <h3>SIGN IN</h3>
      <Container maxWidth="xs">
        <form className="authForm">
          {signUpFields.map((field) => (
            <InputField
              value={field.value}
              type={field.type}
              key={field.placeholder}
              placeholder={field.placeholder}
              state={field.state}
            />
          ))}
          <Button variant="contained" onClick={submitHandler}>
            Sign up
          </Button>
        </form>
      </Container>
      <p>
        Already a user? <Link to={"/login"}>Log In</Link>
      </p>
    </>
  );
};

export default Register;
