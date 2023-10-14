import React, { useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const LogIn = () => {

    const {actions, store} = useContext(Context)

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()

   useEffect(() => {
    if (store.token) {
        navigate("/private")
    }
   }, [store.token])

    return (
        <>
            <div
                className="login__form"
                >
                <div className="form__contenedor">
                    <label className="form__contenedor__items" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form__contenedor__items form__input"
                        type="email"
                        id="email"
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form__contenedor">
                    <label
                        className="form__contenedor__items"
                        htmlFor="contraseña">
                        Contraseña {password}
                    </label>
                    <input
                        className="form__contenedor__items form__input"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        id="contraseña"
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button onClick={event => actions.login(email, password)}>
                    Iniciar sesión
                </button>
            </div>
        </>
    );
};