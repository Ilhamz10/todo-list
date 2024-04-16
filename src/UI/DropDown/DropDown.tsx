import React, { ReactElement, useState, useContext, useEffect } from 'react';

import classes from './DropDown.module.css';
import Button from '../Button/Button';
import Svg from '../Svg/Svg';
import { TodoContext } from '../../store/todo-context';

const DropDown: React.FC<
	React.PropsWithChildren<{
		buttonElement: ReactElement;
	}>
> = ({ children, buttonElement }) => {
	const todoCtx = useContext(TodoContext);

	useEffect(() => {
		if (todoCtx.items.length > 0) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [todoCtx.items]);

	const [isActive, setIsActive] = useState(false);
	return (
		<div className={`${isActive && classes.isActive}`}>
			<Button>
				<span onClick={() => setIsActive((prev) => !prev)}>
					<Svg name='arrow' fill='lightgray' size={25} />
				</span>
				{buttonElement}
			</Button>
			<div className={classes.dropDownContent}>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default DropDown;
