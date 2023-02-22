
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function JobCreateForm(props) {
    const [errors, setErrors] = useState(null); 
    const navigate = useNavigate()
    const [formData, setFormData] =useState({
        title: "", 
        company: "", 
        salary: "0",
        remote: false
    })

    //handler when the form is submitte
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        console.log("starberry")
        //make a post request to create a new prodct and taking in t
        //data types you used in your model
        axios.post('http://localhost:8000/api/job/create', formData) 
            .then(res=>{
                console.log("kiwi")
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log("bananananana")
                console.log(err.response)
                setErrors(err.response?.data?.errors)})
    }

    const handleOnChange = (e) => {
        if(e.target.type === "checkbox"){
            console.log(e.target.checked)
            setFormData({
                ...formData,
                [e.target.name] : e.target.checked
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
        }
    }

    //     onsubmit for the form that runs the method above
    // onChange for each individual input that uses the setX and the value of X
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input type="text"  name="title" onChange={handleOnChange} value={formData.title}/>

            </p>                
            {
                    errors?.title && (
                        <span className="text-danger">{errors.title?.message}</span>
                    )
                }
            <p>
                <label>Company:</label><br/>
                <input type="text" name="company" onChange={handleOnChange} value={formData.company}/>
                </p>
                {
                    errors?.company && (
                        <span className="text-danger">{errors.company?.message}</span>
                    )
                }
            <p>
                <label>Salary:</label><br/>
                <input type="number" name="salary" step="any" onChange={handleOnChange} value={formData.salary}/>
                </p>
                {
                    errors?.salary && (
                        <span className="text-danger">{errors.salary?.message}</span>
                    )
                }
            <p>
                    <label>Remote:</label><br />
                    <input 
                        className='form-checked' 
                        type="checkbox" 
                        name="remote" 
                        checked={formData.remote} 
                        onChange={handleOnChange} 
                    />
                        </p>
            <input className="btn btn-primary m-2" type="submit"/>
            <button className="btn btn-warning m-2" onClick={(e)=> navigate('/')}> Cancel </button>

        </form>
        
    )
}