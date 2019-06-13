//Ejercicio 5: Obtener el menor valor del array 
array5 = [3, 6, 10, 76, 1009, 10874, 10, 80, 120];
numberMenor = 3;
for (var a = 0; a < array5.length; a++){
  if(array5[a] < numberMenor){
    numberMenor = array5[a];
  }
}
$('#array5').html(JSON.stringify(array5));
$('#smallerNumber').html(numberMenor);
