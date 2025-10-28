import cannycat from './assets/Canny_Cat.webp'
import uncanny from "./assets/Uncanny_cat.webp"
import React, {useState} from 'react';

function Toggle()
{
    const [canny, iscanny] = useState(true)


    const toggleCanny = () =>
    {
        iscanny(!canny)
        console.log(canny)
    }

    if (canny)
    {
        return(
        <>
        <img src={cannycat} className='CatPic'></img>
        <br></br>
        <button onClick={toggleCanny} className='Button'> DO NOT CLICK ME</button>
        </>
        );

    }
    else
    {
        return(
       <>
        <img src={uncanny} className='CatPic'></img>
        <br></br>
        <button onClick={toggleCanny} className='Button'> PLEASE GO BACK</button>
        </>
        );
    }
}

export default Toggle