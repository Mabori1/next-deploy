"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses.repository";

export const createCourseAction = async (
  revalidatePagePath: string,
  command: CreateCourseListElementCommand,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
