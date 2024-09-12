/*Banco virtual
se venden dolares que se cobran en diferentes pesos
los primeros 200 del dia se venden a $160
los 800 siguientes se venden a $170
luego de llegar a los 1000 dolares por dia se empiezan a cobrar a $190*/
let U$="";
let peso="160";
let peso1="170";
let peso2="190";
let total="";

function Convertidor(){
let doloresGuardados=document.getElementById(dolares)
if(doloresGuardados<=200){
    total=peso*200;
    doloresGuardados=doloresGuardados-200;
}
if(doloresGuardados<=800){
    total=total+(peso1*800)
    doloresGuardados=doloresGuardados-800;
}
if(doloresGuardados<=1000 || doloresGuardados>=1000){
total=total+(peso2*doloresGuardados);
}
}

