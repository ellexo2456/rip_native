import { useState } from "react";
import { api } from "../api/config";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const RegisterPage = () => {
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

        api.post(`/auth/register`, {
            email: login.email,
            password: [...byteArray],
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    navigate('/rip_front/');
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
            justifyContent: "center",
            marginTop: "50px"
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
                    style={{ borderRadius: "10px", border: "0.5px solid black", padding: "5px", marginTop: "20px" }}
                >
                </input>
                <input
                    placeholder="Пароль"
                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                    style={{ borderRadius: "10px", border: "0.5px solid black", padding: "5px", marginTop: "20px" }}
                >
                </input>
                <Button type="submit" style={{borderRadius: "10px", padding: "5px", marginTop: "20px"}}>Зарегестрироваться</Button>
            </form>
        </div >
    )
}