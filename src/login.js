import React, { useState, useEffect } from 'react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            body, html {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                --color: rgba(0, 115, 19, 0.3);
                background-color: #191a1a;
                background-image: 
                  linear-gradient(
                    180deg,
                    transparent 24%,
                    var(--color) 25%,
                    var(--color) 26%,
                    transparent 27%,
                    transparent 74%,
                    var(--color) 75%,
                    var(--color) 76%,
                    transparent 77%,
                    transparent
                  ),
                  linear-gradient(
                    45deg,
                    transparent 24%,
                    var(--color) 25%,
                    var(--color) 26%,
                    transparent 27%,
                    transparent 74%,
                    var(--color) 75%,
                    var(--color) 76%,
                    transparent 77%,
                    transparent
                  );
                background-size: 55px 55px;
                animation: move 4s linear infinite;
                position: fixed;
                top: 0;
                left: 0;
                z-index: -1;
            }

            @keyframes move {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 55px 55px;
                }
            }

            .login-box {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 400px;
                padding: 40px;
                transform: translate(-50%, -50%);
                background: rgba(24, 20, 20, 0.987);
                box-sizing: border-box;
                box-shadow: 0 15px 25px rgba(0,0,0,.6);
                border-radius: 10px;
                color: #fff;
            }

            .login-box .user-box {
                position: relative;
                margin-bottom: 30px;
            }

            .login-box .user-box input {
                width: 100%;
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                border: none;
                border-bottom: 1px solid #fff;
                outline: none;
                background: transparent;
            }

            .login-box .user-box label {
                position: absolute;
                top: 0;
                left: 0;
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                pointer-events: none;
                transition: .5s;
            }

            .login-box .user-box input:focus ~ label,
            .login-box .user-box input:valid ~ label {
                top: -20px;
                left: 0;
                color: #bdb8b8;
                font-size: 12px;
            }

            .login-box form button {
                position: relative;
                display: inline-block;
                padding: 10px 20px;
                color: #ffffff;
                font-size: 16px;
                text-decoration: none;
                text-transform: uppercase;
                overflow: hidden;
                transition: .5s;
                margin-top: 40px;
                letter-spacing: 4px;
                background: transparent;
                border: none;
                cursor: pointer;
            }

            .login-box button:hover {
                background: #03f40f;
                color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 5px #03f40f,
                            0 0 25px #03f40f,
                            0 0 50px #03f40f,
                            0 0 100px #03f40f;
            }

            .login-box button span {
                position: absolute;
                display: block;
            }

            @keyframes btn-anim1 {
                0% { left: -100%; }
                50%, 100% { left: 100%; }
            }

            .login-box button span:nth-child(1) {
                bottom: 2px;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #03f40f);
                animation: btn-anim1 2s linear infinite;
            }

            .signin {
                text-align: center;
                color: rgba(255, 255, 255, 0.7);
                font-size: 14px;
                margin-top: 20px;
            }

            .signin a {
                color: #00bfff;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .signin a:hover {
                text-decoration: underline;
                color: royalblue;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
       
        console.log('Iniciar sesión:', username, password);
    };

    return (
        <div className="container">
            <div className="login-box">
                <form>
                    <div className="user-box">
                        <input
                            type="text"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Usuario</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Contraseña</label>
                    </div>
                    <center>
                        <button onClick={handleLogin}>
                            Iniciar sesión
                            <span></span>
                        </button>
                    </center>
                    <p className="signin">
                        Aun no tienes una cuenta?{' '}
                        <a href="Registro.js">Registrate</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
