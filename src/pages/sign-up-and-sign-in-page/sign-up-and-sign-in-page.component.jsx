import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-up-and-sign-in-page.styles.scss";

const SignInAndSignUP = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUP;
