import React from 'react';

function NewProjectButton({ onClick }) {
  return (
    <button className="new-project-button" onClick={onClick}>
      New Project
    </button>
  );
}
// NewProjectButton.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
export default NewProjectButton;