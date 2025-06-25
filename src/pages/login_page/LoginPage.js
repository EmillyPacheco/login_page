import { useState } from 'react';
import LoginBtns from '../../components/models/login_btns/LoginBtns';
import LoginInputs from '../../components/models/login_inputs/LoginInputs';
import TextNavigation from '../../components/ui/text_navigation/TextNivegation';
import Portifolio from '../Portifolio/Portifolio';

import styles from './login_page.module.scss'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function LoginPage() {
    const [loginForm, setLoginForm] = 
    useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const navigate = useNavigate();

    const cad = {
        email: 'akiralinda@gmail.com',
        password: '12345678',
    }

    const {login} = useAuth();

    const tryLogin = () => {
        const { email, password } = loginForm;

        if (email === cad.email && password === cad.password) {
            alert("Login realizado com sucesso!");
            login();
            navigate('/home');
        } else {
            alert("Email ou Senha incorretos!");
        }
    }

    return <>
        <div className={styles.LoginPage}>
            <div className={styles.Blur}></div>
            <div className={styles.Title}>
                <h1>LOGIN</h1>
                <p>Adote o pet dos seus sonhos!</p>
            </div>
            <div>
                <LoginInputs onChange={onChange}/>
                <LoginBtns tryLogin={tryLogin}/>
            </div>
            <div className={styles.NavigationCreateAcount}>
                <h6>Não tem uma conta?&nbsp;</h6>
                <TextNavigation text={"Clique aqui!"} />
            </div>
        </div>
    </>
}

export default LoginPage;
