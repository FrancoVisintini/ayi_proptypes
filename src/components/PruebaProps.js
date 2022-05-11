import PropTypes from 'prop-types';

function PruebaProps(props){
    return(
        <div>
            <h1>We already recived the props</h1>
            <h3>please check the console</h3>
            <ul>
                <li>It's a sum?: {props.ejNumber * 2}</li>
                <li>It's a string?: {props.ejString}</li>
            </ul>
        </div>
    )
}

PruebaProps.propTypes = {
    name: PropTypes.any.isRequired,
    ejString: PropTypes.string, 
    ejNumber: PropTypes.number.isRequired,
    ejArray: PropTypes.array, 
    ejArrayOfNumbers: PropTypes.arrayOf(PropTypes.number), 
    ejArrayOfArray: PropTypes.arrayOf(PropTypes.array),
    stringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    state: PropTypes.oneOf(['Loading', 'Ready']),
    ejElemento: PropTypes.element,
    // shape solo indica lo que si o si debe tener, pero si hay algo extra no salta. Para eso se unsa "exact"
    ejShape: PropTypes.shape({
        texto: PropTypes.string,  
        unArreglo: PropTypes.array,
    }),
    ejRenderable: PropTypes.node //node se usa para algo que se pueda renderizar (x ej no un objeto)
};

export default PruebaProps