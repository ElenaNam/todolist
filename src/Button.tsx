import React from "react";

type ButtonPropsType = {
	title: string;
	onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string
	disabled?: boolean
};

export const Button = ({ title, onClickHandler, className, disabled }: ButtonPropsType) => {
	return <button onClick={onClickHandler} className={className} disabled={disabled}>{title}</button>;
};
