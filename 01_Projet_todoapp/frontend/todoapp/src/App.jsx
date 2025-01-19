import  { useState } from 'react';
import { PlusCircle, CheckCircle2, Circle, Trash2, Tag, AlertCircle } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('personal');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputText.trim(),
          completed: false,
          priority,
          category,
        },
      ]);
      setInputText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Taskify
          </h1>

          <form onSubmit={addTodo} className="mb-8">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 flex items-center gap-2"
              >
                <PlusCircle size={20} />
                Add
              </button>
            </div>

            <div className="flex gap-4">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
              </select>
            </div>
          </form>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                  todo.completed
                    ? 'bg-gray-50 text-gray-500'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="focus:outline-none"
                >
                  {todo.completed ? (
                    <CheckCircle2 className="text-green-500" size={24} />
                  ) : (
                    <Circle className="text-gray-400" size={24} />
                  )}
                </button>

                <div className="flex-1">
                  <p
                    className={`text-lg ${
                      todo.completed ? 'line-through' : ''
                    }`}
                  >
                    {todo.text}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Tag size={14} />
                      {todo.category}
                    </span>
                    <span className={`flex items-center gap-1 text-sm ${getPriorityColor(todo.priority)}`}>
                      <AlertCircle size={14} />
                      {todo.priority}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              <p className="text-lg">No tasks yet</p>
              <p className="text-sm">Add a new task to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;