import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useParams } from 'react-router-dom' //this is new
import JobEditForm from '../components/JobEditForm';
import axios from 'axios'



const Edit = () => {
    const { id } = useParams()
    const [jobs, setJobs] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/job/view/' + id)
            .then(res => {
            console.log(res.data)
            setJobs(res.data)

            })
    }, [id]);
    const removeFromDom = jobId => {
        setJobs(jobs.filter(jobs => jobs._id !== jobId));
    }

    return (
        <div>
            <h1 className= "display-1">Jobs Board</h1>
            <Link to="/"> Home</Link>
            <JobEditForm removeFromDom={removeFromDom} />
        </div>
    )
}

export default Edit