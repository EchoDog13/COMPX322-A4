import React from 'react';

function ProjectListItem({ title, startDate, endDate, onDelete }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>
        <button 
          className='projectDeleteButton' 
          onClick={onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProjectListItem;
