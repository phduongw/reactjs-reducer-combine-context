import './App.css';
import { useStore, action } from './store'


function App() {
    const [ state, dispatch ] = useStore();
    const { todo, todoInput } = state;

    return (
        <div>
            <input
                type="text"
                value={todoInput}
                onChange={(e) => dispatch(action.setTodo(e.target.value))}
            />
            <br/>
            <button>Add</button>

            <ul>
                {todo.map((ele, index) => (
                    <li key={index}>
                        {ele}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
