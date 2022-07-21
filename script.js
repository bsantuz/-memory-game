
var carta1 = ""
var carta2 = ""
var pontuação = 0
var bg = "rgb(66, 69, 88)"
var n = []


function _click(num){

    
    var c = window.getComputedStyle(document.getElementById("c"+num)).getPropertyValue("background-color")

    if (c == bg){
        if (carta1 == ""){
            carta1 = num
            escolhas(num);
            
        } else  if(carta2 == ""){
            carta2 = num
            escolhas(num);

            var c1 = document.getElementById("c"+carta1).style.backgroundColor
            var c2 = document.getElementById("c"+carta2).style.backgroundColor

            if(c1 == c2){
                pontuação += 1
                document.getElementById("pontos").innerHTML = "pontos : "+ pontuação
            }
            
        } else if (carta1 == num){

            carta1 = ""
            document.getElementById("c"+num).style.backgroundColor = bg
            
        } else  if(carta2 == num){

            carta2 = ""
            document.getElementById("c"+num).style.backgroundColor = bg
            
        } else{
            var c1 = document.getElementById("c"+carta1).style.backgroundColor
            var c2 = document.getElementById("c"+carta2).style.backgroundColor

                console.log(c1+"  "+c2)
            if(c1 != c2){
                
                console.log(c1+ " " + c2)
                document.getElementById("c"+carta1).style.backgroundColor = bg
                document.getElementById("c"+carta2).style.backgroundColor = bg
            } 
            
            escolhas(num);
            carta1 = num
            carta2 = ""
        }
    }
 
}

function random(){

    for (var i = 0; i < 8; i++){
        n[i] = i;
        document.getElementById("c"+i).style.backgroundColor = bg
        
    }

    var x
    var tmp
    for (var p = n.length; p;){
        x = Math.random() * p-- |  0;
        tmp = n[x]
        n[x] = n[p]
        n[p] = tmp
    }
    console.log(n)
}

function escolhas(num){
    var l = parseInt(num)
    switch (n[l]){
        case 0:
            document.getElementById("c"+num).style.backgroundColor = "red"
            break;
        case 1:
            document.getElementById("c"+num).style.backgroundColor = "blue"
            break;
         case 2:
            document.getElementById("c"+num).style.backgroundColor = "red"
            break;
        case 3:
            document.getElementById("c"+num).style.backgroundColor = "blue"
            break;
        case 4:
            document.getElementById("c"+num).style.backgroundColor = "green"
            break;
        case 5:
            document.getElementById("c"+num).style.backgroundColor = "yellow"
            break;
         case 6:
            document.getElementById("c"+num).style.backgroundColor = "green"
            break;
        case 7:
            document.getElementById("c"+num).style.backgroundColor = "yellow"
            break;    

    }
}