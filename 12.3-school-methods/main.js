const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],

  findPerson(type, id) {
    return this[type].find((item) => item.id === id);
  },

  assignStudent(studentId, subject) {
    const teacherBySubject = this.teachers.filter((teacher) =>
      teacher.subjects.includes(subject)
    );

    const availableTeacher = teacherBySubject.find(
      (teacher) => teacher.capacityLeft
    );

    if (!availableTeacher)
      return `Sorry, no available teachers left for student ID: ${studentId}`;

    const student = this.findPerson("students", studentId);

    if (!student["teachers"]) student["teachers"] = [];
    if (!student["subjects"]) student["subjects"] = [];

    student["teachers"].push(availableTeacher.name);
    student["subjects"].push(subject);
    availableTeacher.capacityLeft--;
    availableTeacher.students.push(student.id);

    return `${student.name} with the student ID: ${studentId} assigned to - ${subject} with  ${availableTeacher.name}`;
  },

  assignStudents(studentIdArr, subject) {
    studentIdArr.forEach((studentID) => {
      console.log(this.assignStudent(studentID, subject));
    });
  },

  assignTeachersSubject(teacherId, newSubject) {
    const teacher = this.findPerson("teachers", teacherId);
    if (!teacher.subjects.includes(newSubject))
      teacher.subjects.push(newSubject);
  },

  teachersStudentsNames(teacherId) {
    let student = "";
    const teacher = this.findPerson("teachers", teacherId);
    teacher.students.forEach((studentId) => {
      student = this.findPerson("students", studentId);
      console.log(student.name);
    });
  },
};

//return a particular object of that person
console.log(school.findPerson("students", 10));

school.assignStudents([12, 11, 13], "history");
console.log(school);

school.assignTeachersSubject(2, "mathematics");
school.assignTeachersSubject(2, "history");
console.log(school.teachers);

// print teacher students names
school.teachersStudentsNames(2);
