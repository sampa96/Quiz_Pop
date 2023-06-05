const uname=document.getElementById('username');
const latestScore=localStorage.getItem('latestScore');
const finalscore=document.getElementById('finalscore');



finalscore.innerText="Score : "+ latestScore;

uname.addEventListener('keyup',() => {
    console.log(uname.value);
})
submitScore = e =>{
    console.log("save score");
    e.preventDefault();


};