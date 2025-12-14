import { useState } from "react";
import Button from "../../components/Button";
import StyledAuthModal from "./AuthModal.styles";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";

const AuthModal = () => {
  const close = useModal((state) => state.close);
  const setLoggedIn = useUser((state) => state.setLoggedIn);
  const [isRegistration, setIsRegistration] = useState(false);

  // Inputs
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [usernameRegisterInput, setUsernameRegisterInput] = useState("");
  const [passwordRegisterInput, setPasswordRegisterInput] = useState("");
  const [passwordAgainRegisterInput, setPasswordAgainRegisterInput] =
    useState("");
  const [isPasswordsSame, setIsPasswordsSame] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameInput("");
    setPasswordInput("");
    setEmailInput("");
    setUsernameRegisterInput("");
    setPasswordRegisterInput("");
    setPasswordAgainRegisterInput("");

    setLoggedIn(true);
    console.log("Login success");
    close();
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (passwordRegisterInput === passwordAgainRegisterInput) {
      setUsernameInput("");
      setPasswordInput("");
      setEmailInput("");
      setUsernameRegisterInput("");
      setPasswordRegisterInput("");
      setPasswordAgainRegisterInput("");
      setIsPasswordsSame(true);

      setLoggedIn(true);
      console.log("Registration successfull");
      close();
    } else {
      setIsPasswordsSame(false);
    }
  };

  return (
    <StyledAuthModal
      onPointerDown={(e) => e.stopPropagation()}
      $isRegistration={isRegistration}
    >
      {isRegistration ? (
        <>
          <div className="auth-heading-container">
            <h2>Sign up</h2>
          </div>

          <form id="register-form" onSubmit={(e) => handleRegistration(e)}>
            <div className="input-field">
              <p>E-mail</p>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="input-field">
              <p>Username</p>
              <input
                type="text"
                required
                value={usernameRegisterInput}
                onChange={(e) => setUsernameRegisterInput(e.target.value)}
              />
            </div>
            <div className="input-field">
              <p>Password</p>
              <input
                type="password"
                required
                value={passwordRegisterInput}
                onChange={(e) => setPasswordRegisterInput(e.target.value)}
              />
            </div>
            <div className="input-field">
              <p>Password again</p>
              <input
                type="password"
                required
                value={passwordAgainRegisterInput}
                onChange={(e) => setPasswordAgainRegisterInput(e.target.value)}
              />
            </div>
            {!isPasswordsSame && (
              <p className="passwords-missmatch">Passwords do not match</p>
            )}
          </form>

          <Button
            type="submit"
            form="register-form"
            $width="100%"
            $height="5.2rem"
            className="btn-login-register"
          >
            Register
          </Button>
          <p className="change-auth">
            Have an account?{" "}
            <span onClick={() => setIsRegistration(false)}>Sign in</span>
          </p>
        </>
      ) : (
        <>
          <div className="auth-heading-container">
            <h2>Sign in</h2>
            <p>Access your Xploit account</p>
          </div>

          <form id="login-form" onSubmit={(e) => handleLogin(e)}>
            <div className="input-field">
              <p>Username</p>
              <input
                type="text"
                required
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>
            <div className="input-field">
              <p>Password</p>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
          </form>

          <span className="forgot-password">Forgot password?</span>
          <Button
            type="submit"
            form="login-form"
            $width="100%"
            $height="5.2rem"
            className="btn-login-register"
          >
            LOGIN
          </Button>
          <p className="change-auth">
            New user?{" "}
            <span onClick={() => setIsRegistration(true)}>Create account</span>
          </p>
        </>
      )}
    </StyledAuthModal>
  );
};

AuthModal.rootModalStyles = `
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`;

export default AuthModal;
