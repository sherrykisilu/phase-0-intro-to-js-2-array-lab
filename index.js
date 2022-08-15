// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
//console.log(destructivelyAppendCat("Ralph"));
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
// console.log(destructivelyPrependCat("Bob"))
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
// console.log (destructivelyRemoveLastCat("Garfield"))
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
function appendCat(name){
    let copyCat=[...cats,name]
    return copyCat;
}
function prependCat(name){
    let anotherCat=[name,...cats]
    return anotherCat;
}
function removeLastCat(){
    let newArray=cats.slice(0,-1);
    console.log(newArray);
    return newArray;
}
removeLastCat();
function removeFirstCat(){
    let another=cats.slice(1);
    return another;
}
console.log(cats.length);


