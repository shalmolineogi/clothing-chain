import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  handleSubmit,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    onClick={handleSubmit}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
