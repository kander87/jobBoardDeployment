import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

const JobEditForm = (props) => {
    const {removeFromDom} = props;
    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState(null);
    const [formData, setFormData] =useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/job/view/' + id)
            .then(res => {
                setFormData(res.data);
            }).catch(err=> {
                console.log(err);
            })
    },[id]);

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new prodct and taking in the 
        //data types you used in your model
        axios.put('http://localhost:8000/api/job/edit/' + id, formData, {new:true}) 
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err.response?.data?.errors)
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

    return (
        <div>
            <h1>Update This Job!</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title: </label><br />
                    <input type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleOnChange} />
                </p>
                {
                    errors?.title && (
                        <span className="text-danger">{errors.title?.message}</span>
                    )
                }
                <p>
                    <label>Company: </label><br />
                    <input type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleOnChange} />
                </p>
                {
                    errors?.company && (
                        <span className="text-danger">{errors.company?.message}</span>
                    )
                }
                <p>
                    <label>Salary: </label><br />
                    <input type="textarea"
                        name="salary"
                        value={formData.salary}
                        onChange={handleOnChange} />
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
                <input  className="btn btn-primary m-2" type="submit" />
                <button className="btn btn-warning m-2" onClick={(e)=> navigate('/')}> Cancel </button>
                <DeleteButton jobId={id} successCallback={() => removeFromDom(id)} />
            </form>
        </div>
    )
}

export default JobEditForm