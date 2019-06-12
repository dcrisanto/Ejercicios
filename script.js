//Ejercicio 1: Imprimir el array con los valores únicos
array1 = ['hola', 'Hola', 'Dorelly', 'mundo', 'Juan Diego', 'mundo', 'Roxana'];
newArray = [];
for(var i=0; i<array1.length; i++){
  if(!newArray.includes(array1[i])){
    newArray = newArray.concat(array1[i]);
  }
}
$('#array').html(JSON.stringify(array1));
$('#newArray').html(JSON.stringify(newArray));
console.log(newArray);
