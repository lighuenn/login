import React, { useEffect } from 'react';
import './Registro.css'; 

const Registro = () => {
    useEffect(() => {
       
        const createCircle = () => {
            return (
                <span className="circle" style={{ backgroundColor: '#00FF00' }}></span>
            );
        };

       
        const pulseAnimation = `
            @keyframes pulse {
                from {
                    transform: scale(0.9);
                    opacity: 1;
                }
                to {
                    transform: scale(1.8);
                    opacity: 0;
                }
            }
        `;

        
        const style = document.createElement('style');
        style.textContent = pulseAnimation;
        document.head.appendChild(style);

        return () => {
            
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="container">
            <div className="form">
                <p className="title">
                    Registrar cuenta
                    <span className="circle" style={{ backgroundColor: '#00FF00' }}></span>
                    <span className="circle" style={{ backgroundColor: '#00FF00', animationDelay: '0.5s' }}></span>
                </p>
                <p className="message">Regístrate para poder acceder a nuestro contenido!</p>
                <div className="flex">
                    {['Nombre', 'Usuario', 'Email', 'Contraseña'].map((labelText, index) => (
                        <div className="input-container" key={index}>
                            <input
                                type={labelText.toLowerCase().includes('password') ? 'password' : 'text'}
                                placeholder=""
                                required
                                className="input"
                            />
                            <label>{labelText}</label>
                        </div>
                    ))}
                </div>
                <button className="submit">Crear</button>
                <p className="signin">
                    Ya tienes una cuenta? <a href="login.html">Iniciar sesión</a>
                </p>
            </div>
        </div>
    );
};

export default Registro;
