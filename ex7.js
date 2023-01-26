function sumTwoSmallestNunes(small){
    let num = small;
    let newnum = num.sort((a,b)=>a-b);
    let sum = newnum[0]+newnum[1];
    return sum;
}

const one = ([19, 5, 42, 2, 77]) ;
const two = ([10, 343445353,3453445, 3453545353453]) ;
const three = ([2, 9, 6, -1]) ;
const four = ([879, 953, 694, -847, 342, 221, -91,-723, 791, -587]) ;
const five = ([3683, 2902, 3951, -475, 1617, -2385]) ;


console.log (sumTwoSmallestNunes(one));
console.log (sumTwoSmallestNunes(two));
console.log (sumTwoSmallestNunes(three));
console.log (sumTwoSmallestNunes(four));
console.log (sumTwoSmallestNunes(five));