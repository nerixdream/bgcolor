// Variables
const btnPrimary = document.querySelector('#btn-primary');
const buttonsContainer = document.querySelector('.buttons-container');
const bodyContainer = document.querySelector('body');

//IIFE
// listeners para agregar/quitar botones y cambiar color 
(() => {
    btnPrimary.addEventListener('click', agregarBotones);

    buttonsContainer.addEventListener('click', delegacion);
})();
// Lee valores de localstorage y asigna el valor guardado
(() => {
    const color = localStorage.getItem('colorFondo');
    bodyContainer.className = color;
    switch (color) {
        case 'bnt1':
            buttonsContainer.style.borderTopColor = '#5900ff';
            break;
        case 'bnt2':
            buttonsContainer.style.borderTopColor = '#e7281f';
            break;
        case 'bnt3':
            buttonsContainer.style.borderTopColor = '#589d70';
            break;
        case 'bnt4':
            buttonsContainer.style.borderTopColor = '#f68d2d';
            break;
        case 'bnt5':
            buttonsContainer.style.borderTopColor = '#89a9ca';
            break;
        case 'bnt6':
            buttonsContainer.style.borderTopColor = '#f37298';
            break;
        default:
            break;
    }
})();

//Agrega y quita botones
function agregarBotones(e) {
    e.preventDefault();

    if (buttonsContainer.childElementCount > 0) {
        //childElementCount cuenta cuantos elementos hay dentro de buttonsContainer
        //Si hay elementos los quita con la siguiente linea
        buttonsContainer.innerHTML = '';
    } else {
        //Si no encuentra elementos se agregar
        buttonsContainer.innerHTML = `
            <a href="#" class="btn bnt1">Azul</a>
            <a href="#" class="btn bnt2">Rojo</a>
            <a href="#" class="btn bnt3">Verde</a>
            <a href="#" class="btn bnt4">Naranja</a>
            <a href="#" class="btn bnt5">Fucsia</a>
            <a href="#" class="btn bnt6">Rosa</a>
        `
    }
}


function delegacion(e) {
    e.preventDefault();
    //Accedemos a la segunda clase
    const eventoBtn = e.target.classList[1];

    switch (eventoBtn) {
        case 'bnt1':
            bodyContainer.className = 'bnt1';
            buttonsContainer.style.borderTopColor = '#5900ff';
            localStorage.setItem('colorFondo', 'bnt1');
            break;
        case 'bnt2':
            bodyContainer.className = 'bnt2';
            buttonsContainer.style.borderTopColor = '#e7281f';
            localStorage.setItem('colorFondo', 'bnt2');
            break;
        case 'bnt3':
            bodyContainer.className = 'bnt3';
            localStorage.setItem('colorFondo', 'bnt3');
            buttonsContainer.style.borderTopColor = '#589d70';
            break;
        case 'bnt4':
            bodyContainer.className = 'bnt4';
            localStorage.setItem('colorFondo', 'bnt4');
            buttonsContainer.style.borderTopColor = '#f68d2d';
            break;
        case 'bnt5':
            bodyContainer.className = 'bnt5';
            localStorage.setItem('colorFondo', 'bnt5');
            buttonsContainer.style.borderTopColor = '#89a9ca';
            break;
        case 'bnt6':
            bodyContainer.className = 'bnt6';
            localStorage.setItem('colorFondo', 'bnt6');
            buttonsContainer.style.borderTopColor = '#f37298';
            break;
        default:
            break;
    }
}