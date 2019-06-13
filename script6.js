//Ejercicio 6: Obtener el mayor valor del array 
array6 = [3, 6, 10, 76, 1009, 10874, 10, 80, 120];
numberMayor = 3;
for (var b = 0; b < array6.length; b++){
  if(array6[b] > numberMayor){
    numberMayor = array6[b];
  }
}
$('#array6').html(JSON.stringify(array6));
$('#number').html(numberMayor);
