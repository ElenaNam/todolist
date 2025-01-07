import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { useState } from 'react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;

//functions 
const btnOnClickHandler = action('clicked')

export const Btn = () => <Button title="Кнопка" onClickHandler={btnOnClickHandler} ariaLabel="button"/>

//AddForm Button
export const AddFormBtn = () => <Button title="+" className="btn-primary" onClickHandler={btnOnClickHandler} ariaLabel="add task" />
export const AddFormDisabledBtn = () => <Button title="+" className="btn-primary" onClickHandler={btnOnClickHandler} ariaLabel="add task" disabled />

//Filter Button
export const FilterBtn = () => {
  const [isActive, setIsActive] = useState(false)
  return <Button title="Completed" onClickHandler={() => setIsActive(!isActive)} className={isActive ? 'btn-primary active' : 'btn-primary'} />
}

//Delete Buttons
export const DeleteBtn = () => <Button title={'x'} className="btn-delete" onClickHandler={btnOnClickHandler} ariaLabel="delete todolist" />
