import { useState } from "react";
import Button from "../components/Button";

const CounterApp = () => {
    const [data, setData] = useState(5);

    const handleIncreaseButton = () => {
        setData(data + 1);
    }

    const handleDecreaseButton = () => {
        if (data > 0) {
            setData(data - 1);
        }

    }

    const handleResetButton = () => {
        setData(0);
    }




    return (
        <>

            <h1 className="text-5xl text-center mt-10 font-bold">Counter App</h1>
            <div className="flex mt-20  justify-center">
                <div className="bg-purple-300 w-96 p-10 flex flex-col justify-center">
                    <div className="flex justify-center items-center bg-pink-200 rounded-xl mb-10 h-80">
                        <h1 className="text-7xl font-bold">{data}</h1>
                    </div>
                    <div className="flex gap-5 justify-center">
                            <Button handleIncreaseButton={handleIncreaseButton} sign="+"/>
                            <Button handleDecreaseButton={handleDecreaseButton} sign="-"/>
                        <Button handleDecreaseButton={handleResetButton} sign="Reset" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterApp;