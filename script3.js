//Ejercicio 3: Obtener la posición de los siguientes valores
// Dorelly, Mundo, HOLA

array3 = ["hola","HOLA","Dorelly","Mundo","Juan Diego","Roxana"];
elements = ['Dorelly', 'Mundo', 'HOLA'];
index = [];
for (var y = 0; y < elements.length; y++){
  index.push(array3.indexOf(elements[y]));
}

$('#position').html(JSON.stringify(index));
