const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('No');
let size = 20
let Q = ['are you sure', 'i dont thnk that correct', 'Give it more thought', 'pleas reconsider', "don't do this", 'No way','you clicked the wrong button'];

noBtn.addEventListener('click', function (){
    let question = Q[Math.floor(Math.random() * Q.length)];
    noBtn.textContent = question;
    size += 30;

    yesBtn.style.fontSize = size + "px"
})