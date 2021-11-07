import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import {api} from '../../services/api'
import { useEffect } from 'react'


export function MessageList(){

    useEffect(() =>{
        api.get('messages/last3').then((response) =>{
            console.log(response.data);
        })
    }, [])

    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021"/>

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates perspiciatis iure voluptate,
                         sed tempora totam facilis qui doloremque omnis. Corrupti dolor pariatur ut dolorum.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/jprtc.png" alt="João Pedro de Rossi"/>
                        </div>
                        <span>João Pedro de Rossi</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates perspiciatis iure voluptate,
                         sed tempora totam facilis qui doloremque omnis. Corrupti dolor pariatur ut dolorum.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/jprtc.png" alt="João Pedro de Rossi"/>
                        </div>
                        <span>João Pedro de Rossi</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates perspiciatis iure voluptate,
                         sed tempora totam facilis qui doloremque omnis. Corrupti dolor pariatur ut dolorum.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/jprtc.png" alt="João Pedro de Rossi"/>
                        </div>
                        <span>João Pedro de Rossi</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}