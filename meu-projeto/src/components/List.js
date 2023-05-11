// Aprendendo sobre props avançado
import PropTypes from 'prop-types'
import App from "../App";


function List ({ marca, ano }) {
    return (
        <>
        <li>{marca} - {ano}</li>
        </>
    )
}


List.propTypes = {
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number,
}

List.defaultProps = {
    marca: 'faltou a marca...',
    ano: 0,
}

export default List;