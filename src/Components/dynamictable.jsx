import React, { useState } from 'react';

export default function DynamicTable({ updateTableData }) {
    const [tableData, setTableData] = useState([]);
    
      const handleAddRow = () => {
        const newData = [...tableData, { name: '', email: '', password: ''}];
        setTableData(newData);
      };
    
      const handleInputChange = (event, index, key) => {
        const newData = [...tableData];
        newData[index][key] = event.target.value;
        setTableData(newData);
        updateTableData(newData); 
      };

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
       {tableData.map((row, index) => (
          <tr key={index}>
            <td>
             <input
                  type="text"
                  value={row.name}
                  onChange={(e) => handleInputChange(e, index, 'name')}
                />
           </td>
           <td>
             <input
                  type="text"
                  value={row.email}
                  onChange={(e) => handleInputChange(e, index, 'email')}
                />
           </td>
           <td>
             <input
                  type="text"
                  value={row.password}
                  onChange={(e) => handleInputChange(e, index, 'password')}
                />
           </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}