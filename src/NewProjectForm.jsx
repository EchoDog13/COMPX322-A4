import React, { useState } from 'react';
import './NewProjectForm.css';

function NewProjectForm({ onProjectCreated }) {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace 'T' with a space in the datetime-local values
    const formattedStartDate = startDate.replace('T', ' ');
    const formattedEndDate = endDate.replace('T', ' ');

    //Construct the new project object
    const newProject = {
      projectname: projectName,
      projectdesc: projectDescription,
      startdate: formattedStartDate,
      enddate: formattedEndDate,
    };

    // Send a POST request to the server to create a new project
    try {
      const res = await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      if (res.ok) {
        // Clear the form fields after successful submission
        setProjectName('');
        setProjectDescription('');
        setStartDate('');
        setEndDate('');
        if (onProjectCreated) onProjectCreated();
      } else {
        //Handle error response
        alert('Failed to create project');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    // Modular component for the New Project form
    <form onSubmit={handleSubmit}>
      <h2>New Project</h2>
      <label htmlFor="projectName">Project Name:</label>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        // Update the project name state
        onChange={e => setProjectName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="projectDescription">Project Description:</label>
      <input
        type="text"
        placeholder="Project Description"
        value={projectDescription}
        onChange={e => setProjectDescription(e.target.value)}
      />
      <label htmlFor='StartDate'>Start Date:</label>
      <input
        type="datetime-local"
        placeholder="Start Date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        required
      />
      <br />
      <label htmlFor='EndDate'>End Date:</label>
      <input
      //Input type for date time starting at current date
        type="datetime-local"
        placeholder="End Date"
        value={endDate}
        // Update the end date state
        onChange={e => setEndDate(e.target.value)}
        required
      />
      <br />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default NewProjectForm;