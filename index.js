const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo")
}
function appendKitten(name){
  return [...kittens,name]
}
function prependKitten(name){
  return [name,...kittens]
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
  return kitten.slice(1,kittens.length-1,)
}
