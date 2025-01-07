import React from "react";

type ButtonPropsType = {
	title: string;
	onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string
	disabled?: boolean
	ariaLabel?: string
};

export const Button = ({ title, onClickHandler, className, disabled, ariaLabel }: ButtonPropsType) => {
	return <button onClick={onClickHandler} className={className} disabled={disabled} aria-label={ariaLabel}>{title}</button>;
};
