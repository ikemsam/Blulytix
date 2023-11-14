'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IformInputs {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

type Props = {
  postId: string;
};

const CommentForm = ({ postId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformInputs>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<IformInputs> = async (data) => {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        // After submitting the form --> true
        setSubmitted(true);
      })
      .catch((err) => {
        // If there was an error when submitting the form --> true
        setSubmitted(false);
      });
  };
  return (
    <div>
      {submitted && (
        <div className="flex flex-col max-w-2xl px-10 py-10 mx-auto my-10 text-white bg-yellow-500">
          <h3 className="text-3xl font-bold">
            Your comment has been submitted!
          </h3>
          <p> Once it has been approved, it will appear below</p>
        </div>
      )}
      <form
        className="flex flex-col max-w-2xl p-5 mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="mb-2 text-sm text-dark ">Enjoyed this article?</h3>
        <h3 className="text-3xl font-bold">Enjoyed this article?</h3>
        <hr className="py-3 mt-2" />

        <input type="hidden" {...register('_id')} name="_id" value={postId} />

        <label htmlFor="Name" className="block mb-5">
          <span className="text-sm font-medium text-gray">Name</span>
          <input
            {...register('name', { required: true })}
            placeholder="Enter your name"
            type="text"
            className="block w-full px-2 py-3 text-sm bg-transparent border rounded outline-none focus:ring-[0.8px] focus:border-primary ring-[0.4px] ring-primary border-dark/20 text-gray placeholder-gray/40 "
          />
        </label>
        <label htmlFor="Email" className="block mb-5">
          <span className="text-sm font-medium text-gray">Email</span>
          <input
            {...register('email', { required: true })}
            placeholder="Enter your email"
            type="email"
            className="block w-full px-2 py-3 text-sm bg-transparent border rounded outline-none focus:ring-[0.8px] focus:border-primary ring-[0.4px] ring-primary border-dark/20 text-gray placeholder-gray/40 "
          />
        </label>
        <label htmlFor="Comment" className="block mb-5">
          <span className="text-sm font-medium text-gray">Comment</span>
          <textarea
            {...register('comment', { required: true })}
            placeholder="Enter your comment"
            rows={8}
            className="block w-full px-2 py-3 text-sm bg-transparent border rounded outline-none focus:ring-[0.8px] focus:border-primary ring-[0.4px] ring-primary border-dark/20 text-gray placeholder-gray/40"
          />
        </label>

        <div className="flex flex-col gap-2 my-5">
          {errors.name && (
            <span className="text-sm font-light text-red-500">
              Name field is required
            </span>
          )}
          {errors.email && (
            <span className="text-sm font-light text-red-500">
              Email field is required
            </span>
          )}
          {errors.comment && (
            <span className="text-sm font-light text-red-500">
              Comment field is required
            </span>
          )}
        </div>

        <input
          type="submit"
          className="w-full px-2 py-3 text-sm font-semibold rounded shadow cursor-pointer bg-primary text-secondary"
        />
      </form>
    </div>
  );
};

export default CommentForm;
