import { Link } from "react-router-dom";

const navOptions = <>
    <li><Link className="md:text-xl font-bold" to="/">Home</Link></li>
    <li><Link className="md:text-xl font-bold" to="/educationalBackground">Educational Background</Link></li>
    <li><Link className="md:text-xl font-bold" to="/contactInformation">Contact Information</Link></li>



</>

const Navbar = () => {
    return (
        <>
            <div className="navbar flex justify-center items-center max-w-screen-xl fixed z-10 -ml-[10px]  py-8">
                <div className="">
                    <div className="navbar-center ">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;