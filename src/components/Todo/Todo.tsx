import React from 'react';

import classes from './Todo.module.css';

const Todo: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <div className={classes.todo}>{children}</div>;
};

export default Todo;
