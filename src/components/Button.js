import React from "react";
import "./Button.scss";

function Button({ children, onClick }) {
  return (
    <div className="StyledButton">
      <div className="text" onClick={onClick}>
        {children}
      </div>
    </div>
  );
}

export default Button;
