import React from 'react';

function ProjectListItem({ onClick }) {
  return (
<div>
    <p className='projectTitle'></p>
    <p className='projectStartDate'></p>
    <p className='projectEndDate'></p>

    <button className='projectDelete'></button>

</div>
  );
}

export default ProjectListItem;