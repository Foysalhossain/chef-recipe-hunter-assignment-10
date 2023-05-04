/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto py-5'>
            <div className="navbar bg-base-300 text-base-content p-3 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className='font-semibold mr-2' to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className='font-semibold' to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <a className=" normal-case text-xl font-bold">Easy Meals</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to='/home'
                                className={({ isActive }) => isActive ? "text-blue-600 " : ""}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => isActive ? "text-blue-600 " : ""}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <span className=' w-12 h-12 mx-10'>
                                    <img className='rounded-full' src={user.photoURL} alt="" />
                                </span>
                                <button onClick={handleLogOut} className="btn">Sign out</button>
                            </> : <Link className='btn ml-3' to='/login'>Login</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Menubar;