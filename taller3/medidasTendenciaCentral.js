function geometricMean (array) {

    let growthFactor = array.map( (element) => element+1)
    let n = growthFactor.length;
    const formula =  (growthFactor.reduce( (a,b) => a*b))**(1/n);
    const result = (formula-1)*100;
    return result;
}

function calculateMean(list) {
    // let accumulatedSum = 0;
    // for (let i=0; i<list.length; i++) {
    //     accumulatedSum=accumulatedSum + list[i];
    // };

    const accumulatedSum = list.reduce(
        (accumulatedValue, currentValue)=>{
            return accumulatedValue+currentValue;
        })

    const listMean = accumulatedSum/list.length;
    return listMean;
};

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false
    }
};


function calculateMedian (list) {

    if (list.length) {
        list.sort((a, b) => a-b) ;

        const listMiddle = parseInt(list.length/2);
        let median;

        if (isEven(list.length)) {
            const firstElement = list[listMiddle-1];
            const secondElement = list[listMiddle];
            const mean = calculateMean([firstElement, secondElement]);
            median = mean;
        } else {
            median = list[listMiddle];
        };

        return median;}
    else {
            console.error("La lista de datos debe contener al menos un valor");
        }

};

function calculateMode(array) {
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


    return filteredArray;
}







