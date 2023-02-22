//import the basics first
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' //this is new
import 'bootstrap/dist/css/bootstrap.css';
import JobTable from '../components/JobTable'


export default function Main(props) {
    const [job, setJob] = useState([])
    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/job')
            .then(response => {
                setJob(response.data)
                // setLoaded(true)
            })
    }, [])

    return (
        <div>
            {/* <JobForm /> */}
            <h1 className="display-1">Jobs Board</h1>

            <Link to="/job/create">
                Create new job posting
            </Link>

            <h4>Here are our jobs!:</h4>
            <hr />
            { job? 
            <JobTable job={job}/>
            : <h1>No Jobs Yet!</h1>
            }
        </div>
    )
}
