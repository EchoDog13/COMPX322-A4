import React from 'react';

function NewProjectForm({ onClick }) {
  return (
       <form>
      <h2>New Project</h2>
        <label htmlFor="projectName">Project Name:</label>
      <input type="text" placeholder="Project Name" />
      <br />
        <label htmlFor="projectDescription">Project Description:</label>
    <input type="text" placeholder="Project Description" />
    <label htmlFor='StartDate'>Start Date:</label>
      <input type="date" placeholder="Start Date" />
      <br />
    <label htmlFor='EndDate'>End Date:</label>
      <input type="date" placeholder="End Date" />
      <br />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default NewProjectForm;