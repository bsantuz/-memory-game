var area_cartas = document.getElementById("areas_cartas")
var tabuleiro = document.getElementById("tabuleiro")

var card_temp = null
var card_temp2 = null

var lista_cores = []
var cor_fundo = "rgb(70, 50, 50)"

var dificuldade
var score_parcial = 0
var score_total = 0

var simbolos = ["♬", "✂", "☂", "❤", "❀", "♜", "♔", "☯", "☺", "✈", "✉", "✌", "✍", "✎", "✰", "▽", "◍","◎", "◩"]

function Add_Tag(tag, attr, conteudo){
    if (conteudo == undefined) { conteudo = ""}
    if (attr == undefined) { attr = ""}
    return "<"+tag+" "+attr+">"+conteudo+"</"+tag+">"
}

function click_Card(n){

    console.log(n)

    document.getElementById(n).style.backgroundColor = "rgb("+lista_cores[n]+")"
    document.getElementById(n).innerHTML = simbolos[lista_cores.indexOf(lista_cores[n])]

    if(card_temp == null){ card_temp = n}
    else if (card_temp2 == null && card_temp != n){

        card_temp2 = n

        if (lista_cores[card_temp] == lista_cores[card_temp2]) {

            score_total += 1
            score_parcial += 1

            document.getElementById("score").innerHTML = "score: "+ score_total
            
            console.log("acertou")

            card_temp = null
            card_temp2 = null

            if (score_parcial == dificuldade/2) 
            { 
                score_parcial = 0
            }
        }
    }else if(card_temp != n && card_temp2 != n){
        
        document.getElementById(card_temp).style.backgroundColor = cor_fundo
        document.getElementById(card_temp2).style.backgroundColor = cor_fundo
        document.getElementById(card_temp).innerHTML = ""
        document.getElementById(card_temp2).innerHTML = ""
        
        card_temp = n
        card_temp2 = null

    }
}

function generateRan(m){

    dificuldade = m

    document.getElementById("dificuldade").remove()

    tabuleiro.innerHTML += Add_Tag("div","id= 'dificuldade'")
    document.getElementById("dificuldade").innerHTML += Add_Tag("button","onclick='b_reset()'", "RESET")

    tabuleiro.innerHTML += Add_Tag("div", "id = 'areas_cartas'") 

    var max = m;
    var random = [];
    var cor_bool
    var cor_temp

    for(var i = 0; i<max ; i++){

        var temp = Math.floor(Math.random()*max);

        if(random.indexOf(temp) == -1){

            random.push(temp);
            document.getElementById("areas_cartas").innerHTML += Add_Tag("button","id='"+temp+"'"+" class = 'carta' onclick = 'click_Card("+temp+")'", "");
            console.log("button","id='"+temp+"'"+" class = 'carta' onclick = 'click_Card("+temp+")'", "")
            if (cor_bool == true) {
                lista_cores.push(cor_temp)
                cor_bool = false
                
            }else{
                cor_temp = [parseInt(Math.random()*250), parseInt(Math.random()*250), parseInt(Math.random()*250)]
                lista_cores.push(cor_temp)
                cor_bool = true
                
            }
        }
        else{
        i--;
        }
    }

    console.log(lista_cores)
    console.log(random)
    console.log("dificuldade: " + dificuldade)

}


//generateRan(6)

function b_dificuldade() {
    tabuleiro.innerHTML += Add_Tag("div","id= 'dificuldade'","")
    document.getElementById("dificuldade").innerHTML += Add_Tag("button","onclick='generateRan(8)'", "Fácil")
    document.getElementById("dificuldade").innerHTML += Add_Tag("button","onclick='generateRan(12)'", "Médio")
    document.getElementById("dificuldade").innerHTML += Add_Tag("button","onclick='generateRan(16)'", "Difícil")
    console.log("botões de dificuldade")
}

function b_reset() {
    document.getElementById("dificuldade").remove()
    document.getElementById("areas_cartas").remove()
    b_dificuldade()
    console.log("botão de reset")

}

b_dificuldade()



