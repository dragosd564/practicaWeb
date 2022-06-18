let villas = document.getElementById('villas');
let villas2 = document.getElementById('villas2');
let villas3 = document.getElementById('villas3');
let villas4 = document.getElementById('villas4');
let villas5 = document.getElementById('villas5');

let nav = document.getElementsByClassName('.nav-link');

const url = '/data/datos.json';

let estado = "";
let datos;
let navLink = document.querySelectorAll('.nav-link');

navLink.forEach(navlink =>{
    navlink.addEventListener('click', function(){
        navLink.forEach(navlink =>navlink.classList.remove('active'));
        this.classList.add('active');
    })
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    loadData();
})

function loadData() {
    fetch(url).then(rep => rep.json())
        .then((data) => {
            datos = data;
            var vil = [villas, villas2, villas3, villas4, villas5];
            var manzanas = [1,4,3,2,5];
            for (let i = 0; i < manzanas.length; i++) {
                addtoPage(data, vil[i], manzanas[i]);
            }
        })
}

function myFunction(id) {
  console.log(id);
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
            lista.onclick = function() {myFunction(casa.id_residente)};
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
            addtoPage(datos, villas, 1);
            addtoPage(datos, villas2, 4);
            addtoPage(datos, villas3, 3);
            addtoPage(datos, villas4, 2);
            addtoPage(datos, villas5, 5);
            break;
        case 'verde':
            for (let i = 0; i < datos.urbanizaciones.length; i++) {
                let casa = datos.urbanizaciones[i];
                let lista = document.createElement('li');
                estado = casa.estado;
                colorManzana(casa, lista);
                switch (casa.estado) {
                    case 'verde':
                        lista.style.backgroundColor = 'green';
                        break;
                }
            }
            break;
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
        case 'gris':
            for (let i = 0; i < datos.urbanizaciones.length; i++) {
                let casa = datos.urbanizaciones[i];
                let lista = document.createElement('li');
                estado = casa.estado;
                colorManzana(casa, lista);
                switch (casa.estado) {
                    case 'gris':
                        lista.style.backgroundColor = 'gray';
                        break;
                }
            }
            break;

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