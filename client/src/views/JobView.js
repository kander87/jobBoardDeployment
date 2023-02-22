import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'


const JobView = (props) => {
  const { id } = useParams()
  const [jobDetails, setJobDetails] = useState({})
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
      axios.get(`http://localhost:8000/api/job/view/${id}`)
          .then(response => {
              setJobDetails(response.data)
          })
  }, [id]) //this [] basically tells the useEffect function to run every time the id changes

  const removeFromDom = jobId => {
    setJobs(jobs.filter(jobs => jobs._id !== jobId));
}

  const deleteJob = (id) => {
      axios.delete('http://localhost:8000/api/job/' + id)
          .then(res => {console.log(res)})
          .catch(err => console.error(err));
      navigate("/")
  }

  return (
      <div>
          <h1>Job Details</h1>
          <p> Title: {jobDetails.title}</p>
          <p>Company: {jobDetails.company}</p>
          <p>Salary: ${jobDetails.salary}</p>
          <p>Remote Work? {jobDetails.remote}</p>

          <Link to={"/job/edit/" + jobDetails._id }>
          <button className="btn btn-primary m-2">Edit</button>
          </Link>
          
          <DeleteButton jobId={jobDetails._id} successCallback={() => removeFromDom(jobDetails._id)} />

      </div>
  )
}

export default JobView