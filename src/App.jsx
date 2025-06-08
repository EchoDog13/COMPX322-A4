// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import NewProjectButton from './NewProjectButton';
import NewProjectForm from './NewProjectForm';
import SearchBar from './SearchBar';


function App() {
    // API URL for fetching projects
    const apiUrl = 'http://localhost:3000';
    
    // State variables
    const [showForm, setShowForm] = useState(false); // Toggle for showing/hiding the project form
    const [projects, setProjects] = useState([]); // Array to hold project data
    const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering projects
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

    
    //On page load, fetch projects from the API
    useEffect(() => {
        fetch(`${apiUrl}/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error('Failed to fetch projects', err));
    }, [apiUrl]);

    // Toggle the visibility of the project form
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Delete project by id
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${apiUrl}/projects/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                // If the delete request was successful, update the state to remove the project from the local list, and this will trigger a re-render while also remove from the DB
                setProjects(projects.filter(project => project.id !== id));
            } else {
                alert('Failed to delete project');
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    // Filter projects on the frontend
    const filteredProjects = projects
        .filter(project =>
            project.projectname.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            const dateA = new Date(a.startdate);
            const dateB = new Date(b.startdate);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });

    return (
        <div class="App">
            <h1>Project Management Portal</h1>

        
            <NewProjectButton onClick={toggleForm} />

            {showForm && <NewProjectForm />}

            <SearchBar value={searchTerm} onChange={setSearchTerm} />

{/* Radio Buttons for sort order */}
            <div className='sortOptions'>
                <label>
                    <input
                        type="radio"
                        name="sortOrder"
                        value="asc"
                        checked={sortOrder === 'asc'}
                        onChange={() => setSortOrder('asc')}
                    />
                    Start Date Ascending
                </label>
                <label >
                    <input
                        type="radio"
                        name="sortOrder"
                        value="desc"
                        checked={sortOrder === 'desc'}
                        onChange={() => setSortOrder('desc')}
                    />
                    Start Date Descending
                </label>
            </div>

{/* Table to dispaly Project items */}
            <table className="projectList">
                {/* Table Headers */}
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Show filtered projects to intergrate search */}
                    {filteredProjects.map(project => (
                        <tr key={project.id}>
                            <td>{project.projectname}</td>
                            <td>{project.startdate}</td>
                            <td>{project.enddate}</td>
                            <td>
                                <button
                                    className='projectDeleteButton'
                                    onClick={() => handleDelete(project.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
