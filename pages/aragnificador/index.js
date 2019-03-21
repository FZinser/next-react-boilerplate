import './aragnificador.styl'
import enhancer from './enhancer'

const Aragnificador = enhancer(({test}) => 
	<React.Fragment>
		<h1>{test}</h1>
		<h2>Aragnificar</h2>
	</React.Fragment>
)
export default Aragnificador