import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // O estilo da página de cadastro

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create_user/",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Cadastro realizado com sucesso! Faça login.");
        setErrorMessage("");

        localStorage.setItem("username", formData.username);

        // Redirecionar para a página de login
        setTimeout(() => {
          navigate("/home"); // Modifique conforme a sua rota de login
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("Erro ao cadastrar. Tente um usuário diferente.");
      setSuccessMessage("");
    }
  };

  return (
    <body className="login-up">
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        {loggedInUser && <p>Bem-vindo, {loggedInUser}!</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <input
          type="text"
          name="username"
          placeholder="Usuário"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
        <p>
          Já tem uma conta?{" "}
          <Link to="/" className="login-link">
            Faça login
          </Link>
        </p>
      </form>
    </div>
    </body>
  );
};

export default Signup;
