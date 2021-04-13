

function myFunction(x){
x.classList.toggle('change');
let navItems=document.querySelector('.navBar');
navItems.classList.toggle('change');

let mainInfos=document.querySelector('.mainInfo');
mainInfos.classList.toggle('change');


}
function navFunction(){
 
navItems.classList.toggle('change');
}
function buttonToggler(y)
{
let indexFinder=undefined;
let bbb=document.querySelector(".allCV").classList;
let ccc=document.querySelector(".fullstack").classList;
let ddd=document.querySelector(".trade").classList;
let eee=document.querySelector(".robotic").classList;
let fff=document.querySelector(".video").classList;
var testArray=[bbb,ccc,ddd,eee,fff];
for (let index = 0; index < testArray.length; index++) {
    if (testArray[index].contains('show')) {
        indexFinder=index;
        break;
    }    
    }
    if(indexFinder!=null)
{
    testArray[indexFinder].remove('show');
    y.classList.add('show');
}
else
y.classList.add('show');


}
 (function messageController(){
    
    let aaa=document.querySelector('.aboutMeNull').classList;
    let bbb=document.querySelector(".allCV").classList;
    let ccc=document.querySelector(".fullstack").classList;
    let ddd=document.querySelector(".trade").classList;
    let eee=document.querySelector(".robotic").classList;
    let fff=document.querySelector(".video").classList;
    
if(bbb.contains('show')||ccc.contains('show')||
ddd.contains('show')||eee.contains('show')||
fff.contains('show'))
aaa.remove('show');
else
aaa.add('show');
    
    

})();

function buttonActivator(y){
    let aaa=document.querySelector('.aboutMeNull').classList;
let indexFinder=undefined;

    let bbb=document.getElementById("allCVButton").classList;
    let ccc=document.getElementById("fullstackButton").classList;
    let ddd=document.getElementById("tradeButton").classList;
    let eee=document.getElementById("roboticButton").classList;
    let fff=document.getElementById("videoButton").classList;

var testArray=[bbb,ccc,ddd,eee,fff];
for (let index = 0; index < testArray.length; index++) {
if (testArray[index].contains('active')) {
    indexFinder=index;
    break;
}    
}
if(indexFinder!=null)
{
    testArray[indexFinder].remove('active');
    y.classList.add('active');
}
else
y.classList.add('active');
aaa.remove('show');
 }
function activeLink(y){
    var a=document.querySelectorAll('.articleLink a');
    for (let index = 0; index < a.length; index++) {
        
        if (a[index].classList.contains('active')) {
            a[index].classList.remove('active');
            
        }
        
    }
    y.classList.add('active');
}


