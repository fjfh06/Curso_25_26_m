
export function renderRegisterForm() {

return `
    <h3>Registrar</h3>
     <form id="registerForm">
       <label>Usuario: <input name="username" required></label><br>
       <label>Password: <input name="password" type="password" required></label><br>
       <button type="submit">Registrarse</button>
       <div id="registerMessage"></div>
     </form>
   `;
}