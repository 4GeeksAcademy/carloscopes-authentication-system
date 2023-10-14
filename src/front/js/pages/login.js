import React, { useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const LogIn = () => {
   

    return (
        <main className="login">
            <form
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
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form__contenedor">
                    <label
                        className="form__contenedor__items"
                        htmlFor="contraseña">
                        Contraseña
                    </label>
                    <input
                        className="form__contenedor__items form__input"
                        type="password"
                        id="contraseña"
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button type="submit" className="submit">
                    Iniciar sesión
                </button>
            </form>
        </main>
    );
};