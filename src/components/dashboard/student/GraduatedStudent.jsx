import React from 'react';

const graduatedStudents = [
  { id: 1, name: "Bobur", course: "Data Science", email: "bobur@gmail.com" },
  { id: 2, name: "Maqsud", course: "Java", email: "maqsud@gmail.com" },
];

const GraduatedStudent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {graduatedStudents.map((student) => (
        <div
          key={student.id}
          className="p-4 bg-green-100 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="font-bold text-lg mb-1">{student.name}</h3>
          <p className="text-sm text-gray-700">{student.course}</p>
          <p className="text-sm text-gray-500">{student.email}</p>
        </div>
      ))}
    </div>
  );
};

export default GraduatedStudent;
