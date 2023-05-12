// Aula 6

import styles from './Form.module.css'
import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setpassword] = useState()

    return(
        <div className={styles.divConteiner}>
            <h1 className={styles.textH1}>Login</h1>
            <form className={styles.divForm} onSubmit={cadastrarUsuario}>
                <div className={styles.divItem1}>
                    <label htmlFor='name'></label>
                    <input type="text" id='name' name='name' placeholder="Seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className={styles.divItem2}>
                    <label htmlFor='name'></label>
                    <input type="password" id='password' name='password' placeholder="Digite sua senha" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className={styles.divItem3}>
                    <input type= 'submit' value= 'Cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form