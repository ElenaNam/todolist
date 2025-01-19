import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CreateItemForm } from './CreateItemForm';
import { todolistAddFormSx } from '../../App.styles';

const meta: Meta<typeof CreateItemForm> = {
  title: 'CreateItemForm',
  component: CreateItemForm
};

export default meta;

const addItem = action('Button "+" was pressed inside the form')

export const CreateItem = () => <CreateItemForm styles={todolistAddFormSx} createItem={addItem}/>

