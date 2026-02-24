import { Eye } from 'lucide-react'
import { Fragment } from 'react'

const Input = ({ label, type, placeholder }) => {
    return (
        <Fragment>
            <div className="flex mt-5 mb-5 flex-col">
                <label>{label}</label>
                {
                    type == "password" ? <div className="flex relative justify-between items-center">
                        <input type="password" style={{ border: "1px solid gray" }}
                            className="active:border-[#2A4525] w-full mt-2 h-10 rounded-md p-2" placeholder="enter your password" />
                        <Eye className="absolute right-3" />
                    </div> : <input type={type} className="active:border-[#2A4525] w-full mt-2 h-10 rounded-md p-2 capitalize"
                        style={{ border: "1px solid gray" }} placeholder={placeholder} />
                }

            </div>
        </Fragment>
    )
}

export default Input