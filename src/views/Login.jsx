// src/pages/Login.jsx
import { Fragment, useState } from "react";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../services/authService.js";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (values) => {
   setSuccess("");
   setError("");
    const result = await loginUser(values.email, values.password);
    if (result.user) {
      console.log("Usuario logueado:", result.user);
      setError("");
      setSuccess("Usuario Logueado",  result.user);
       navigate("/dashboard");
      // Aquí podrías redirigir a dashboard o guardar en localStorage
    } else {
      setSuccess("");
      setError(result.message);
    }
  };

  return (
    <Fragment>      
    <LoginForm onSubmit={handleLogin} err={error} succ={success}/>
    
    </Fragment>
  );
}
