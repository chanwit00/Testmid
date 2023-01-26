function digitalClock(sec){
    let hr = Math.floor(sec / 3600)
    let min = ((sec - Math.floor(sec / 3600))/60) 
    // let second =
    return hr +":"+ min +":";

}


console.log (digitalClock(5025));
console.log (digitalClock(61201));
console.log (digitalClock(87000));