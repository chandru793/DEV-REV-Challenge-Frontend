import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css';

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    return (
        <div>
            <div className="innerContainer">
                <div className="detailsContainer">
                    <div className='inner-inner'>
                        <h1 className='h1'>CREATE ACCOUNT</h1>
                        <form>
                            <label for="name">Name:</label>
                            <input
                                type='name'
                                name='name'
                                id='name'
                                className='input'
                                placeholder='Enter your email'
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <label for="email">Email:</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className='input'
                                placeholder='Enter your email'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <label for="pwd">Password:</label>
                            <input
                                type='password'
                                name='pwd'
                                id='pwd'
                                className='input'
                                placeholder='Enter your Password'
                                required
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                            />

                            {/* {show ? <p>All the fields are required</p> : null} */}
                            <button
                                className='button'
                            // onClick={() => validate()}
                            >Submit
                            </button>
                        </form>
                        <p className='p'>Already have an account? <Link Link to="/login" style={{ textDecoration: 'none', color: '#1a7fc1', fontStyle:'italic' }}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn