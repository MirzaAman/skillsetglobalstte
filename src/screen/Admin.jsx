import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config'; // Import Firebase Auth
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../assets/css/join.css'; // Ensure this is updated
import bg from '../assets/img/bg-login.png';

function Admin() {
    const navigate = useNavigate();
    const [userID, setuserID] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const goBackClicked = () => {
        navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Start loading indicator
        setError(''); // Clear previous errors
        try {
            // Authenticate user with Firebase Auth
            await signInWithEmailAndPassword(auth, userID, password);
            console.log('Login successful');
            window.alert('Login successful!'); // Show popup message
            navigate('/admin/panel'); // Navigate to '/'
        } catch (error) {
            console.error('Error logging in: ', error);
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    return (
        <div className="container1">
            <div className="login__content1">
                <img src={bg} alt="login image" className="login__img1" />

                <form action="" className="login__form1" onSubmit={handleSubmit}>
                    <div>
                        <h1 className="login__title1">
                            <span>Admin</span> Login
                        </h1>
                        <p className="login__description1">
                            Hi! Please enter your credentials.
                        </p>
                        {error && <p style={{color:'red'}} className="login__error">{error}</p>}
                    </div>

                    <div>
                        <div className="login__inputs1">
                            <div>
                                <label htmlFor="input-name" className="login__label1">User ID</label>
                                <input
                                    type="email" // Use email for user ID
                                    placeholder="Enter your email"
                                    required
                                    className="login__input1"
                                    id="input-name"
                                    value={userID}
                                    onChange={(e) => setuserID(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="input-pass1" className="login__label1">Password</label>

                                <div className="login__box1">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        required
                                        className="login__input1"
                                        id="input-pass1"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i
                                        className={`ri-eye${passwordVisible ? '-line' : '-off-line'} login__eye1`}
                                        id="input-icon1"
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="login__buttons1">
                            <button type="submit" className="login__button1">
                                {loading ? (
                                    'Loading..' // Show spinner
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </div>

                        <a onClick={goBackClicked} style={{ cursor: 'pointer' }} className="login__forgot1">Go back</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;
