import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Label } from "react-bootstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
function App() {
  return (
    <div className="form  body-styl">
      <div className=" container">
        <div className=" row no-gutters">
          <div className=" col-lg-6">
            <img src="webimg.jpg" alt="webimg" style={{width:"100%" , height:"100%"}} className=" img-fluid" />
          </div>
          <div className=" col-lg-6">
            <h3 className="font-weight-bold py-3 text-center">
              Sign In Your Account
            </h3>
            <form className="login">
              <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn  btn-primary btn-block">
                Sign In
              </button>
              <div className="text-center pt-2">
                {" "}
                or continue with your social account
              </div>
              <FacebookLoginButton className="mt-2 mb-2" style={{ width:"300px",height:"38px", marginLeft:"0px",textAlign:"center"}} />
              <div className="text-center">
                <a href="#"> Sign Up</a>
                <span className="p-2">/</span>
                <a href="#">Forgot Password</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

