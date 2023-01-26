function capToFront(word){
    let chars = word.split('')

const uppercase = chars.filter((char) => char === char.toUpperCase())
const lowercase = chars.filter((char) => char === char.toLowerCase())

const result = [...uppercase, ...lowercase].join('')
return result

}

console.log (capToFront("hApPy"));
console.log (capToFront("moveMENT"));
console.log (capToFront("shOrtCAKE"));