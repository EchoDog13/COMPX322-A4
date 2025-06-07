// App.jsx
import { useState } from 'react';
import './App.css';
import NewProjectButton from './NewProjectButton';
import NewProjectForm from './NewProjectForm';

function App() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <h1>Project Management Portal</h1>
            <NewProjectButton onClick={toggleForm} />
            {showForm && <NewProjectForm />}
        </div>
    );
}

export default App;