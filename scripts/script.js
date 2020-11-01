const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\d{10}$/;

const handleSubmit = (e) => {
  e.preventDefault();

  for (i = 0; i < inputs.length; i++) {
    const inp = inputs[i];

    if (!inp.value) {
      inp.placeholder = "This field is required";
      inp.value = "";
      return;
    }

    if (inp.name === "email" && !emailRegex.test(inp.value.toLowerCase())) {
      inp.placeholder = "Invalid Email";
      inp.value = "";
      return;
    }

    if (inp.name === "phone" && !phoneRegex.test(inp.value.toLowerCase())) {
      inp.placeholder = "Invalid Phone Number";
      inp.value = "";
      return;
    }
  }

  form.submit();
};
