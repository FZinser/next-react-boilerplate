import './zinserificador.styl'
import enhancer from './enhancer'

const Zinserificador = enhancer(({test}) => 
	<React.Fragment>
		<h1>{test}</h1>
		<h2>Zinserificar</h2>
	</React.Fragment>
)
export default Zinserificador