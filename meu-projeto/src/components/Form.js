function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastro feito')
    }

    
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Seu nome" />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastro" />
                </div>
            </form>
        </div>
    )
}


export default Form