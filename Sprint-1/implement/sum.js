function sum(elements) {
    if (elements.length < 1){
        return 0;
    } else if (elements.length == 1){
        return elements;
    }
    
    let total = 0;
    for (i=0; i < elements.length; i++){
      if (typeof elements[i] === "number" && Number.isFinite(elements[i])) {
        total += elements[i];
      }
    }
    return total;
}

module.exports = sum;
