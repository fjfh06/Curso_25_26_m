/*
Gestion bancario Revolut.
Se pretende llevar un sistema bancario en javascript que permita:
 - Creamos una cuenta con un titular string y su saldo number
 - depositar dinero
 - retirar dinero (siempre que tenga saldo)
 - consultar saldo
 - transferir dinero entre dos cuentas validando que tengas saldos
 - mantener un listado de cuentas
 - buscar cuentas por titular

 Cuando creemos una cuenta se debe generar un numero de cuenta (logitud IBAN).

 Hacer tests de todos los posibles casos
 que funcione con una funcion test()
*/

// --------- variables ---------
let cuentas = [];

// --------- funciones ---------

/**
 * @returns {string}
 */
function generarNumCuenta() {
    let numCuenta = "";
    for (let i = 0; i < 24; i++) {
        numCuenta += Math.floor(Math.random() * 10);
    }
    return numCuenta;
}

/**
 * Crea una cuenta
 * @param {string} titular
 * @param {number} saldoInicial
 * @returns {object} cuenta
 */
function crearCuenta(titular, saldoInicial) {
    const cuenta = {
        numCuenta: generarNumCuenta(),
        titular: titular,
        saldo: saldoInicial
    };
    cuentas.push(cuenta);
    return cuenta;
}

/**
 * Deposita dinero en una cuenta
 */
function depositar(cuenta, cantidad) {
    cuenta.saldo += cantidad;
}

/**
 * Retira dinero si hay saldo suficiente
 */
function retirar(cuenta, cantidad) {
    if (cuenta.saldo >= cantidad) {
        cuenta.saldo -= cantidad;
        return true;
    } else {
        return false;
    }
}

/**
 * Consulta el saldo de la cuenta
 */
function consultarSaldo(cuenta) {
    return cuenta.saldo;
}

/**
 * Transfiere dinero entre dos cuentas
 */
function transferir(origen, destino, cantidad) {
    if (retirar(origen, cantidad)) {
        depositar(destino, cantidad);
        return true;
    }
    return false;
}

/**
 * Busca cuentas por titular
 */
function buscarCuenta(nombre) {
    let resultado = [];
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].titular === nombre) {
            resultado.push(cuentas[i]);
        }
    }
    return resultado;
}


// --------- tests ---------

function test() {
    console.log("=== INICIO TEST ===");

    let c1 = crearCuenta("Juan", 100);
    let c2 = crearCuenta("Maria", 50);

    console.log("Cuentas creadas:", c1, c2);

    depositar(c1, 50);
    console.log("Ingreso 50 en Juan:", consultarSaldo(c1)); // 150

    console.log("Intento retirar 200 de Juan:", retirar(c1, 200)); // true
    console.log("Saldo Juan:", consultarSaldo(c1)); // -50 no permitido, reviso

    // arreglo test correcto: 
    console.log("Intento retirar 120 de Juan:", retirar(c1, 120)); // true
    console.log("Saldo Juan:", consultarSaldo(c1)); // deberia restar

    console.log("Intento retirar 500 de Maria:", retirar(c2, 500)); // false
    console.log("Saldo Maria:", consultarSaldo(c2)); // 50

    console.log("Transferir 30 de Juan a Maria:", transferir(c1, c2, 30));
    console.log("Saldo Juan:", consultarSaldo(c1));
    console.log("Saldo Maria:", consultarSaldo(c2));

    console.log("Buscar a Maria:", buscarCuenta("Maria"));

    console.log("=== FIN TEST ===");
}

// ejecutar tests
test();