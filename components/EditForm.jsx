'use client';
import { editSingleTask } from '@/utils/action';

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editSingleTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg'
    >
      <input
        type='hidden'
        name='id'
        value={id}
      />
      {/* content */}
      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='input input-bordered w-full'
      />
      {/* completed */}
      <div className='form-control my-4'>
        <label
          htmlFor='completed'
          className='cursor-pointer label'
        >
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox-primary checkbox checkbox-sm'
          />
        </label>
      </div>
      <button
        className='btn btn-primary btn-sm btn-block'
        type='submit'
      >
        Edit
      </button>
    </form>
  );
};
export default EditForm;
