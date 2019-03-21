import './nayarificador.styl'
import enhancer from './enhancer'

const Nayarificador = enhancer(({test}) => 
	<React.Fragment>
		<h1>{test}</h1>
		<h2>Nayarificar</h2>
	</React.Fragment>
)
export default Nayarificador