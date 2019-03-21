import {compose, withState, withHandlers} from 'recompose'

const enhancer = compose(
	withState('test', 'updateTest', 'Hello World')
)

export default enhancer