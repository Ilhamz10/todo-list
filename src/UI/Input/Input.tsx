import React from 'react';

import classes from './Input.module.css';
import Svg from '../Svg/Svg';

const Input = React.forwardRef<
	HTMLInputElement,
	{
		type: 'checkbox' | 'text' | 'radio';
		text?: string;
		id?: number;
		name?: string;
		checked?: boolean;
		value?: string;
		onChange?: React.ChangeEventHandler<HTMLInputElement>;
		onClick?: React.MouseEventHandler
	}
>((props, ref) => {
	return (
		<>
			<div className={classes[props.type]}>
				{props.type === 'checkbox' && (
					<>
						<input
							className={classes.input}
							type='checkbox'
							id={`checkbox${props.id}`}
							onChange={props.onChange}
							defaultChecked={props.checked}
						/>
						<label className={classes.label} htmlFor={`checkbox${props.id}`}>
							<Svg name='check' size={20} fill='#77C0AF' />
						</label>
						<p>{props.text}</p>
					</>
				)}

				{props.type === 'text' && (
					<input
						value={props.value}
						onChange={props.onChange}
						ref={ref}
						type='text'
						placeholder='What needs to be done?'
					/>
				)}

				{props.type === 'radio' && (
					<>
						<input
							defaultChecked={props.checked}
							type='radio'
							id={`radio${props.id}`}
							name={props.name}
							value={props.text}
						/>
						<label onClick={props.onClick} htmlFor={`radio${props.id}`}>{props.text}</label>
					</>
				)}
			</div>
		</>
	);
});

export default Input;
