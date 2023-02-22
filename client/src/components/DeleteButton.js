import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { jobId, successCallback } = props;
    
    const deleteJob= e => {
        axios.delete('http://localhost:8000/api/job/' + jobId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button className= "btn btn-danger m-2" onClick={deleteJob}>
            Delete
        </button>
    )
}

