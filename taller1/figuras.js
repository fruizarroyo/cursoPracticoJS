const triangle = document.getElementById("triangle");
const square = document.getElementById("square");
const circle = document.getElementById("circle");

// Código del cuadrado
function perimetroCuadrado (lado) {
    return lado*4;
} 

function areaCuadrado (lado) {
    return lado*lado;
} 



// Código del triángulo
 
function perimetroTriangulo (lado1, lado2, base) {
    return lado1+lado2+base;
}


function areaTriangulo (base, altura) {
    return (base*altura)/2
} 

function alturaTrianguloIsosceles (lado1, lado2, base) {
    if (lado1===lado2) {
        resultado = Math.sqrt((lado1*lado2)-((base*base)/4))
    } else {
        resultado = "No es un triángulo isósceles";
        console.error("No es un triángulo isósceles")
    }
    return resultado
}



// Código del círculo


const pi = Math.PI;

function diametroCirculo (radio) {
    return radio*2
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro*pi;
} 
function areaCirculo (radio) {
    return radio*radio*pi;
}




// Aquí interactuamos con el html


function closeOpenMenuMobile() {
    const menuMobile = document.getElementById("menu-mobile");
    console.log("Así estaba: " +menuMobile.style.display)
    if (menuMobile.style.display=='' || menuMobile.style.display=='none' ) {
        menuMobile.style.display='flex';
    } else {
        menuMobile.style.display='none';
    }
}

function displayResults(result, id, text) {
    const element = document.getElementById(id);
    const resultsDisplayed = element.innerHTML
    if (resultsDisplayed) {    
        element.innerText= "";
        element.innerText = text +": " + result; 
    } else {
        element.innerText = text +": " + result; 
    }
}

function calcularPerimetroCuadrado () {
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    displayResults(perimetro, "result-content-square", "El perímetro del cuadrado es")
}

function calcularAreaCuadrado () {
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    displayResults(area, "result-content-square", "El área del cuadrado es")
}

function calcularPerimetroTriangulo () {
    const sideA = Number(document.getElementById("input-triangle-a-side").value);
    const sideB = Number(document.getElementById("input-triangle-b-side").value);
    const base = Number(document.getElementById("input-triangle-base").value);

    const perimetro = perimetroTriangulo(sideA, sideB, base);
    displayResults(perimetro, "result-content-triangle", "El perímetro del triángulo es")
}

function calcularAreaTriangulo () {
    const base = Number(document.getElementById("input-triangle-base").value);
    const height = Number(document.getElementById("input-triangle-height").value);
    const area = areaTriangulo(base, height);
    displayResults(area, "result-content-triangle", "El área del triángulo es")
}

function calcularAlturaTrianguloIsosceles () {
    const sideA = Number(document.getElementById("input-triangle-a-side").value);
    const sideB = Number(document.getElementById("input-triangle-b-side").value);
    const base = Number(document.getElementById("input-triangle-base").value);
    const altura = alturaTrianguloIsosceles(sideA, sideB, base);
    displayResults(altura, "result-content-triangle", "La altura del triángulo isósceles es")
}

function calcularPerimetroCirculo () {
    const radio = Number(document.getElementById("input-circle").value);
    const perimetro = perimetroCirculo(radio);
    displayResults(perimetro, "result-content-circle", "El perímetro del círculo es")
}

function calcularAreaCirculo () {
    const radio = Number(document.getElementById("input-circle").value);
    const area = areaCirculo(radio);
    displayResults(area, "result-content-circle", "El área del círculo es")
}


function showSquare() {
    square.style.display = 'flex';
    triangle.style.display= 'none';
    circle.style.display='none';
}

function showTriangle () {
    triangle.style.display = 'flex';
    square.style.display= 'none';
    circle.style.display='none';
}

function showCircle() {
    circle.style.display = 'flex';
    square.style.display= 'none';
    triangle.style.display='none';
}


