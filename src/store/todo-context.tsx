import { createContext, useState } from 'react';
import { ITodo } from '../types/Todo';

type TodosContextObj = {
	items: ITodo[];
	addTodo: (todoText: string) => void;
	removeTodo: () => void;
	setTodoChecked: (id: number, checked: boolean) => void;
};

export const TodoContext = createContext<TodosContextObj>({
	items: [],
	addTodo: (todoText: string) => {},
	removeTodo: () => {},
	setTodoChecked: (id: number, cehcked: boolean) => {},
});

const TodoContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	function addTodoHandler(todoText: string) {
		const newTodo: ITodo = {
			id: Date.now(),
			text: todoText,
			checked: false,
		};

		setTodos((prev) => prev.concat(newTodo));
	}

	function removeTodoHandler() {
		setTodos((prev) => prev.filter((todo) => !todo.checked));
	}

	function setTodoCheckedHandler(id: number, checked: boolean) {
		const index = todos.findIndex((todo) => todo.id === id);
        const updatedTodos = [...todos]
        updatedTodos[index].checked = checked

		setTodos(updatedTodos);
	}

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
        setTodoChecked: setTodoCheckedHandler
	};

	return (
		<TodoContext.Provider value={contextValue}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
