import React, {useState} from "react";

function WordArray()
{
  const [word, addQuord] = useState([])


  function AddWord()
  {
    const typedWord = document.getElementById("inputWord").value;
    addQuord(w => [...word, typedWord])
    {typedWord.value = ""}
  }

  function RemoveLastWord()
  {
    addQuord(word.slice(0, -1))
  }

  function RemoveSelectWord()
  {
    const NrToRemove = document.getElementById("countToRemove").value;
    addQuord()
  }

  return(
    <>
    <div className="WordArrayArea">
        <input id="inputWord" type="text"  placeholder="Word here..."></input>
        <button onClick={AddWord}>Add</button>
        <br></br>
        <input id="countToRemove" type="number"  placeholder="digit here..."></input>
        <button onClick={RemoveSelectWord}>Remove</button>
        <button onClick={RemoveLastWord}>Remove latest</button>
    <ul className="Wordlist">
      {word.map((w, index) => <li key={index}>{w}</li>)}
    </ul>
    </div>

    </>
  );
}

export default WordArray