'use client';
import { createTask } from '@/utils/action';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'Please Wait...' : 'Create Task'}
    </button>
  );
};

//initial state for form
const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);
  // here formAction is a function which is used to change the state of the form
  useEffect(() => {
    if (state.message === 'success') {
      toast.success('Task created');
      return;
    }
    if (state.message) {
      toast.error(state.message);
      return;
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}

      <div className='join w-full'>
        <input
          type='text'
          name='content'
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
