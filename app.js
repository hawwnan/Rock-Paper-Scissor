let options = document.querySelectorAll('.options');
let msgContainer = document.querySelector('.msg-container');
let newBtn = document.querySelector('.new-btn')
let msg = document.querySelector('.msg')
let human = document.querySelector('.human-count')
let comp = document.querySelector('.comp-count')
let userCount = 0;
let computerCount = 0;


const computerChoice = () => {
    return Math.floor(Math.random() * 3)
}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');

const selectWinner = (userChoice) => {
    let computer = computerChoice() 
    let choice = options[computer].innerText
    if(userChoice === choice){
        showDraw()
    }
    else{
        console.log(userChoice)
        console.log(choice)
        showWinner(userChoice, choice)
    }
}


newBtn.addEventListener('click', () => {
    console.log('new game')
    msgContainer.classList.add('hidden')
    newGame();
})


const newGame = () => {
    userCount = 0;
    computerCount = 0;
    human.innerText = `Human : ${userCount}`
    comp.innerText = `Machine : ${userCount}`
    enableClick()
}

const enableClick = () => {
    console.log('enable click')
    options.forEach((option) => {
        option.style.pointerEvents = 'auto';
    })
}
const disableClick = () => {
    console.log('disable click')
    options.forEach((option) => {
        option.style.pointerEvents = 'none';
    })
}

const showDraw = () => {
    console.log('Match is a draw!!');
    disableClick()
    msg.innerText = `The match was a draw. Try again.`
    msgContainer.classList.remove('hidden')
}

const showWinner = (userChoice, choice) => {
    if(userChoice === 'Rock'){
        if(choice === 'Paper'){
            console.log('computer wins')
            computerCount += 1;
            msg.innerText = `Computer Wins. Can't beat them damn machines.`
            comp.innerText = `Computer : ${computerCount}`
            msgContainer.classList.remove('hidden')
        } else {
            console.log('User wins')
            userCount += 1
            msg.innerText = `User wins. Human > Machine.`
            human.innerText = `Human : ${userCount}`
            msgContainer.classList.remove('hidden')
        }

    }
    else if(userChoice === 'Paper'){
        if(choice === 'Scissor'){
            console.log('computer wins')
            computerCount += 1;
            msg.innerText = `Computer Wins. Can't beat them damn machines.`
            comp.innerText = `Computer : ${computerCount}`
            msgContainer.classList.remove('hidden')
        } else {
            console.log('User wins')
            userCount += 1
            msg.innerText = `User wins. Human > Machine.`
            human.innerText = `Human : ${userCount}`
            msgContainer.classList.remove('hidden')
        }
    }
    else if (userChoice === 'Scissor'){
        if(choice === 'Rock'){
            console.log('computer wins')
            computerCount += 1;
            msg.innerText = `Computer Wins. Can't beat them damn machines.`
            comp.innerText = `Computer : ${computerCount}`
            msgContainer.classList.remove('hidden')
        } else {
            console.log('User wins')
            userCount += 1
            msg.innerText = `User wins. Human > Machine.`
            human.innerText = `Human : ${userCount}`
            msgContainer.classList.remove('hidden')
        }
    }
}

rock.addEventListener('click' , () => {
    selectWinner('Rock')
})


paper.addEventListener('click' , () => {
    selectWinner('Paper')
})


scissor.addEventListener('click' , () => {
    selectWinner('Scissor')
})