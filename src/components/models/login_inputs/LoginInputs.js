import styles from './login_inputs.module.scss'
import Input from './../../ui/input/Input';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import TextNavigation from '../../ui/text_navigation/TextNivegation';

function LoginInputs({onChange}) {
    return <>
        <div className={styles.Inputs}>
            <Input
                name="email"
                type='email'
                icon={faEnvelope}
                onChange={onChange}
            />
            <Input
                name="password"
                type='password'
                icon={faKey}
                onChange={onChange}
            />
            <TextNavigation text={"Esqueceu sua senha?"} />
        </div>
    </>
}

export default LoginInputs;