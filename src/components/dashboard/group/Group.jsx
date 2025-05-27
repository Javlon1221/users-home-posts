import './group.css'
import React, { useEffect, useState } from 'react';

const Group = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newGroupName, setNewGroupName] = useState("");
  const [editGroupId, setEditGroupId] = useState(null);
  const [editGroupName, setEditGroupName] = useState("");

  useEffect(() => {
    const fakeGroups = [
      { id: 1, name: 'Frontend 101', students: 24 },
      { id: 2, name: 'Backend 202', students: 19 },
      { id: 3, name: 'UI/UX Design', students: 16 },
    ];
    setTimeout(() => {
      setGroups(fakeGroups);
      setLoading(false);
    }, 500);
  }, []);

  // Add new group
  const handleAddGroup = () => {
    if (!newGroupName.trim()) return;
    const newGroup = {
      id: Date.now(),
      name: newGroupName,
      students: 0,
    };
    setGroups([...groups, newGroup]);
    setNewGroupName("");
  };

  // Delete group
  const handleDeleteGroup = (id) => {
    const filtered = groups.filter(g => g.id !== id);
    setGroups(filtered);
  };

  // Edit group
  const handleEditGroup = (group) => {
    setEditGroupId(group.id);
    setEditGroupName(group.name);
  };

  // Save edited group
  const handleSaveEdit = () => {
    const updated = groups.map(g =>
      g.id === editGroupId ? { ...g, name: editGroupName } : g
    );
    setGroups(updated);
    setEditGroupId(null);
    setEditGroupName("");
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-semibold mb-4">Groups</h1>

      {/* Add Group Input */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          placeholder="New group name"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleAddGroup}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Group List */}
      {loading ? (
        <div className="text-gray-600 animate-pulse">Loading groups...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              {editGroupId === group.id ? (
                <>
                  <input
                    value={editGroupName}
                    onChange={(e) => setEditGroupName(e.target.value)}
                    className="border px-2 py-1 rounded w-full mb-2"
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditGroupId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-bold mb-1">{group.name}</h2>
                  <p className="text-gray-600 mb-2">{group.students} students</p>
                  <button
                    onClick={() => handleEditGroup(group)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteGroup(group.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Group;

