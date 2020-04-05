"use strict";

const input = document.getElementById("validation-input");
const insertInput = input.addEventListener("input", hanleOnClick);

const debounce = input.addEventListener("input", _.debounce(onInput, 300));

function hanleOnClick(e) {
  if (Number(input.dataset.length) === e.currentTarget.value.length) {
    input.classList.replace("invalid", "valid");
  } else input.classList.add("invalid");
}

function onInput() {
  console.log("HELLO");
}
