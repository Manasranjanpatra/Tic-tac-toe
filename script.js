console.log("welcome to my tic tac toe");
let turn="x";
let gameover=false;

 

// function to change the turn
const changeturn= ()=>{
     return turn==="x"?"0":"x"
}



// function to check for a win 
const checkwin= ()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [6,4,2],
        [2,5,8],
        [0,3,6],
        [1,4,7],
    ]
     win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&( boxtext[e[1]].innerText === boxtext[e[2]].innerText)&& (boxtext[e[0]].innerText  !==  ""))
        {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won ";
            gameover=true;
            document.querySelector(".image").getElementsByTagName("img")[0].style.width ="200px";
        }
     })
}

// main logic  

let boxes =document.getElementsByClassName("su2");
Array.from(boxes).forEach( element =>{
              let boxtext=element.querySelector(".boxtext");
             element.addEventListener("click",()=>{
             if(boxtext.innerText===""){
              boxtext.innerText=turn;
             turn=changeturn();
            checkwin();
           if(!gameover)
           {
            document.getElementsByClassName("info")[0].innerText="Turn  for " +turn;
           }
        }
    })
})
// add reset buttom
reset.addEventListener("click",()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(element =>
        {
            element.innerText= "" 
        });
        turn="x";
        gameover=false;
        document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        document.querySelector(".image").getElementsByTagName("img")[0].style.width ="0px";

})