import { useState } from "react";
import { api } from "../api/config";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (!login.email || !login.password) {
            return
        }

        const encoder = new TextEncoder();
        const byteArray = encoder.encode(login.password);

        api.post(`/auth/login`, {
            email: login.email,
            password: byteArray,
        })
            .then(response => {
                if (response.status === 200) {
                    navigate('rip_front/')
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <form onSubmit={handleLogin}
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <input
                    placeholder="Почта"
                    onChange={(e) => setLogin({ ...login, email: e.target.value })}
                >
                </input>
                <input
                    placeholder="Пароль"
                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                >
                </input>
                <button type="submit">Логин</button>
            </form>
        </div >
    )
}