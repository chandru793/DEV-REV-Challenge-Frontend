import React from 'react'
import '../assets/css/Home.css'
import { useNavigate } from "react-router-dom";
import {decode} from './Api'

//components
import Sidebar from './Sidebar';

const Home = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token')
    console.log("home token",token)
    if (token) {
        const user = decode(token)
        
        if (!user) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }
    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="home">
                <div className="pagename">
                    <h3 className='hh3'>Home</h3>
                </div>
                <div className="count">
                    <div className="card">
                        <p className='cardTitle'>Total Books</p>
                        <p className='cardCounnt'>234567</p>
                    </div>
                    <div className="card">
                        <p className='cardTitle'>Available Books</p>
                        <p className='cardCounnt'>34567</p>
                    </div>
                    <div className="card">
                        <p className='cardTitle'>Lended Books</p>
                        <p className='cardCounnt'>24567</p>
                    </div>
                    <div className="card">
                        <p className='cardTitle'>Due Books</p>
                        <p className='cardCounnt'>567</p>
                    </div>
                </div>
                <span className='between'></span>
                <div className="detailsContainerr">
                    <div className="details">
                        <div className="detailCard">
                            <p className='detailTitle'>New Arrivals</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>Harry Potter</li>
                                <li>Ponniyin Selvan</li>
                                <li>Chanakayas chant</li>
                            </ul>
                        </div>
                        <div className="detailCard">
                            <p className='detailTitle'>Fast Moving Books</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>The Silent Patient</li>
                                <li>The Girl on the Train</li>
                                <li>Gone Girl</li>
                            </ul>
                        </div>
                        <div className="detailCard">
                            <p className='detailTitle'>Frequently Lending Books</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>The Catcher in the Rye </li>
                                <li>To kill a Mockingbird</li>
                                <li>Ponniyin Selvan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="details">
                        <div className="detailCard">
                            <p className='detailTitle'>Famous Books</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>The Great Gatsby </li>
                                <li>Ponniyin Selvan</li>
                                <li>War and Peace</li>
                            </ul>
                        </div>
                        <div className="detailCard">
                            <p className='detailTitle'>Famous Author</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>Ernest Hemingway </li>
                                <li>J. K. Rowling</li>
                                <li>Leo Tolstoy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home