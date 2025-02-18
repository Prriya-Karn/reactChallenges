import { useState } from "react"
import '../index.css';

export const CharCounter = () => {
    const [char, setChar] = useState(0);
    const [text,setText] = useState("");

    const countChar = (event) => {
        const value = event.target.value;
        const arrWord = value.split(" ");
        const fresWord = arrWord.join("");
        if (fresWord.length > 20) {
            alert("you cannot write text now");
            setChar(char);
            return;
        }
            setChar(fresWord.length);
            setText(fresWord);
    }
    
    return (
        <>
            <input value={text} className={char == 20 ? "styleBorder" : ""} type="text" onChange={countChar} placeholder="enter text" />
            <h1>total character: {char}</h1>
        </>
    )
}
