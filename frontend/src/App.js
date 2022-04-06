import Heading from './components/Heading'
import InputField from './components/InputField'
import Todo from './components/Todo'

function App() {
    return (
        <div className="app">
            <div className="top"></div>
            <div className="todo">
                <Heading />
                <InputField />
                <Todo />
            </div>
        </div>
    )
}

export default App