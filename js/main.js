let tableCount = 0;

const cuentas = {
    '1105': 'Caja',
    '110505': 'Caja general',
    '1110': 'Bancos',
    '111005': 'Moneda nacional',
    '1115': 'Entidades Financieras',
    '1120': 'Cartera',
    '1130': 'Documentos por Cobrar',
    '1140': 'Otros Valores',
    '1150': 'Cuentas de Orden',
    '1210': 'Clientes',
    '1220': 'Deudores Varios',
    '1230': 'Anticipos',
    '1240': 'Impuestos por Recuperar',
    '1250': 'Otros Deudores',
    '1305': 'Inventarios',
    '1310': 'Materias Primas',
    '1320': 'Productos en Proceso',
    '1330': 'Productos Terminados',
    '1405': 'Propiedades, Planta y Equipo',
    '1410': 'Terrenos',
    '1420': 'Construcciones',
    '1430': 'Maquinaria y Equipo',
    '1440': 'Muebles y Enseres',
    '1450': 'Equipo de Computación',
    '1505': 'Depreciación Acumulada',
    '1510': 'Amortización Acumulada',
    '1605': 'Gastos Pagados por Anticipado',
    '1610': 'Seguros',
    '1620': 'Rentas',
    '1705': 'Activos Intangibles',
    '1710': 'Patentes y Marcas',
    '1720': 'Software',
    '1805': 'Otros Activos',
    '1810': 'Cuentas de Orden',
    '2105': 'Cuentas por Pagar',
    '2110': 'Proveedores Nacionales',
    '2120': 'Proveedores Extranjeros',
    '2205': 'Cuentas por Pagar a Proveedores',
    '2210': 'Proveedores de Bienes',
    '2220': 'Proveedores de Servicios',
    '2305': 'Salarios por Pagar',
    '2310': 'Sueldos',
    '2320': 'Honorarios',
    '2405': 'Impuestos por Pagar',
    '2410': 'IVA por Pagar',
    '2420': 'Retención en la Fuente',
    '2505': 'Otros Pasivos',
    '2510': 'Proveedores por Pagar',
    '2520': 'Pasivos por Anticipos',
    '2605': 'Pasivos Laborales',
    '2610': 'Seguridad Social',
    '2620': 'Pensiones',
    '2705': 'Obligaciones Financieras',
    '2710': 'Préstamos Bancarios',
    '2720': 'Empréstitos',
    '2805': 'Pasivos de Orden',
    '2810': 'Cuentas de Orden',
    '2905': 'Pasivos Diferidos',
    '2910': 'Ingresos Diferidos',
    '2920': 'Gastos Diferidos',
    '3105': 'Capital Social',
    '3110': 'Acciones Ordinarias',
    '3120': 'Acciones Preferidas',
    '3205': 'Reservas',
    '3210': 'Reserva Legal',
    '3220': 'Reservas Estatutarias',
    '3305': 'Superávit',
    '3310': 'Superávit de Revaluación',
    '3405': 'Resultad del Ejercicio',
    '3410': 'Utilidad del Ejercicio',
    '3420': 'Pérdida del Ejercicio',
    '4105': 'Ventas',
    '4110': 'Ventas Nacionales',
    '4120': 'Ventas Extranjeras',
    '4205': 'Ingresos por Servicios',
    '4210': 'Servicios Nacionales',
    '4220': 'Servicios Extranjeros',
    '4305': 'Ingresos Financieros',
    '4310': 'Intereses Ganados',
    '4405': 'Otros Ingresos',
    '4410': 'Ingresos Diversos',
    '5105': 'Gastos Operacionales',
    '5110': 'Gastos de Administración',
    '5120': 'Gastos de Ventas',
    '5205': 'Gastos de Personal',
    '5210': 'Sueldos y Salarios',
    '5220': 'Honorarios',
    '5305': 'Gastos Financieros',
    '5310': 'Intereses Pagados',
    '5405': 'Otros Gastos',
    '5410': 'Gastos Diversos',
    '6105': 'Costos de Producción',
    '6110': 'Materia Prima',
    '6120': 'Mano de Obra',
    '6130': 'Costos Indirectos',
    '6205': 'Costos de Mercancías Vendidas',
    '6210': 'Compra de Mercancías',
    '6220': 'Costos de Ventas',
    '6305': 'Costos de Servicios',
    '6310': 'Costo de Servicios Prestados',
    '6405': 'Otros Costos',
    '6410': 'Costos Diversos'
};

function updateCuentaName(input) {
    const row = input.closest('tr');
    const codigo = input.value.trim();
    const cuentaInput = row.querySelector('input[placeholder="Cuenta"]');

    if (cuentas[codigo]) {
        cuentaInput.value = cuentas[codigo];
    } else {
        cuentaInput.value = ''; // Vacía el campo si el código no existe
    }
}


function addTable() {
    tableCount++;
    
    const tableHTML = `
    <table class="table" id="table-${tableCount}">
        <thead>
            <tr class="table__row">
                <th class="table__cell">Código Cuenta</th>
                <th class="table__cell">Cuenta</th>
                <th class="table__cell">Parcial</th>
                <th class="table__cell">Debe</th>
                <th class="table__cell">Haber</th>
                <th class="table__cell">Acciones</th>
            </tr>
        </thead>
        <tbody id="tbody-${tableCount}">
            <tr class="table__row">
                <td class="table__cell table__cell--input"><input type="number" placeholder="Código" oninput="updateCuentaName(this)"></td>
                <td class="table__cell table__cell--input"><input type="text" placeholder="Cuenta"></td>
                <td class="table__cell table__cell--input"><input type="number"></td>
                <td class="table__cell table__cell--input"><input type="number" placeholder="D" oninput="updateSum(${tableCount})"></td>
                <td class="table__cell table__cell--input"><input type="number" placeholder="H" oninput="updateSum(${tableCount})"></td>
                <td class="table__cell"><button onclick="addRow(${tableCount})">Agregar Fila</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="table__footer">
                <td colspan="3">Total</td>
                <td id="totalDebe-${tableCount}">0</td>
                <td id="totalHaber-${tableCount}">0</td>
                <td></td>
            </tr>
        </tfoot>
    </table>`;

    document.getElementById('tablesContainer').insertAdjacentHTML('beforeend', tableHTML);
}

function addRow(tableId) {
    const rowHTML = `
    <tr class="table__row">
        <td class="table__cell table__cell--input"><input type="number" placeholder="Código" oninput="updateCuentaName(this)"></td>
        <td class="table__cell table__cell--input"><input type="text" placeholder="Cuenta"></td>
        <td class="table__cell table__cell--input"><input type="number"></td>
        <td class="table__cell table__cell--input"><input type="number" placeholder="D" oninput="updateSum(${tableId})"></td>
        <td class="table__cell table__cell--input"><input type="number" placeholder="H" oninput="updateSum(${tableId})"></td>
        <td class="table__cell"><button onclick="removeRow(this)">Eliminar</button></td>
    </tr>`;
    
    document.getElementById(`tbody-${tableId}`).insertAdjacentHTML('beforeend', rowHTML);
}

function removeRow(button) {
    const row = button.closest('tr');
    row.remove();
    const tableId = row.closest('table').id.split('-')[1];
    updateSum(tableId);
}


function updateSum(tableId) {
    let totalDebe = 0;
    let totalHaber = 0;

    document.querySelectorAll(`#table-${tableId} tbody tr`).forEach(row => {
        const debeValue = parseFloat(row.querySelector('input[placeholder="D"]').value) || 0;
        const haberValue = parseFloat(row.querySelector('input[placeholder="H"]').value) || 0;
        totalDebe += debeValue;
        totalHaber += haberValue;
    });

    document.getElementById(`totalDebe-${tableId}`).textContent = totalDebe;
    document.getElementById(`totalHaber-${tableId}`).textContent = totalHaber;

    const table = document.getElementById(`table-${tableId}`);
    if (totalDebe === totalHaber) {
        table.classList.add('table--balanced');
        table.classList.remove('table--unbalanced');
    } else {
        table.classList.add('table--unbalanced');
        table.classList.remove('table--balanced');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const openCalculatorButton = document.getElementById('open-calculator');
    const closeCalculatorButton = document.getElementById('close-calculator');
    const modal = document.getElementById('calculator-modal');
    const calculateButton = document.getElementById('calculate-button');
    const amountInput = document.getElementById('amount');
    const percentageSelect = document.getElementById('percentage');
    const resultDiv = document.getElementById('result');
    const modalContent = document.querySelector('.modal-content');

    // Abrir la ventana flotante
    openCalculatorButton.onclick = function() {
        modal.style.display = 'flex';
    };

    // Cerrar la ventana flotante
    closeCalculatorButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Calcular el valor
    calculateButton.onclick = function() {
        const amount = parseFloat(amountInput.value);
        const percentage = parseFloat(percentageSelect.value);

        if (isNaN(amount) || amount <= 0) {
            resultDiv.innerHTML = 'Por favor, ingrese un valor válido.';
            return;
        }

        const result = (amount * percentage) / 100;
        resultDiv.innerHTML = `El cálculo del ${percentage}% es: $${result.toFixed(2)}`;
    };
});
