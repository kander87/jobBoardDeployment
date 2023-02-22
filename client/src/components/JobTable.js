import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' //this is new
import 'bootstrap/dist/css/bootstrap.css';
import DeleteButton from './DeleteButton'


const JobList = (props) => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/job')
            .then(res => setJobs(res.data));
    }, [])

    const removeFromDom = jobId => {
        setJobs(jobs.filter(jobs => jobs._id !== jobId));
    }

    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Jobs Title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Remote</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs && jobs.map((job, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        <Link to={"/job/view/" + job._id}>
                                            {job.title}
                                        </Link>
                                    </td>
                                    <td >
                                        {job.company}
                                    </td>
                                    <td >
                                        {job.salary}
                                    </td>
                                    <td >
                                        {job.remote ? 'Yes' : 'No'}
                                    </td>
                                    <td>
                                        <Link to={"/job/edit/" + job._id}>
                                            <button className="btn btn-primary m-2">Edit</button>
                                        </Link>
                                        |
                                        <DeleteButton jobId={job._id} successCallback={() => removeFromDom(job._id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default JobList;