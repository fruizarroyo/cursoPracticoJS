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
function calcularPerimetroCuadrado () {
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById("input-cuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo () {
    const sideA = Number(document.getElementById("input-triangle-a-side").value);
    const sideB = Number(document.getElementById("input-triangle-b-side").value);
    const base = Number(document.getElementById("input-triangle-base").value);

    const perimetro = perimetroTriangulo(sideA, sideB, base);
    alert(perimetro);
}

function calcularAreaTriangulo () {
    const base = Number(document.getElementById("input-triangle-base").value);
    const height = Number(document.getElementById("input-triangle-height").value);
    const area = areaTriangulo(base, height);
    alert(area);
}

function calcularAlturaTrianguloIsosceles () {
    const sideA = Number(document.getElementById("input-triangle-a-side").value);
    const sideB = Number(document.getElementById("input-triangle-b-side").value);
    const base = Number(document.getElementById("input-triangle-base").value);
    const altura = alturaTrianguloIsosceles(sideA, sideB, base);
    alert(altura);
}

function calcularPerimetroCirculo () {
    const radio = Number(document.getElementById("input-circle").value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo () {
    const radio = Number(document.getElementById("input-circle").value);
    const area = areaCirculo(radio);
    alert(area);
}


function showSquare() {
    square.style.display = 'flex';
    triangle.style.display= 'none'
    circle.style.display='none'
}

function showTriangle () {
    triangle.style.display = 'flex';
    square.style.display= 'none'
    circle.style.display='none'
}

function showCircle() {
    circle.style.display = 'flex';
    square.style.display= 'none'
    triangle.style.display='none'
}


