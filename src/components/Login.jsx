import { useNavigate, useLocation  } from "react-router-dom";

import { useState } from "react"; 

import { Form, Button, Alert } from "react-bootstrap";
import "../assets/css/Login.css";

import BackgroundImage from "../assets/images/background.jpg";
import Logo from "../assets/images/logo.png";
export default function Login() {


  const navigate = useNavigate();
  const location = useLocation(); 

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleLogin = () => {
    /*- Sau này khi gửi dữ liệu thì mình sẽ gửi API THÌ NÓ SẼ TRẢ RA TOKEN NHÉ =*/ 
    if (inputUsername === "user") {
    localStorage.setItem("role", JSON.stringify(["user"]));
    } else if (inputUsername === "admin") {
    localStorage.setItem("role", JSON.stringify(["user", "admin"]));
    }

    localStorage.setItem("token", "123456");
        

    const redirectPath = location.state?.from || "/"; 
    navigate(redirectPath);
  };

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleLogin}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Sign In</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        {!loading ? (
          <Button  onClick={handleLogin} className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button
            className="text-muted px-0"
            variant="link"
          >
            Forgot password?
          </Button>
        </div>
      </Form>
    </div>
  );
}
