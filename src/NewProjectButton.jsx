import React from 'react';
import './NewProjectButton.css';


// Modular component for the New Project button

function NewProjectButton({ onClick }) {
  return (
    <button className="new-project-button" onClick={onClick}>
      New Project
    </button>
  );
}

export default NewProjectButton;