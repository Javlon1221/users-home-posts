import React from 'react';

const activeStudents = [
  { id: 1, name: "Ali", course: "Frontend", email: "ali@gmail.com" },
  { id: 2, name: "Laylo", course: "Backend", email: "laylo@gmail.com" },
  { id: 3, name: "Jamshid", course: "UI/UX", email: "jamshid@gmail.com" },
];

const ActiveStudent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {activeStudents.map((student) => (
        <div
          key={student.id}
          className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="font-bold text-lg mb-1">{student.name}</h3>
          <p className="text-sm text-gray-700">{student.course}</p>
          <p className="text-sm text-gray-500">{student.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ActiveStudent;