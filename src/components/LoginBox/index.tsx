import { useContext, useEffect } from 'react';
import {VscGithubInverted} from 'react-icons/vsc'
import { AuthContext } from '../../context/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss'



export function LoginBox(){   
    const {signInUrl, user} = useContext(AuthContext)

    console.log(user)

    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size ="24"/>
                Entrar com Github
            </a>
        </div>
    )
}