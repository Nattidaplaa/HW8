import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';

const LoginForm = (props) => {
    const [facebookLink, setFacebookLink] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
    const getFacebookLink = async () => {
        const res = await axios.get(`http://localhost/api/auth/facebook`)
        console.log(res.data)
        setFacebookLink(res.data);
    }
    useEffect(() => {
        getFacebookLink();
    })
    const LoginPSU = (e) => {
        e.preventDefault();
        actions.loginPSU(username, password);
    }
    return (
        <div>
            <div>
                <div>
                    <img style={{ width: '100px', high: '100px' }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png" />
                    <div>
                        <a style={{ marginLeft: '1.8rem' }} href={facebookLink} >Login</a>
                        <div style={{ marginTop: '0.5rem' }}>
                            <h2>PSU Passport </h2>
                            <label>Username :</label>
                            <input style={{ marginLeft: '0.5rem' }} type="text" placeholder="Enter Username" name="username" onChange={(e) => setUsername(e.target.value)} />
                            <div>
                                <label>Password :</label>
                                <input style={{ marginLeft: '0.5rem' }} type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                <div>
                                    <button onClick={LoginPSU}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;