
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

function convertToInt (array) {
    return array.map( (element) => parseInt(element))
}


function geometricMean () {
    const array = inputArray;
    let growthFactor = array.map( (element) => element+1)
    let n = growthFactor.length;
    const formula =  (growthFactor.reduce( (a,b) => a*b))**(1/n);
    const result = (formula-1)*100;
    displayResults(result, "result-parragraph", "La media geométrica del array de valores es")
}



function calculateMean(arrayParameter = null) {
    // let accumulatedSum = 0;
    // for (let i=0; i<list.length; i++) {
    //     accumulatedSum=accumulatedSum + list[i];
    // };

    // Declaramos el array del ámbito interno de la función
    let array; 

    //Comprobamos si se pasó un array como argumento
    if (arrayParameter) {
        array = arrayParameter;

        array = convertToInt(array);

        const accumulatedSum = array.reduce(
            (accumulatedValue, currentValue)=>{
                return accumulatedValue+currentValue;
            })

        const listMean = accumulatedSum/array.length;

        return listMean;

    } else {
        const stringArray = document.getElementById("input-array").value;
        array = stringArray.split(",");
        
    // Convertir a número cada elemento del array
        array = convertToInt(array);

        const accumulatedSum = array.reduce(
            (accumulatedValue, currentValue)=>{
                return accumulatedValue+currentValue;
            })

        const listMean = accumulatedSum/array.length;
        displayResults(listMean, "result-parragraph", "La media del array de valores es")
    }
     


};

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false
    }
};


function calculateMedian () {
    const stringArray = document.getElementById("input-array").value;
    let array = stringArray.split(",");

    // Convertir a número cada elemento del array
    array = convertToInt(array);

    if (array.length) {
        array.sort((a, b) => a-b) ;

        const listMiddle = parseInt(array.length/2);
        let median;

        if (isEven(array.length)) {
            const firstElement = array[listMiddle-1];
            const secondElement = array[listMiddle];
            const mean = calculateMean([firstElement, secondElement]);

            median = mean;
        } else {
            median = array[listMiddle];
        };
        displayResults(median, "result-parragraph", "La mediana del array de valores es")
    }
    else {
            console.error("La lista de datos debe contener al menos un valor");
        }

};

function calculateMode() {
    const stringArray = document.getElementById("input-array").value;
    let array = stringArray.split(",");

    // Convertir a número cada elemento del array
    array = convertToInt(array);

    let objectArray = {};
    //Convertir a objeto
    array.forEach( (arrayElement) => {
        if (objectArray[arrayElement] === undefined) {
            objectArray[arrayElement] = 1;
        } else {
            objectArray[arrayElement] += 1;
        }
    })

    // Convertir a array y organizar DESCENDENTEMENTE
    const sortedArray = Object.entries(objectArray).sort(([,a], [,b]) => b - a)

    // Filtrar el array por el primer valor (máximo valor)
    const filteredArray = sortedArray.filter( ([ , frequency]) => {
        return frequency=== sortedArray[0][1] //Acceder al segundo elemento de la primera entrada.
    } );

    // Extraer solo las modas de la lista de array filtrada
    const modeArray = filteredArray.map( (element) => element[0]);

    let mensaje;
    if (filteredArray.length>1) {
        mensaje = "Las modas del array de valores son" 
    } else {
        mensaje = "La moda del array de valores es" 
    }
    displayResults(modeArray.toString(), "result-parragraph",  mensaje)
}







