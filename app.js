const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto")

let p1score = 0
let p2score = 0
let winninScore = 3;
let isGameOver = false;

p1button.addEventListener('click',function(){
    if(!isGameOver){
        p1score +=1;
        if(p1score === winninScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1button.disabled = true;
            p2button.disabled = true;

        }
    }
        p1Display.textContent = p1score;
})

 

p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2score +=1;
        if(p2score === winninScore){
            isGameOver = true;
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1button.disabled = true;
            p2button.disabled = true;
        }
    }
        p2Display.textContent = p2score;
})



winningScoreSelect.addEventListener('change',function(){
    winninScore = parseInt(this.value)
    reset();
})



resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;
}


