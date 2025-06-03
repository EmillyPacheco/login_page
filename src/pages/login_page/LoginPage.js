import { useState } from 'react';
import LoginBtns from '../../components/models/login_btns/LoginBtns';
import LoginInputs from '../../components/models/login_inputs/LoginInputs';
import TextNavigation from '../../components/ui/text_navigation/TextNavigation';

import styles from './login_page.module.scss'
import { useNavigate } from 'react-router-dom';

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
        email: 'teste@mail.com',
        password: '12345678',
    }

    const tryLogin = () => {
        const { email, password } = loginForm;

        if (email === cad.email && password === cad.password) {
            alert("Login realizado com sucesso!");
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
                <p>Reserve sua viagem dos sonhos hoje!</p>
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
