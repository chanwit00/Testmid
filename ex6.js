function removeDups(word){
    return Array.from(new Set(word)) 
}
const one = [1,0,1,0];
const two = ["the","big","cat"];
const three = ["John","Taylor","John"];

console.log(removeDups(one)) ; 
console.log(removeDups(two)) ; 
console.log(removeDups(three)) ; 