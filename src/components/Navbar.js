import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
    return (
        <div className="flex bg-slate-200 tab:py-4  tab:px-20 justify-between items-center text-sm">


            {/* Left Nav part */}
            <div className="flex items-center">
                <img className="w-28" src={logo} alt="Microsoft logo" />
                <ul className="flex">
                    <li className="tab:mx-4 hover:underline"><a href="/">Microsoft 365</a></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Office</a></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Windows</a></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Surface</a></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Xbox</a></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Support</a></li>
                </ul>
            </div>

            {/* Left Nav part */}
            <div>
                <ul className="flextab:">
                    <li className="tab:mx-4 hover:underline"><a href="/">All Microsoft</a></li>
                    <li className="tab:mx-4 hover:underline"><input type="text" placeholder="Search.." /></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Cart</a></li>
                    <li className="tab:mx-4 hover:underline"><a href="/">Sign In</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar