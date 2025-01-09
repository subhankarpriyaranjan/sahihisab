import React, { useEffect, useState } from 'react';
import { getAllMembers } from '../../../utils/api'; // Import the API function

function MemberList() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(10);

  useEffect(() => {
    async function fetchMembers() {
      const data = await getAllMembers();
      setMembers(data);
    }
    fetchMembers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <DesktopView members={currentMembers} />
      <MobileView members={currentMembers} />
      <Pagination
        membersPerPage={membersPerPage}
        totalMembers={filteredMembers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

function DesktopView({ members }) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {members.map(member => (
            <tr key={member.id}>
              <td className="px-6 py-4">{member.name}</td>
              <td className="px-6 py-4">{member.email}</td>
              <td className="px-6 py-4">{member.phone}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {member.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobileView({ members }) {
  return (
    <div className="md:hidden">
      {members.map(member => (
        <div key={member.id} className="p-4 border-b">
          <div className="flex justify-between items-start mb-2">
            <div className="font-medium">{member.name}</div>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              {member.status}
            </span>
          </div>
          <div className="text-sm text-gray-600 mb-1">{member.email}</div>
          <div className="text-sm text-gray-500">
            Phone: {member.phone}
          </div>
        </div>
      ))}
    </div>
  );
}

function Pagination({ membersPerPage, totalMembers, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="p-4">
      <ul className="flex justify-center space-x-2">
        <li>
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="px-3 py-1 border rounded bg-white"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-gray-300' : 'bg-white'}`}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
            className="px-3 py-1 border rounded bg-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MemberList;
