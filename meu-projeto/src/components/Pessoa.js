// Usanddo deconstruction para que o codígo não fique repetitivo, usando 'PROPS'.




function Pessoa ({name, age, profession}) {
    return (
        <div>
            <h1>Props/Deconstruction</h1>
            <p>Name: {name}</p>
            <p>age: {age}</p>
            <p>profession: {profession}</p>
        </div>
    )
}

export default Pessoa 