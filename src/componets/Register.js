import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Alert from "./Alert";

export default function Register() {
  //es un estado
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  //traemos la funcion de registro
  const { signup } = useAuth();

  const navigate = useNavigate();

  //escuchamos los cambios realizados en los inputs para actualizar los  valores del estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  //escuchamos el envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="bloc text-gray-700 text-sm font-bold"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="bloc text-gray-700 text-sm font-bold"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </form>
    </div>
  );
}
