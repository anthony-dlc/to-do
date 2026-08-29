import "./styles/reset.css";
import "./styles/header.css";
import "./styles/aside.css";
import "./styles/form.css";

import closeForm from "./display/forms/closeForm.js";

const body = document.querySelector("body");
const formContainer = document.querySelector(".form-container");
const container = document.querySelector(".container");

closeForm(formContainer)