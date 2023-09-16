import React from 'react';
import classes from './Button.module.css';

const Button: React.FC<
	React.PropsWithChildren<{ onClick?: () => void; }>
> = (props) => {
	return (
		<button
			className={classes.button}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
