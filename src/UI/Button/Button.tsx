import React from 'react';
import classes from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	);
};

export default Button;
