//document.querySelector(".robo").onclick = dizOi;




const robo = document.querySelector(".robo");
const boton = document.querySelector(".producao")
//robo.onclick = dizOi
// ou 




function dizOi(nome) {
    console.log("Oi " + nome);
}

robo.addEventListener("click", () => { 
    console.log("Cliquei no Robô")
})

boton.addEventListener ("click", () => {
    boton.value  = "Produzido"
})