'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTask = async () => {
  return await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
};

export const createTask = async (prevState, formData) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); button waiting state k liye banaya
  const content = formData.get('content');
  //   niche wala comment bina try catch use kiye tha
  //   await prisma.task.create({
  //     data: {
  //       content,
  //     },
  //   });
  //   revalidatePath('/tasks');
  /* -------------------------- setting up zod schema ------------------------- */
  const Task = z.object({
    content: z.string().min(5),
  });
  /* ---------------------------- zod schema ended ---------------------------- */
  //
  try {
    // checking if the task has less than 5 characters
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath('/tasks');
    // we can't simply return a value here in try catch in next js. isliye hume ek object return krna padta hai
    return { message: 'success' };
  } catch (error) {
    // ab hum zod library ki madad se message display krenge
    const message = error.issues[0].message || 'error';
    return { message };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath('/tasks');
};

export const getSingleTask = async (id) => {
  return prisma.task.findUnique({ where: { id } });
};

export const editSingleTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');
  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === 'on' ? true : false },
  });
  redirect('/tasks');
};
