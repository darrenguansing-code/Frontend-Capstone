import { readAcademicStore, writeAcademicStore } from "../core";

const DEFAULT_STUDENTS = [
  { id: "1601", lastName: "Reyes", firstName: "John", gradeLevel: "Kinder", section: "Kinder-1", status: "Active", payment: "Full Cash" },
  { id: "1602", lastName: "Santos", firstName: "Maria", gradeLevel: "Nursery", section: "Nursery-1", status: "Active", payment: "Pay Lite" },
  { id: "1603", lastName: "Torres", firstName: "Kevin", gradeLevel: "Kinder", section: "Kinder-1", status: "Dropout", payment: "Pay Lite" },
  { id: "1604", lastName: "Garcia", firstName: "Paul", gradeLevel: "Nursery", section: "Nursery-1", status: "Transferred", payment: "All In" },
  { id: "1605", lastName: "Molina", firstName: "Anne", gradeLevel: "Kinder", section: "Kinder-2", status: "Active", payment: "Full Cash" },
];

const DEFAULT_ENROLLED = [
  { id: "1509", lastName: "Gomez", firstName: "Luis", gradeLevel: "Nursery", section: "Nursery-1", status: "Active", payment: "Full Cash" },
  { id: "1511", lastName: "Ramos", firstName: "Ana", gradeLevel: "Kinder", section: "Kinder-1", status: "Active", payment: "Pay Lite" },
];

export function getStudents() {
  return readAcademicStore().students ?? DEFAULT_STUDENTS;
}

export function saveStudents(students) {
  writeAcademicStore({ students });
  return students;
}

export function getEnrolled() {
  return readAcademicStore().enrolledStudents ?? DEFAULT_ENROLLED;
}

export function addEnrolled(student) {
  const enrolled = getEnrolled();
  if (enrolled.some((s) => s.id === student.id)) return enrolled;
  writeAcademicStore({ enrolledStudents: [...enrolled, student] });
  return [...enrolled, student];
}
