const inicia = function (){
    // Criando as variaveis do display:
    const intro = document.querySelector(".intro");
    const btnIniciar = document.querySelector(".intro button");
    const match = document.querySelector(".match");
    const winner = document.querySelector(".winner")
    const playerScore = document.querySelector(".player-score p");
    const cpuScore = document.querySelector(".cpu-score p");
    var countPlayer = 0;
    var countCpu = 0;
    var playerSelect = "";

    const imgPlayer = document.querySelector(".player-hand");
    const imgCpu = document.querySelector(".computer-hand")

    
    //Muda a o display de entrada:ban sergio namoral so fa
    btnIniciar.addEventListener("click", ()=>{
        intro.classList.add("fadeout");
        match.classList.add("fadein");

    // Função para pegar as jogadas do player e equiparar com as do computer:
        const playMatch = function(){
        var pedra = document.querySelector(".pedra");
        var papel = document.querySelector(".papel");
        var tesoura = document.querySelector(".tesoura");
        
        pedra.addEventListener("click", ()=>{
            playerSelect = "pedra";
            
            compararResult()

        })
        papel.addEventListener("click",()=>{
            playerSelect = "papel"
            
            compararResult()
        })
        tesoura.addEventListener("click",()=>{
            playerSelect = "tesoura";
        
            compararResult()    
        })}
        playMatch()
    // Função para criar jogadas do computador:

    const computerJogada = function(){
        var indice = Math.floor(Math.random()*3)
        var arrayChoice = ['pedra', 'papel', 'tesoura'];
        var computerSelect = arrayChoice[indice];
        return computerSelect;}
    
    
    
    //Função para comparar resultados e atualizar score:
    const compararResult = function(){
        if(playerSelect === computerJogada()){
            winner.innerHTML = "Empate";
            
        }
        if(playerSelect === 'pedra'){
            if(computerJogada() === 'tesoura'){
                winner.textContent = "Você ganhou"
                countPlayer++;
                playerScore.innerHTML = countPlayer;
                //atualizando imagens
                imgPlayer.src = "pedra.png"
                imgCpu.src = "tesoura.png"
                //

                return;
            }else{
                winner.textContent = "O computador venceu"
                countCpu++;
                cpuScore.innerHTML = countCpu;
                //atualizando imagens
                imgPlayer.src = "pedra.png"
                imgCpu.src = "papel.png"
                //
                return;
            }
        }
    
        //Testando papel:
        if(playerSelect === 'papel'){
            if(computerJogada() === 'pedra'){
                winner.textContent = "Você ganhou"
                countPlayer++;
                playerScore.innerHTML = countPlayer;
                //atualizando imagens
                imgPlayer.src = "papel.png"
                imgCpu.src = "pedra.png"
                //
                return;
            }else{
                winner.textContent = "O computador venceu";
                countCpu++;
                cpuScore.innerHTML = countCpu;
                //atualizando imagens
                imgPlayer.src = "papel.png"
                imgCpu.src = "tesoura.png"
                //

                return;
            }
        }
    
        //Testando tesoura:
        if(playerSelect === 'tesoura'){
            if(computerJogada() === 'papel'){
                winner.textContent = "Você ganhou"
                countPlayer++;
                playerScore.innerHTML = countPlayer;
                //atualizando imagens
                imgPlayer.src = "tesoura.png"
                imgCpu.src = "papel.png"
                //
                return;
            }else{
                winner.textContent = "O computador venceu";
                countCpu++;
                cpuScore.innerHTML = countCpu;
                //atualizando imagens
                imgPlayer.src = "tesoura.png"
                imgCpu.src = "pedra.png"
                //
                return;
            }    
        }
        
    }
    })
}






window.addEventListener("load", inicia);