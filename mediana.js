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







