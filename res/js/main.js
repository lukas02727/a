const counter = document.getElementById("counter");
const click = document.getElementById("click");
const aa = document.getElementById("a");

let a = 0;
let b = 5;

click.onclick = () => {
    a += b;
    counter.innerHTML = a;


    localStorage.setItem("counter", a);
}
topNum = 0;
leftNum = 30;
leftNuma = 30;


aa.onclick = () => {
     
     leftNum +=20;
     document.getElementById("click").style.marginLeft = leftNum + "px";
    

     if(leftNum > 250){
          
          
          console.log('you win');
          bb.style.display = "block";
          a += b;
          counter.innerHTML = a;
          aa.style.display = "none";
         };
     
        
     
     
};