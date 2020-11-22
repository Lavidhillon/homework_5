class Course {
  constructor(name, teachers, courseNumber) {
    this.name = name;
    this.teachers = teachers;
    this.courseNumber = courseNumber;
  }
}

const math101 = new Course("Math 101", ["Albert Einstein"], 100);
const computerScience301 = new Course(
  "Introduction to Computer Science",
  ["Dr. Zeus", "Mark Zuckerberg"],
  300
);
const socialStudies201 = new Course(
  "Intro to Social Studies",
  ["Steve Wozniak", "Brian Stevens"],
  200
);

// console.log(math101);
// console.log(computerScience301);
// console.log(socialStudies201);

class School {
  courses = [];

  addCourse(course) {
    this.courses.push(course);
    return this;
  }

  findByName(name) {
    return (
      this.courses.find(
        (course) => course.name.toLowerCase().search(name.toLowerCase()) >= 0
      ) || "not found"
    );
  }

  list() {
    return this.courses;
  }
}

const codecore = new School();
codecore
  .addCourse(math101)
  .addCourse(computerScience301)
  .addCourse(socialStudies201);

console.log(codecore.findByName("science"));
