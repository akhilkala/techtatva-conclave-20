const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");

let data = {};

// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneRegex = /^\d{10}$/;

const handleSubmit = (e) => {
  e.preventDefault();

  inputs.forEach((inp) => {
    data[inp.name] = inp.value;
  });

  // for (i = 0; i < inputs.length; i++) {
  //   const inp = inputs[i];

  //   if (!inp.value) {
  //     inp.placeholder = "This field is required";
  //     inp.value = "";
  //     return;
  //   }

  //   if (inp.name === "email" && !emailRegex.test(inp.value.toLowerCase())) {
  //     inp.placeholder = "Invalid Email";
  //     inp.value = "";
  //     return;
  //   }

  //   if (inp.name === "phone" && !phoneRegex.test(inp.value.toLowerCase())) {
  //     inp.placeholder = "Invalid Phone Number";
  //     inp.value = "";
  //     return;
  //   }
  // }

  const URL = "";

  fetch(URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then((res) => alert(res.message));
};

const lineup_array = document.querySelectorAll(".card img");

function isScrolledIntoView(el) {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;
  let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight + 400;
  return isVisible;
}

window.addEventListener("scroll", function () {
  for (let elem of lineup_array) {
    if (isScrolledIntoView(elem)) console.log(elem.classList.add("scrolled"));
  }
});

const submit = document.querySelector(".register__submit");

// const isFull = () => {
//   flag = true;

//   inputs.forEach((imp) => {
//     if (!imp.value) flag = false;
//   });

//   return flag;
// };

// inputs.forEach((imp) =>
//   imp.addEventListener("change", () => {
//     if (isFull()) {
//       submit.disabled = false;
//     }

//     if (!imp.value) {
//       submit.disabled = true;
//     }
//   })
// );

// tik talk yajat dhingra  6:30pm
// satish 5:30
// avlon
//  banmali
//  ahsaas 5:45
//  coming soon
