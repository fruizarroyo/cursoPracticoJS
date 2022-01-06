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
}

