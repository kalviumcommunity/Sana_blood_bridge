import React from 'react';

const RequestBlood = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Request Blood</h2>
      <form>
        <input type="text" placeholder="Hospital Name" className="border p-2 mb-2 block" />
        <input type="text" placeholder="Required Blood Group" className="border p-2 mb-2 block" />
        <button className="bg-red-600 text-white px-4 py-2">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestBlood;