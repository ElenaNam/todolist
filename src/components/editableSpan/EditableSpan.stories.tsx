import { Meta } from "@storybook/react/*";
import { action } from '@storybook/addon-actions';
import { EditableSpan } from "./EditableSpan";

const meta: Meta<typeof EditableSpan> = {
	title: 'ChangeTitleForm',
	component: EditableSpan
};

export default meta;

export const ChangeTitleForm = () => {
	const newTitle = action('newTitle')

	return (
		<EditableSpan
			title={'title'}
			className={"todolist__label"}
			changeTitle={newTitle}
		/>
	)
}