import React, { useEffect, useState } from 'react';
import { getAllMembers } from '../../../utils/api';

function MemberList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(10); // Set 10 rows per page
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getAllMembers(); // Fetch members from the API
        setMembers(data); // Set the fetched members to state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchMembers();
  }, []);

  // Filter members based on search term
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.includes(searchTerm)
  );

  // Calculate the indexes of the current page's members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle loading and error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Search bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by name, email, or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Desktop view */}
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
            {currentMembers.map(member => (
              <tr key={member.id}>
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4">{member.phone}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    member.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {currentMembers.map(member => (
          <div key={member.id} className="p-4 border-b">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">{member.name}</div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                member.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {member.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-1">{member.email}</div>
            <div className="text-sm text-gray-600 mb-1">{member.phone}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="py-4">
        <nav className="flex justify-center">
          <ul className="inline-flex items-center space-x-2">
            {/* First Page Button */}
            <li>
              <button 
                onClick={() => paginate(1)} 
                disabled={currentPage === 1} 
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-md disabled:opacity-50"
              >
                First
              </button>
            </li>

            {/* Previous Page Button */}
            <li>
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1} 
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button 
                  onClick={() => paginate(index + 1)} 
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    currentPage === index + 1 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-700 bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Page Button */}
            <li>
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages} 
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </li>

            {/* Last Page Button */}
            <li>
              <button 
                onClick={() => paginate(totalPages)} 
                disabled={currentPage === totalPages} 
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MemberList;
