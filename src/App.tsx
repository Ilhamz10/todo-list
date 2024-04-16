import React, { useContext, useCallback, useState } from 'react';
import classes from './App.module.css';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';
import DropDown from './UI/DropDown/DropDown';
import Todo from './components/Todo/Todo';
import { TodoContext } from './store/todo-context';

function App() {
	const todoCtx = useContext(TodoContext);
	const [todoValue, setTodoValue] = useState('');
	const [filter, setFilter] = useState('all');

	const doesntCheckedTodos = useCallback(() => {
		return todoCtx.items.reduce((sum, todo) => {
			if (!todo.checked) {
				return sum + 1;
			}
			return sum + 0;
		}, 0);
	}, [todoCtx.items]);

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		todoCtx.addTodo(todoValue);
		setTodoValue('');
	};

	const todoChecked = (
		event: React.ChangeEvent<HTMLInputElement>,
		id: number
	) => {
		todoCtx.setTodoChecked(id, event.target.checked);
	};

	const deleteCheckedTodos = () => {
		todoCtx.removeTodo();
	};

	const filterTodos = () => {
		if (filter === 'active') {
			return todoCtx.items.filter((todo) => !todo.checked);
		} else if (filter === 'completed') {
			return todoCtx.items.filter((todo) => todo.checked);
		}
		return todoCtx.items;
	};

	return (
		<>
			<h1>todos</h1>
			<div className={classes.App}>
				<div className={classes.dropDownBox}>
					<DropDown
						buttonElement={
							<form onSubmit={formSubmitHandler}>
								<Input
									value={todoValue}
									onChange={(e) => setTodoValue(e.target.value)}
									type='text'
								/>
							</form>
						}>
						<div>
							{filterTodos().map((todo) => (
								<Todo key={todo.id}>
									<Input
										onChange={(event) => todoChecked(event, todo.id)}
										type='checkbox'
										text={todo.text}
										id={todo.id}
										checked={todo.checked}
									/>
								</Todo>
							))}
						</div>
						<div className={classes.dropDownInfo}>
							<p>{doesntCheckedTodos()} items left</p>
							<div className={classes.options}>
								<Input
									type='radio'
									text='All'
									id={1}
									name='options'
									checked={true}
									onClick={() => setFilter('all')}
								/>
								<Input
									onClick={() => setFilter('active')}
									type='radio'
									text='Active'
									id={2}
									name='options'
								/>
								<Input
									onClick={() => setFilter('completed')}
									type='radio'
									text='Completed'
									id={3}
									name='options'
								/>
							</div>
							<Button onClick={deleteCheckedTodos}>
								<span>Clear completed</span>
							</Button>
						</div>
					</DropDown>
				</div>
			</div>
		</>
	);
}

export default App;
