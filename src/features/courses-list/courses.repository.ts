import { dbClient } from "@/lib/db";
import { cache } from "react";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.courses.findMany(),
  );
  createCourseElement = (
    command: CreateCourseListElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.courses.create({
      data: command,
    });
  };
  deleteCourseElement = (command: DeleteCourseListElementCommand) => {
    return dbClient.courses.delete({
      where: { id: command.id },
    });
  };
}

export const coursesRepository = new CoursesRepository();
