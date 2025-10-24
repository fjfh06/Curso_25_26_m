import { DB } from "./db/db";
import { initialStorage } from "./helpers/storage.js";
import { validarCredenciales, registrarUsuario } from "./services/authServices.js";
import { renderLoginForm } from "./views/loginView.js";
import { renderRegisterForm } from "./views/registerView.js";

export function initialApp() {
  initialStorage(DB);

  const app = document.getElementById("app");
  app.innerHTML = renderLoginForm();

  const form = document.querySelector("#loginForm");
  const message = document.querySelector("#message");

  // LOGIN
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { username, password } = Object.fromEntries(new FormData(form));
    const ok = validarCredenciales(username, password);

    message.innerHTML = ok
      ? `<span style="color:green">Bienvenido ${username}</span>`
      : `<span style="color:red">Credenciales erroneas</span>`;

    form.reset();
  });

  // REGISTRO
  app.insertAdjacentHTML("beforeend", renderRegisterForm());

  const registerForm = document.querySelector("#registerForm");
  const registerMessage = document.querySelector("#registerMessage");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { username, password } = Object.fromEntries(new FormData(registerForm));

    if (!username || !password) {
      registerMessage.innerHTML = `<span style="color:red">Rellena todos los campos</span>`;
      return;
    }

    if (password.length < 3) {
      registerMessage.innerHTML = `<span style="color:red">La password debe tener al menos 3 caracteres</span>`;
      return;
    }

    const registrado = registrarUsuario(username, password);

    registerMessage.innerHTML = registrado
      ? `<span style="color:green">Registro correcto. Ya puedes iniciar sesion.</span>`
      : `<span style="color:red">El usuario ya existe</span>`;

    registerForm.reset();
  });
}
