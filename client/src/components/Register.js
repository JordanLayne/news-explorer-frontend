import { useAppContext } from "../context/appContext";
import { useState } from "react";
import img from "../assets/images/close.svg";
import Wrapper from "../assets/wrappers/Register";
import FormRow from "./FormRow";
import Alert from "./Alert";

const Register = () => {
  const {
    toggleModal,
    showModal,
    showAlert,
    displayAlert,
    setIsLoggedin,
    modalType,
  } = useAppContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    isMember: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
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

    if (isMember) {
      setIsLoggedin(true);
      toggleModal(false);
    } else {
      toggleModal(true, "success");
    }
    setValues({
      email: "",
      password: "",
      username: "",
      isMember: true,
    });
  };

  const isAllInputsFilled =
    values.email && values.password && (values.isMember || values.username);

  const renderRegisterModal = () => {
    if (showModal && modalType === "register") {
      return (
        <Wrapper>
          <button className="register-modal__close-btn" type="button">
            <img
              src={img}
              alt="Close Icon"
              className="register-modal__close-icon"
              onClick={() => toggleModal(false)}
            />
          </button>
          <form className="register-modal" onSubmit={handleSubmit}>
            <h3 className="register-modal__title">
              {values.isMember ? "Sign in" : "Sign up"}
            </h3>
            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              required
            />

            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              required
            />

            {!values.isMember && (
              <>
                <FormRow
                  type="text"
                  name="username"
                  value={values.username}
                  handleChange={handleChange}
                  required
                />
              </>
            )}

            {showAlert && <Alert />}

            <button
              className={`register-modal__register-btn ${
                isAllInputsFilled ? "register-modal__register-btn--filled" : ""
              }`}
              type="submit"
            >
              {values.isMember ? "Sign in" : "Sign up"}
            </button>

            <p className="register-modal__toggle-text" onClick={toggleMember}>
              or <span>{values.isMember ? "Sign up" : "Sign in"}</span>
            </p>
          </form>
        </Wrapper>
      );
    }
    return null;
  };

  const renderSuccessModal = () => {
    if (showModal && modalType === "success") {
      return (
        <Wrapper>
          <button className="success-modal__close-btn" type="button">
            <img
              src={img}
              alt="Close Icon"
              className="success-modal__close"
              onClick={() => toggleModal(false)}
            />
          </button>
          <form className="success-modal">
            <h3 className="success-modal__title">
              Registration successfully
              <br />
              completed!
            </h3>
            <button
              className="success-modal__signin-btn"
              type="button"
              onClick={() => toggleModal(true, "register")}
            >
              Sign in
            </button>
          </form>
        </Wrapper>
      );
    }
    return null;
  };

  return (
    <>
      {renderRegisterModal()}
      {renderSuccessModal()}
    </>
  );
};

export default Register;
