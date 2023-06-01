import { useAppContext } from "../context/appContext";
import { useState } from "react";
import img from "../assets/images/close.svg";
import Wrapper from "../assets/wrappers/Register";
import FormRow from "./FormRow";
import Alert from "./Alert";

const Register = () => {
  const { toggleModal, showModal, showAlert, displayAlert,setIsLoggedin } = useAppContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    isMember: false,
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleMember = () => {
    setValues((prevValues) => ({
      ...prevValues,
      isMember: !prevValues.isMember,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, isMember } = values;
    if (!email || !password || (!isMember && !username)) {
      displayAlert();
      return;
    }
    setIsLoggedin(true)
    toggleModal()
  };
  const isAllInputsFilled = values.email && values.password && (values.isMember || values.username);
  return (
    <>
      {showModal && (
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <h3>{values.isMember ? "Sign in" : "Sign up"}</h3>
            <div className="btn-container">
              <button className="close-btn" type="button" onClick={toggleModal}>
                <img src={img} alt="Close Icon" className="close-icon" />
              </button>
            </div>
            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />

            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />

            {!values.isMember && (
              <>
                <FormRow
                  type="text"
                  name="username"
                  value={values.username}
                  handleChange={handleChange}
                />
              </>
            )}
            {showAlert && <Alert />}
            <button className={`register-btn ${isAllInputsFilled ? "filled" : ""}`} type="submit">
              {values.isMember ? "Sign in" : "Sign up"}
            </button>
            <p className="signin-text" onClick={toggleMember}>
              or <span>{values.isMember ? "Register" : "Login"}</span>
            </p>
          </form>
        </Wrapper>
      )}
    </>
  );
};

export default Register;
