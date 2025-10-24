import { getUsers, setUsers } from "../helpers/storage.js";
import bcrypt from "bcryptjs";

export function validarCredenciales(username, password) {
  if (!username.trim() || !password.trim() || password.length < 3) {
    return false;
  }

  const users = getUsers();
  const user = users.find(u => u.username === username);
  if (!user) return false;

  const ok = bcrypt.compareSync(password, user.passwordhash);
  return ok;
}

export function registrarUsuario(username, password) {
  const users = getUsers();
  if (users.find(u => u.username === username)) {
    return false; // ya existe
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = { username, passwordhash: hash };
  setUsers(newUser); // usa tu helper para guardar
  return true;
}
