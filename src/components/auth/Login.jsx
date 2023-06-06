import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css'

const Login = () => {

    const [email, setemail] = useState('');
    const [pwd, setpwd] = useState('');
    const [show, setshow] = useState(false);
    console.log(email, pwd);

    const validate = (e) => {
        // e.preventDefault();
        if (email === " " || pwd === " ") {
            setshow(true)
        }
    }

    return (
        // <div>
        <div className="innerContainer">
            <div className="detailsContainer">
                <div className='inner-inner'>
                    <h1 className='h1'>WELCOME BACK!</h1>
                    <form>
                        <label for="email">Email:</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='input'
                            placeholder='Enter your email'
                            required
                            value={email}
                            onChange={e => setemail(e.target.value)}
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
                            onChange={e => setpwd(e.target.value)}
                        />

                        {show ? <p>All the fields are required</p> : null}
                        <button
                            className='button'
                        // onClick={() => validate()}
                        >Submit
                        </button>
                    </form>
                    <p className='p'>Don't have an account? <Link Link to="/signup" style={{ textDecoration: 'none', color: '#1a7fc1', fontStyle:'italic' }}>Sign Up</Link></p>
                </div>
            </div>
        </div>
        //</div>
    )
}

export default Login