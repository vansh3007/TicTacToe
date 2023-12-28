let button=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turn0=true;
let msg=document.querySelector("p");
const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
button.forEach(btn =>{
    btn.addEventListener("click",()=>{
 
        if(turn0){
            btn.innerText="O";
            turn0=false;
        }
        else{
            btn.innerText="X";
            turn0=true; 
        }
        btn.disabled=true;
        checkwinner();
    })
})
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, ${winner} is win the game`;
}
const btrDisable=()=>{
    button.forEach(btn=> btn.disabled=true);
}
const btrEnable=()=>{
    button.forEach(btn=>{
        btn.disabled=false;
        btn.innerText="";
    } );
    
}

const checkwinner=()=>{
    for(pattern of winPattern){
        if(button[pattern[0]].innerText!=""&&button[pattern[1]].innerText!=""&&button[pattern[2]].innerText){
            if( button[pattern[0]].innerText===button[pattern[1]].innerText&&button[pattern[1]].innerText===button[pattern[2]].innerText){
                showWinner(button[pattern[0]].innerText);
                btrDisable();
                reset.innerText="New Game";
        }
        }
        }
    }
reset.addEventListener("click",()=>{
    turn0=true;
    btrEnable();
    reset.innerText="Reset";
    msg.innerText="";
})

