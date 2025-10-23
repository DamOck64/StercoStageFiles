let InputMath = ""
let answer = ""
let test1 = 2 + 2
const OperationsInCalculation =
{
    op1:"2", 
    op2:"+",
    op3:"5"
}

console.log(test1)

document.getElementById("epicButton").textContent = "muh";
document.getElementById("titl").textContent = "funniest";

function ReplaceLorem()
{
    document.getElementById("loremText").textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut reiciendis quia porro temporibus sint ducimus asperiores fugit numquam, omnis nihil cumque aliquid suscipit excepturi molestias tenetur assumenda nulla veritatis!"
}

function typeMath(string = "")
{
    console.clear()
    InputMath += string
    console.log(InputMath)
}

function Calculate(InputMath)
{
    for (Amount in OperationsInCalculation)
    {
        console.log("hello")
    }
}




/*-----------------------------------------------------*/
const MinValue = 1
const EasyDiffMaxValue = 10 + 1
const HardDiffMaxValue = 30 + 1
const ImpossibleDiffMaxValue = 1000 + 1
let PickedNumber = 0
let Guess = 0

function EasyDiff()
{
    PickedNumber = Math.floor(Math.random() * (EasyDiffMaxValue - MinValue)) + MinValue
    console.log(PickedNumber)
    Guess = window.prompt("Guess a number between " + String(MinValue) + " and " + String(EasyDiffMaxValue - 1))
    CheckAnswer(EasyDiffMaxValue)
}

function HardDiff()
{
    PickedNumber = Math.floor(Math.random() * (HardDiffMaxValue - MinValue)) + MinValue
    console.log(PickedNumber)
    Guess = window.prompt("Guess a number between " + String(MinValue) + " and " + String(HardDiffMaxValue - 1))
    CheckAnswer(HardDiffMaxValue)
}

function ImpossibleDiff()
{
    PickedNumber = Math.floor(Math.random() * (ImpossibleDiffMaxValue - MinValue)) + MinValue
    console.log(PickedNumber)
    Guess = window.prompt("Guess a number between " + String(MinValue) + " and " + String(ImpossibleDiffMaxValue - 1))
    CheckAnswer(ImpossibleDiffMaxValue)
}


function CheckAnswer(SelectedDiff)
{
    if (Guess < MinValue ||  Guess > SelectedDiff)
    {
        window.alert("That aint in the range dawg")
    }

    if (Guess == PickedNumber)
    {
        window.alert("Congratulation")
    }
    else
    {
        window.alert("Boowomp")
    }
}

/*-----------------------------------------------------*/

let D6 
let D8 
let D12 
let D20 

const thrown6Dies = []
const thrown8Dies = []
const thrown12Dies = []
const thrown20Dies = []

let totalFromD6 = 0;
let totalFromD8 = 0;
let totalFromD12 = 0;
let totalFromD20 = 0;

function SetDice()
{
    D6 = document.getElementById("AmountOfD6").value
    D8 = document.getElementById("AmountOfD8").value
    D12 = document.getElementById("AmountOfD12").value
    D20 = document.getElementById("AmountOfD20").value
    
    document.getElementById("AmountOfD6").value = ""
    document.getElementById("AmountOfD8").value = ""
    document.getElementById("AmountOfD12").value = ""
    document.getElementById("AmountOfD20").value = ""

    RollValue();
}

function RollValue()
{
    ResetValues()

    for (let i = 0; i < D6; i++)
    {
        outcome = Math.floor(Math.random() * (1, 6 + 1))
        thrown6Dies.push(outcome)
        totalFromD6 += outcome
    }

        for (let i = 0; i < D8; i++)
    {
        outcome = Math.floor(Math.random() * (1, 8 + 1))
        thrown8Dies.push(outcome)
        totalFromD8 += outcome
    }

        for (let i = 0; i < D12; i++)
    {
        outcome = Math.floor(Math.random() * (1, 12 + 1))
        thrown12Dies.push(outcome)
        totalFromD12 += outcome
    }
    

        for (let i = 0; i < D20; i++)
    {
        outcome = Math.floor(Math.random() * (1, 20 + 1))
        thrown20Dies.push(outcome)
        totalFromD20 += outcome
    }

    document.getElementById("d6").textContent = String(totalFromD6)
    document.getElementById("d8").textContent = String(totalFromD8)
    document.getElementById("d12").textContent = String(totalFromD12)
    document.getElementById("d20").textContent = String(totalFromD20)
}

function ResetValues()
{
    totalFromD6 = 0;
    totalFromD8 = 0;
    totalFromD12 = 0;
    totalFromD20 = 0;
}

/*-------------------------------------*/


class Animal{
    Eat()
    {
        console.log(`${this.name} is eating its favourite meal, ${this.FavFood}`)
    }

    Sleep()
    {
        console.log(`${this.name} is sound asleep`)
    }

    Die()
    {
        this.alive = false
    }
}

class butterfly extends Animal
{
    name = "butterfly"
    FavFood = "nectar"
    alive = true

    Fly()
    {
        console.log(` the ${this.name} flaps its wings`)
    }

    Swim()
    {
        console.log(`the ${this.name} cant swim and dies`)
        this.Die();
        console.log(`the ${this.name} is alive? ${this.alive}`)
    }
}

class raccoon extends Animal
{
    name = "rigby"
    FavFood = "garbage"
    alive = true

    Fly()
    {
        console.log(` the ${this.name} cant fly and falls to his death`)
        this.Die();
        console.log(`the ${this.name} is alive? ${this.alive}`)
    }

    Swim()
    {
        console.log(`the ${this.name} swims to clean its fur`)
    }
}

const homie = new raccoon();
const Creatura = new butterfly();

Creatura.Fly()
homie.Swim()
homie.Eat()

/*---------------------------------------------------------*/

class makeYourself
{
    constructor(name, surname, age, height)
    {
        this.name = name
        this.surname = surname
        this.age = age
        this.height = height
    }


    set name(setValue)
    {
        if(typeof setValue  != "string")
        {
            console.log("not a name")
        }
        else
        {
            console.log(`That is a name alright`)
            this._name = setValue;
        }
    }

        set surname(setValue)
    {
        if(typeof setValue  != "string")
        {
            console.log("not a name")
        }
        else
        {
            console.log(`That is a surname alright`)
            this._surname = setValue;
        }
    }

    set age(setValue)
    {
        if(typeof setValue  != "number")
        {
            console.log("not a valid age")
        }
        else
        {
            switch(true)
            {
                case(setValue <= 18):
                console.log("Welcome little chuddy");
                break;

                case(setValue > 18 && setValue < 100):
                console.log("Welcome Unc");
                break;

                case(setValue > 100):
                console.log("Get out of here skeleton man");
                break;
            }
            this._age = setValue;
        }
    }

    set height(setValue)
    {
        if(typeof setValue  != "number")
        {
            console.log("not a valid height")
        }
        else
        {
            console.log("lets put you next to shaq to see how tall you truely are")
            this._height = setValue
        }
    }

    get height()
    {
        return this._height;
    }

    //You'd have to set the other gets as well but im too lazy to do so and i understand what this does.

}

const newPerson = new makeYourself("chud", "son", 101, 300);
console.log(newPerson)


/*----------------------------------------------------------------------------------------------------------------------*/


/*

const cardSprites =["/img/H1.png", "/img/H2.png", "/img/H3.png", "/img/H4.png",
                    "/img/H5.png", "/img/H6.png", "/img/H7.png", "/img/H8.png",
                    "/img/H9.png", "/img/H10.png","/img/HJ.png", "/img/HQ.png", "/img/HK.png"
]

const completeSuit = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const availableCards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const chosenCards = []
const imageids= [card1 = document.getElementById("Card1"), card2 = document.getElementById("Card2"), card3 = document.getElementById("Card3"), 
                 card4 = document.getElementById("Card4"), card5 = document.getElementById("Card5")]


//This was honestly so stupid since now i would need to make a switch case that goes through each possible result to then set each and every card to its correct sprite, 
//The better thing i couldve done was just to dupe "cardSprites" and then shuffle that and use that for the cards. im going to write both out and use the neater looking one
function ShuffleCards()
{
    chosenCards.length = 0;
    availableCards.length = 0;
    availableCards.push(...completeSuit);

    for (let i = availableCards.length - 1; i > 0; i--)
    {
        const ranomd = Math.floor(Math.random() * (i + 1));
        [availableCards[i], availableCards[ranomd]] = [availableCards[ranomd], availableCards[i]]
    }


    for (let q = 0; q < 5; q++)
    {
        let chosennumber = ""
        chosennumber = availableCards[Math.floor(Math.random() * (0, availableCards.length))]
        console.log(chosennumber)
        chosenCards.push(chosennumber)
        availableCards.splice(availableCards.indexOf(chosennumber), 1);
    }
    UpdateSprites();
}

function UpdateSprites()
{
    imageids[0].src = CardSpriteSwitch(chosenCards[0])
    imageids[1].src = CardSpriteSwitch(chosenCards[1])
    imageids[2].src = CardSpriteSwitch(chosenCards[2])
    imageids[3].src = CardSpriteSwitch(chosenCards[3])
    imageids[4].src = CardSpriteSwitch(chosenCards[4])
}

function CardSpriteSwitch(selected)
{
    switch (true)
    {
    case(selected === completeSuit[0] ):
    return cardSprites[0];
    case(selected === completeSuit[1] ):
    return cardSprites[1];
    case(selected === completeSuit[2] ):
    return cardSprites[2];
    case(selected === completeSuit[3] ):
    return cardSprites[3];
    case(selected === completeSuit[4] ):
    return cardSprites[4];
    case(selected === completeSuit[5] ):
    return cardSprites[5];
    case(selected === completeSuit[6] ):
    return cardSprites[6];
    case(selected === completeSuit[7] ):
    return cardSprites[7];
    case(selected === completeSuit[8] ):
    return cardSprites[8];
    case(selected === completeSuit[9] ):
    return cardSprites[9];
    case(selected === completeSuit[10] ):
    return cardSprites[10];
    case(selected === completeSuit[11]):
    return  cardSprites[11];
    case(selected === completeSuit[12] ):
    return cardSprites[12];
    }

}

*/

//The major improvement that i can make to this code are a few less variables and cutting out the switch case completely.

const cardSprites =["/img/H1.png", "/img/H2.png", "/img/H3.png", "/img/H4.png",
                    "/img/H5.png", "/img/H6.png", "/img/H7.png", "/img/H8.png",
                    "/img/H9.png", "/img/H10.png","/img/HJ.png", "/img/HQ.png", "/img/HK.png"
]

const SelectableSprites =["/img/H1.png", "/img/H2.png", "/img/H3.png", "/img/H4.png",
                    "/img/H5.png", "/img/H6.png", "/img/H7.png", "/img/H8.png",
                    "/img/H9.png", "/img/H10.png","/img/HJ.png", "/img/HQ.png", "/img/HK.png"
]

const ChosenCards = []

const imageids= [card1 = document.getElementById("Card1"), card2 = document.getElementById("Card2"), card3 = document.getElementById("Card3"), 
                 card4 = document.getElementById("Card4"), card5 = document.getElementById("Card5")]

window.onload = ShuffleCards()
function ShuffleCards()
{
    ChosenCards.length = 0;
    SelectableSprites.length = 0;
    SelectableSprites.push(...cardSprites);

    for (let i = SelectableSprites.length - 1; i > 0; i--)
    {
        const ranomd = Math.floor(Math.random() * (i + 1));
        [SelectableSprites[i], SelectableSprites[ranomd]] = [SelectableSprites[ranomd], SelectableSprites[i]]
    }


    for (let q = 0; q < 5; q++)
    {
        let chosennumber = ""
        chosennumber = SelectableSprites[Math.floor(Math.random() * (0, SelectableSprites.length))]
        console.log(chosennumber)
        ChosenCards.push(chosennumber)
        SelectableSprites.splice(SelectableSprites.indexOf(chosennumber), 1);
    }
    ChosenCards
    UpdateSprites();
}

function UpdateSprites()
{
    imageids[0].src = ChosenCards[0]
    imageids[1].src = ChosenCards[1]
    imageids[2].src = ChosenCards[2]
    imageids[3].src = ChosenCards[3]
    imageids[4].src = ChosenCards[4]
}

//Cut out the bad looking switch case, saved about 30 lines purely on that alone


/*-----------------------------------------------*/


function UpdateTime()
{
    const currentDate = new Date()
    const hourMark = currentDate.getHours().toString().padStart(2,0)
    const minuteMark = currentDate.getMinutes().toString().padStart(2,0)
    const secondMark = currentDate.getSeconds().toString().padStart(2,0)
    document.getElementById("Hours").textContent = hourMark
    document.getElementById("Minutes").textContent = minuteMark
    document.getElementById("Seconds").textContent = secondMark    
}

setInterval(UpdateTime, 1000);

/*-----------------------------------------------------------*/

const SWDays = document.getElementById("StopwatchDays");
const SWHours = document.getElementById("StopwatchHours");
const SWMinutes = document.getElementById("StopwatchMinutes");
const SWSeconds = document.getElementById("StopwatchSeconds");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let running = false

function StartTimer()
{
    if (!running)
    {
        running = true
    }
    
}

function PauseTimer()
{

}


function ResetTimer()
{

}

//Im not finishing this because it seems pointless.

/*-----------------------------------------------------------*/

let choices = ["Rock", "Paper", "Scisors"]
let playerChoice = ""
let cpuChoice = ""
let playerOutcome = document.getElementById("playerChoice")
let cpuOutcome = document.getElementById("CPUChoice")
let flavourText = document.getElementById("WinMessage")

function MakeChoice(choiceNumber)
{
    switch(choiceNumber)
    {
        case 0:
            playerChoice = choices[choiceNumber]
            playerOutcome.textContent = "✊"
            break;

        case 1:
            playerChoice = choices[choiceNumber]
            playerOutcome.textContent = "✋"
            break;

        case 2:
            playerChoice = choices[choiceNumber]
            playerOutcome.textContent = "✌"
            break;
    }
     

    let int = Math.floor(Math.random() * (0,3))

    switch(int)
    {
        case 0:
            cpuChoice = choices[choiceNumber]
            cpuOutcome.textContent = "✊"
            break;

        case 1:
            cpuChoice = choices[choiceNumber]
            cpuOutcome.textContent = "✋"
            break;

        case 2:
            cpuChoice = choices[choiceNumber]
            cpuOutcome.textContent = "✌"
            break;
    }

    ShowResult()
}


function ShowResult()
{
    if (playerChoice == cpuChoice)
    {
        flavourText.textContent = "It's a draw"
    }

    else if
    ((playerChoice == choices[0] && cpuChoice == choices[2]) ||
    (playerChoice == choices[1] && cpuChoice == choices[0]) ||
    (playerChoice == choices[2] && cpuChoice == choices[1])
    )
    {
        flavourText.textContent = "you Win"
    }
    else
    {
        flavourText.textContent = "CPU Wins"
    }

}