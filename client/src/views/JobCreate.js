import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link} from 'react-router-dom' //this is new
import JobCreateForm from '../components/JobCreateForm';



const Create = () => {

    return (
        <div>
            <h1>Jobs Board</h1>
            <Link to="/"> Home</Link>
            <h3>Add a new author:</h3>
            <JobCreateForm />
        </div>
    )
}

export default Create