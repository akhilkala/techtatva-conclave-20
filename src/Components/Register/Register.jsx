import React from "react";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <form className="register__form">
        <h1 className="register__title">REGISTER</h1>
        <div className="register__inputs">
          <Input name={"Name"} />
          <Input name={"Email ID"} />
          <Input name={"Contact no"} />
          <Input name={"College name"} />
          <Input name={"Reg no. (For MAHE students only)"} />
        </div>
        <button className="register__submit">SUBMIT</button>
      </form>
    </div>
  );
}

function Input({ name }) {
  return (
    <div className="register__input">
      <label htmlFor={name}>{name}:</label>
      <input id={name} type="text" />
    </div>
  );
}

// Name
// Email ID
// Contact no.
// College name
// Reg no. (For MAHE students only)
