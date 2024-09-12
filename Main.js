/*Banco virtual
se venden dolares que se cobran en diferentes pesos
los primeros 200 del dia se venden a $160
los 800 siguientes se venden a $170
luego de llegar a los 1000 dolares por dia se empiezan a cobrar a $190*/
let U$=0;
let peso = 160;
let peso1 = 170;
let peso2= 190;
let cant1=200;
let cant2=800;
let total = 0 ;
let producto=0;
let html=``

function Ingresar(){
    
     if(document.getElementById("IngresarDolares").value<=0){
       
        alert("Debes ingresar una cantidad valida de dolares mayor a 0")
    }
    else{
        U$ = U$ + parseInt(document.getElementById("IngresarDolares").value);
        document.getElementById("mostrar").innerHTML=U$
    }
}
function Retirar(){

    if(document.getElementById("RetiarDolares").value>U$){
        alert("No hay saldo suficiente")
    }
    else{
        if(document.getElementById("RetiarDolares").value<=0){
            alert("Debe ingresar una cantidad mayor a 0")
        }
        else{

            U$=U$-parseInt(document.getElementById("RetiarDolares").value);
            alert("Se han extraido sus dolares")
            document.getElementById("mostrar").innerHTML=U$
        }
    }
}

function Convertir(){
    if(document.getElementById("Cambiar").value<=0){
       alert("Debe ingresar un valor mayor a 0 para convertir") 
    }
    else{
        let doloresCambiar=document.getElementById("Cambiar").value
        if(doloresCambiar<=U$){
            if(cant1>0){
        if(doloresCambiar>=cant1){
            producto=peso*cant1
            total=total+(producto)
            cant1=cant1-cant1
            U$=U$-200
            doloresCambiar=doloresCambiar-200
             html+=`<p>Cantidad de dolares convertidos a peso:200, Precio en peso:${producto}, Peso Argentino Oficial</p>`
           document.getElementById("mostrar").innerHTML=U$
            document.getElementById("transactionHistory").innerHTML=html
        }
        else{
            producto=peso*doloresCambiar
            total=total+(producto)
            cant1=cant1-doloresCambiar
            U$=U$-doloresCambiar
            html+=`<p>Cantidad de dolares convertidos a peso:${doloresCambiar}, Precio en peso:${producto}, Peso Argentino Oficial</p>`
            document.getElementById("mostrar").innerHTML=U$
            document.getElementById("transactionHistory").innerHTML=html
            doloresCambiar=0
        }
    }
    if(doloresCambiar>0){
        if(cant2>0){
            if(doloresCambiar>=cant2){
                producto=peso1*cant2
                total=total+(producto)
                cant2=cant2-cant2
                doloresCambiar=doloresCambiar-800
                U$=U$-800
                 html+=`<p>Cantidad de dolares convertidos a peso:800, Precio en peso:${producto}, Peso Argentino CCL</p>`
           document.getElementById("mostrar").innerHTML=U$
            document.getElementById("transactionHistory").innerHTML=html
            }else{
                producto=peso1*doloresCambiar
                total=total+(producto)
            cant2=cant2-doloresCambiar
            U$=U$-doloresCambiar
            html+=`<p>Cantidad de dolares convertidos a peso:${doloresCambiar}, Precio en peso:${producto}, Peso Argentino CCL</p>`
            document.getElementById("mostrar").innerHTML=U$
            document.getElementById("transactionHistory").innerHTML=html
            doloresCambiar=0
        }
    }
}
if(doloresCambiar>0){
    producto=peso2*doloresCambiar
            total=total+(producto);
            U$=U$-doloresCambiar
             html+=`<p>Cantidad de dolares convertidos a peso:${doloresCambiar}, Precio en peso:${producto}, Peso Argentino MEP</p>`
           document.getElementById("mostrar").innerHTML=U$
            document.getElementById("transactionHistory").innerHTML=html
            doloresCambiar=doloresCambiar-doloresCambiar;     
    }
}
else{
    alert("saldo insuficiente")
}
document.getElementById("Total").innerHTML=total
}
}

function mostrar(){
    document.getElementById("ver").classList.toggle("ocultar")
}