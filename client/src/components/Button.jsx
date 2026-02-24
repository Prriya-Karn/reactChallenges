
const Button = ({ sign,handleIncreaseButton,handleDecreaseButton }) => {
    
    return (
        <>
            <button onClick={sign=="+"?handleIncreaseButton:handleDecreaseButton}
                className="bg-white flex items-center justify-center w-16 h-10 text-2xl cursor-pointer">{sign}</button>
        </>
    )
}



export default Button;