import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

    return (
        <main className="signup">
            <form className="">
                <div className="">
                    <label className="" htmlFor="nombre">
                        Nombre
                    </label>
                    <input
                        className=""
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="form__contenedor">
                    <label className="" htmlFor="correo">
                        Email
                    </label>
                    <input
                        className=""
                        type="email"
                        id="correo"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="">
                    <label
                        className=""
                        htmlFor="contraseña">
                        Contraseña
                    </label>
                    <input
                        className=""
                        type="password"
                        id="contraseña"
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button type="submit" className="submit">
                    Registrarse
                </button>
            </form>
        </main>
    );
};