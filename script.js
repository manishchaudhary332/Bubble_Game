var timer = 60  ;
var score = 0;
var hitrn =0;


function increasesScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score
}


function getNewhit(){
    var hitrn = Math.floor(Math.random()*9+1)
    
    
   document.querySelector("#hitval").textContent = hitrn
}


function MakeBubble(){
    let clutter = ""

for(let i =1; i<=72; i++){
    let random  = Math.floor(Math.random()*9+1)
    clutter += `<div class="bubble">${random}</div>`
}

let  pbotm = document.querySelector(".pbotm").innerHTML = clutter
}


function runtime(){
    var time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(time)
            let pm =  document.querySelector(".pbotm")
            pm.innerHTML=`Game Over`
            pm.style.fontSize = "60px"
            
            
            
           

        }
    },1000)
}


document.querySelector(".pbotm").addEventListener("click",function(dets){
    var clickednum  = Number(dets.target.textContent)
    var  hit  =document.querySelector("#hitval").textContent

    
    
    
    if(clickednum == hit){
        increasesScore()
        MakeBubble()
        getNewhit()
        
            
    }
})
runtime()
MakeBubble()
getNewhit()

