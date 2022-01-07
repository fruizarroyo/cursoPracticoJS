function geometricMean (array) {

    let growthFactor = array.map( (element) => element+1)
    let n = growthFactor.length;
    const formula =  (growthFactor.reduce( (a,b) => a*b))**(1/n);
    const result = (formula-1)*100;
    return result;
}
