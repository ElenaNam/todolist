import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CreateItemForm } from './CreateItemForm';

const meta: Meta<typeof CreateItemForm> = {
  title: 'CreateItemForm',
  component: CreateItemForm
};

export default meta;

const addItem = action('Button "+" was pressed inside the form')

export const CreateItem = () => <CreateItemForm className="addform__flex-wrapper" createItem={addItem}/>

