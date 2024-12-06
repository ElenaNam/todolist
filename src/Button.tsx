import React from "react";

type ButtonPropsType = {
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ title, onClick }: ButtonPropsType) => {
	return <button onClick={onClick}>{title}</button>;
};
