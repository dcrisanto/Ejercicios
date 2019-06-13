//Ejercicio 4: Obtener un array con todos los elementos
// que son únicos
array4 = ['hola', 'Hola', 'Dorelly', 'mundo', 'Juan Diego', 'mundo', 'Roxana'];
arrayUnique = [];
elementsRepeated = [];
for(var z=0; z < array4.length; z++){
  if(!arrayUnique.includes(array4[z])){
    arrayUnique.push(array4[z]);
  }
  else{
    elementsRepeated.push(array4[z]);
  }
}
for(var w = 0; w < elementsRepeated.length; w++){
  arrayUnique.splice((arrayUnique.indexOf(elementsRepeated[w])),1);
}

$('#array4').html(JSON.stringify(array4))
$('#newArray4').html(JSON.stringify(arrayUnique))
