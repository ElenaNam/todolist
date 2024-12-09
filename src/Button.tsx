import React from "react";

type ButtonPropsType = {
	title: string;
	onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string
};

export const Button = ({ title, onClickHandler, className }: ButtonPropsType) => {
	return <button onClick={onClickHandler} className={className}>{title}</button>;
};
