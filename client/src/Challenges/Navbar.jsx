import { Fragment } from 'react'

const Navbar = ({ handleModalOpens }) => {

    return (
        <Fragment>
            <div className='bg-gray-400 flex p-3 justify-between items-center'>
                <h1>Logo</h1>
                <ul className='flex justify-center items-center gap-12'>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
                <button className='bg-gray-300 p-2 cursor-pointer' onClick={handleModalOpens}>Login</button>
            </div>
        </Fragment>
    )
}

export default Navbar