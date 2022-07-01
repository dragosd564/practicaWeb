let villas = document.getElementById('villas');
let villas2 = document.getElementById('villas2');
let villas3 = document.getElementById('villas3');
let villas4 = document.getElementById('villas4');
let villas5 = document.getElementById('villas5');
//tabla
const tabla = document.querySelector('#lista-Fechas tbody');
const row = document.createElement('tr');
//nav
let nav = document.getElementsByClassName('.nav-link');
//datos
const url = '/data/datos.json';
//variables extras
let estado = "";
let datos;
let o;
let nombreEstados ;
//arreglos de datos
let vil = [villas, villas2, villas3, villas4, villas5];
let manzanas = [1, 4, 3, 2, 5];

//nav
let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(navlink => {
    navlink.addEventListener('click', function () {
        navLink.forEach(navlink => navlink.classList.remove('active'));
        this.classList.add('active');
    })
});
//iniciar DOM
window.addEventListener('DOMContentLoaded', () => {
    loadData();
})

function loadData() {
    fetch(url).then(rep => rep.json())
        .then((data) => {
            datos = data;
            for (let i = 0; i < manzanas.length; i++) {
                addtoPage(data, vil[i], manzanas[i]);
            }
        })
}

function modal(id) {
    document.getElementById('id01').style.display='block';
    document.getElementById('nombres').innerHTML = id.nombre;  
    Colores(id.estado);

    tabla.innerHTML = '';
    row.innerHTML = `
    <td>${id.telefono}</td>
    <td>${id.email}</td>
    <td>${id.email}</td>
    <td>${id.email}</td>
    <td style="background:${o};color:white;">${nombreEstados}</td>
    <td>
    <img src="/assets/descarga.png" width="25px" height="30px" onclick="modalTransacion()"/>
    </td>
    `;
    tabla.appendChild(row);
    
}
function closeModal() {
    document.getElementById('id01').style.display='none';
    document.getElementById('modalTransaccion').style.display='none';
}
function modalTransacion(){
    document.getElementById('modalTransaccion').style.display='block';
}

function addtoPage(arr, villa, manzana) {
    for (let i = 0; i < arr.urbanizaciones.length; i++) {
        let casa = arr.urbanizaciones[i];
        let lista = document.createElement('li');
        estado = casa.estado;
        if (casa.manzana == manzana) {
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villa.appendChild(lista);
            lista.onclick = function () { modal(casa) };
        }
        switch (casa.estado) {
            case 'verde':
                lista.style.backgroundColor = 'green';
                break;
            case 'amarillo':
                lista.style.backgroundColor = 'yellow';
                break;
            case 'rojo':
                lista.style.backgroundColor = 'red';
                break;
            case 'gris':
                lista.style.backgroundColor = 'gray';
                break;
        }
    }
}
function cambios(color) {
    villas.innerHTML = "";
    villas2.innerHTML = "";
    villas3.innerHTML = "";
    villas4.innerHTML = "";
    villas5.innerHTML = "";
    mostrarColores(color);
}
function mostrarColores(color) {
    switch (color) {
        case 'todos':
            for (let i = 0; i < manzanas.length; i++) {
                addtoPage(datos, vil[i], manzanas[i]);
            }
            break;
        case 'verde':
            listaDeCasas('verde', 'green');
            break;
        case 'gris':
            listaDeCasas('gris', 'gray');
            break
        case 'amarillo':
            for (let i = 0; i < datos.urbanizaciones.length; i++) {
                let casa = datos.urbanizaciones[i];
                let lista = document.createElement('li');
                estado = casa.estado;
                colorManzana(casa, lista);
                switch (casa.estado) {
                    case 'amarillo':
                        lista.style.backgroundColor = 'yellow';
                        break;
                    case 'rojo':
                        lista.style.backgroundColor = 'red';
                        break;
                }
            }
            break;


    }
}
function listaDeCasas(colorEstado, color) {
    for (let i = 0; i < datos.urbanizaciones.length; i++) {
        let casa = datos.urbanizaciones[i];
        let lista = document.createElement('li');
        estado = casa.estado;
        colorManzana(casa, lista);
        switch (casa.estado) {
            case colorEstado:
                lista.style.backgroundColor = color;
                break;
        }
    }
}
function colorManzana(casa, lista) {
    switch (casa.manzana) {
        case 1:
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villas.appendChild(lista);
            break;
        case 2:
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villas4.appendChild(lista);
            break;
        case 3:
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villas3.appendChild(lista);
            break;
        case 4:
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villas2.appendChild(lista);
            break;
        case 5:
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villas5.appendChild(lista);
            break;
    }
}
function Colores(color) {
    switch (color) {
        case 'verde':
            o = 'green';
            nombreEstados = 'Completado';
            break;
        case 'gris':
            o = 'gray';
            nombreEstados = 'Sin propietario';
            break;
        case 'amarillo':
            o = '#798707';
            nombreEstados = 'En proceso';
            break;
        case 'rojo':
            o = 'red';
            nombreEstados = 'Pendiente';
            break;
    }
}
