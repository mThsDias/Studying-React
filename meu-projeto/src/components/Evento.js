function Evento() {

    function meuEvento () {
        console.log('Ativado')
    }

    return (  
        <div>
            <p>Clique aqui para haver o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>        
        </div>
    )
}


export default Evento