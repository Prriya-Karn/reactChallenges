import { Fragment } from "react"
import { Eye, X } from 'lucide-react'
import Input from "../components/Input"

const Modal = ({ modal }) => {
    return (
        <Fragment>

            <div className="bg-black inset-0 relative  opacity-35 h-screen">
                {
                    modal == true ?
                        <Fragment>
                            <div className="flex justify-center h-1/2">
                                <div className="bg-white p-8 pb-20 h-auto rounded-lg relative z-20 w-[450px]">
                                    <h1 className="text-2xl font-bold text-center">Login</h1>

                                    <Input label="Email" type="text" placeholder="enter your email" />

                                    <Input label="Password" type="password" placeholder="enter your password" />
                                    <button className="bg-[#2a4525] mt-5 h-10 cursor-pointer hover:bg-[#376430] text-white w-full rounded-lg">Login</button>

                                    <p className="text-center mt-7 text-gray-700">Don’t have an Account yet? <a className="text-[#2A4525]">Register</a></p>

                                </div>



                            </div>

                            <div className="flex justify-center items-center ">
                                <button className="bg-gray-400 w-12 rounded-sm cursor-pointer mt-2 h-6 flex justify-center items-center"><X className="text-white w-5 h-5" /></button>
                            </div>

                        </Fragment>

                        : ""
                }
            </div>
        </Fragment>
    )
}

export default Modal