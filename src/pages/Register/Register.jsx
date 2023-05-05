/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { registerUser } = useContext(AuthContext);
    // console.log(registerUser);


    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");

    const handleRegister = event => {
        event.preventDefault();

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError('password not valid need 8 chart and one letter and one number');
            return;
        }
        if ((name, photo, email, password)) {
            registerUser(email, password)
                .then((result) => {
                    const loggedUser = result.user
                    updatedUser(result.user, name, photo)
                    console.log(loggedUser);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
        event.target.reset();
    }

    const updatedUser = (user, userName, url) => {
        updateProfile(user, {
            displayName: userName, photoURL: url
        }).then(() => {

        }).catch((error) => {

        });
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input onChange={(e) => setPhoto(e.target.value)} type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <label className="label text-indigo-600">
                                    <Link to="/login">Already Have an Account? Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='text-red-600'>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;