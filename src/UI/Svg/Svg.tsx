import React, { cloneElement } from 'react';
import { icons } from './icons';
import { Icons } from '../../types/Icons';


const Svg: React.FC<{ name: Icons; size?: number; fill?: string }> = (
	props
) => {
	return cloneElement(icons[props.name as Icons], {
		width: props.size,
		height: props.size,
		fill: props.fill,
	});
};

export default Svg;