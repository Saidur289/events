// option - 1 inline funtion add kora
{/* <button onclick="document.body.style.backgroundColor = 'aqua'">yellow</button> */}
// Option - 2
// {/* <button onclick="makeRed()">make red</button> */}

// option - 3 importent 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
const make_Blue = document.getElementById('make-blue');
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
   }
       make_Blue.onclick = makeBlue;
    //    Option - 4
  const purpleBtn = document.getElementById('makePurple');
  purpleBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple';
  })  
//   Option final   
document.getElementById('make-gold').addEventListener("click", function(){
    document.body.style.backgroundColor = 'goldenrod';
})