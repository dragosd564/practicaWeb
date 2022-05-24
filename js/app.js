let villas = document.querySelector('.villas');
let villas2 = document.querySelector('.villas2');
let villas3 = document.querySelector('.villas3');
let villas4 = document.querySelector('.villas4');
let villas5 = document.querySelector('.villas5');

let nav = document.querySelectorAll('.nav-link');

const url = 'data/datos.json';

let estado ="";
let datos;

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    loadData();
})



function loadData() {
    fetch(url).then(rep => rep.json())
        .then((data) => {
            datos = data;
            addtoPage(data, villas, 1);
            addtoPage(data, villas2, 4);
            addtoPage(data, villas3, 3);
            addtoPage(data, villas4, 2);
            addtoPage(data, villas5, 5);
        })
}

function addtoPage(arr, villa, manzana) {
    for (let i = 0; i < arr.urbanizaciones.length; i++) {
        let casa = arr.urbanizaciones[i];
        let lista = document.createElement('li');
        estado = casa.estado;
        if (casa.manzana == manzana) {
            lista.classList.add('casas');
            lista.textContent = casa?.id_residente;
            villa.append(lista);
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
function cambio(arr, villa, manzana){
    let villas = [];
    let lista = document.createElement('li');
    for (let i = 0; i < arr.urbanizaciones.length; i++) {
        let casa = arr.urbanizaciones[i];
        estado = casa.estado;
        if (casa.manzana == manzana) {
            villas.push(casa);
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
    console.log(villas.filter(casa => casa.estado == 'verde'));
    
}

Array.from(nav).forEach(item => {
    item.addEventListener('click', () => {
       let activeClass = document.querySelector('.active');
        activeClass.className = activeClass.className.replace('active', '');
        item.className += ' active';
        cambio(datos, villas, 1);
        cambio(datos, villas2, 4);
        cambio(datos, villas3, 3);
        cambio(datos, villas4, 2);
        cambio(datos, villas5, 5);
    })
})
