import React, { useState, useRef } from "react";
import "./Register.scss";

export default function Register() {
  const initialState = {
    name: "",
    email: "",
    contact: "",
    collage: "",
    registeration: "",
  };

  const [form, setForm] = useState(initialState);

  const [placeholders, setPlaceholders] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(form.email.toLowerCase())) {
      setForm({ ...form, email: "" });
      setPlaceholders({ ...placeholders, email: "Invalid Email" });
    }

    if (!phoneRegex.test(form.contact.toLowerCase())) {
      setForm({ ...form, contact: "" });
    }

    if (form.name === "") {
    }

    if (form.collage === "") {
    }

    if (form.registeration === "") {
    }
  };

  return (
    <div className="register">
      <form className="register__form">
        <h1 className="register__title">REGISTER</h1>
        <div className="register__inputs">
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            name={"Name"}
            placeholder={placeholders.name}
          />

          <Input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            name={"Email ID"}
            placeholder={placeholders.email}
          />

          <Input
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            name={"Contact no"}
            placeholder={placeholders.contact}
          />

          <Input
            value={form.collage}
            onChange={(e) => setForm({ ...form, collage: e.target.value })}
            name={"College name"}
            placeholder={placeholders.collage}
          />

          <Input
            value={form.registeration}
            onChange={(e) =>
              setForm({ ...form, registeration: e.target.value })
            }
            name={"Reg no. (For MAHE students only)"}
            placeholder={placeholders.registeration}
          />
        </div>
        <button onClick={(e) => handleSubmit(e)} className="register__submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

function Input({ name, value, onChange, placeholder }) {
  return (
    <div className="register__input">
      <label htmlFor={name}>{name}:</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
