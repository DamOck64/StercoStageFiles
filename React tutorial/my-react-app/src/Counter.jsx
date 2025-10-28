import React, {useState} from "react"


function Counter()
{
    
    const [number, numberchange] = useState(0)


    const Increment = () =>
    {
        numberchange(number + 1);
        console.log(number);
    }
    const Decrement = () =>
    {
        numberchange(number - 1);
        console.log(number);
    }
    const Reset = () =>
    {
        numberchange(0);
        console.log(number);
    }


    return(
        <div className="Counter">
            <h1><b>Counter</b></h1>
            <p>{number}</p>
            <button onClick={Decrement}> Decrement </button>
            <button onClick={Reset}> Reset </button>
            <button onClick={Increment}> Increment </button>
        </div>
    );
}

export default Counter