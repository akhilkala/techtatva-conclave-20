import React, { useState, useRef } from "react";
import "./Register.scss";
import { Formik } from "formik";

export default function Register() {
  return (
    <div className="register">
      <Formik
        onSubmit={(data) => console.log(data)}
        initialValue={{
          name: "",
          email: "",
          contact: "",
          collage: "",
          registeration: "",
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit} className="register__form">
              <h1 className="register__title">REGISTER</h1>
              <div className="register__inputs">
                <Input
                  nameKey={"name"}
                  handleChange={handleChange}
                  name={"Name"}
                  handleBlur={handleBlur}
                />

                <Input
                  nameKey={"email"}
                  handleChange={handleChange}
                  name={"Email ID"}
                  handleBlur={handleBlur}
                />

                <Input
                  nameKey={"contact"}
                  handleChange={handleChange}
                  name={"Contact no"}
                  handleBlur={handleBlur}
                />

                <Input
                  nameKey={"collage"}
                  handleChange={handleChange}
                  name={"College name"}
                  handleBlur={handleBlur}
                />

                <Input
                  nameKey={"registeration"}
                  handleChange={handleChange}
                  name={"Reg no. (For MAHE students only)"}
                  handleBlur={handleBlur}
                />
              </div>
              <button className="register__submit">SUBMIT</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

function Input({ name, nameKey, handleChange, handleBlur }) {
  return (
    <div className="register__input">
      <label htmlFor={name}>{name}:</label>
      <input
        onBlur={handleBlur}
        handleChange={handleChange}
        name={nameKey}
        id={name}
        type="text"
      />
    </div>
  );
}

// Name
// Email ID
// Contact no.
// College name
// Reg no. (For MAHE students only)
