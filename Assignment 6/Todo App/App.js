function TodoApp() {
    var [todos, setTodos] = React.useState([]);
    var [input, setInput] = React.useState('');

    function addTask() {
        if (input === '') {
            return;
        }

        var newList = [];
        for (var i = 0; i < todos.length; i++) {
            newList.push(todos[i]);
        }
        newList.push(input);

        // sort in ascending order
        newList.sort();

        setTodos(newList);
        setInput('');
    }

    function deleteTask(indexToDelete) {
        var newList = [];
        for (var i = 0; i < todos.length; i++) {
            if (i !== indexToDelete) {
                newList.push(todos[i]);
            }
        }
        setTodos(newList);
    }

    return (
        <div className="todo-container">
            <h1>Todo List</h1>

            <div className="input-section">
                <input
                    type="text"
                    value={input}
                    onChange={function(e) {
                        setInput(e.target.value);
                    }}
                    onKeyPress={function(e) {
                        if (e.key === 'Enter') {
                            addTask();
                        }
                    }}
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul className="task-list">
                {todos.map(function(task, index) {
                    return (
                        <li key={index}>
                            <span>{task}</span>
                            <button onClick={function() {
                                deleteTask(index);
                            }}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);
