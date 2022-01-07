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

