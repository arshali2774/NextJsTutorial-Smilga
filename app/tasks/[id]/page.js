import EditForm from '@/components/EditForm';
import { getSingleTask } from '@/utils/action';
import Link from 'next/link';

const SingleTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.id);
  return (
    <>
      <div className='mb-16'>
        <Link
          href={'/tasks'}
          className='btn btn-accent uppercase'
        >
          Back To Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTaskPage;
