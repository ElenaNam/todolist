import type { Meta } from '@storybook/react';
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

export const Btn = () => <Button title="Кнопка" onClickHandler={() => {}} ariaLabel="button"/>

//AddForm Button
export const AddFormBtn = () => <Button title="+" className="btn-primary" onClickHandler={() => {}} ariaLabel="add task" />
export const AddFormDisabledBtn = () => <Button title="+" className="btn-primary" onClickHandler={() => {}} ariaLabel="add task" disabled />

//Filter Button
export const FilterBtn = () => {
  const [isActive, setIsActive] = useState(false)
  return <Button title="Completed" onClickHandler={() => setIsActive(!isActive)} className={isActive ? 'btn-primary active' : 'btn-primary'} />
}

//Delete Buttons
export const DeleteBtn = () => <Button title={'x'} className="btn-delete" onClickHandler={() => {}} ariaLabel="delete todolist" />