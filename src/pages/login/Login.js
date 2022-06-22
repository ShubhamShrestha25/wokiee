import { VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="formContent">
          <h3>Login</h3>
          <form>
            <div className="fieldInputField">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="fieldInputField">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <VisibilityOff className="eyeIcon" />
            </div>
            <div className="formLink">
              <p>Forgot password?</p>
            </div>
            <div className="fieldButtonField">
              <button>Login</button>
            </div>
            <div className="formLink">
              <span>Already have an account?</span>
              <Link to="/signUp" className="link">
                <p>Sign Up?</p>
              </Link>
            </div>
          </form>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
