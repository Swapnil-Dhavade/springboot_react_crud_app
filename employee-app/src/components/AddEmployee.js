import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import employeeService from "../employee.service";


const AddEmployee = () => {

    const [name, setName]=useState('');
    const [location, setLocation]=useState('');
    const [department, setDepartment]=useState('');
    const navigate=useNavigate();
    const {id}=useParams();

    const saveEmployee=(e)=>{
        e.preventDefault();

        const employee={name, location,department, id};
        if(id){
            //update the record
            employeeService.update(employee)
            .then(response=>{
                console.log('Employee data edited successfully', response.data);
                navigate('/');
            })
            .catch(error =>{
                console.log('Something went wrong', error);
            })
        }else{
            employeeService.create(employee)
            .then(response=>{
                console.log('Employee data added successfully', response.data);
                navigate('/');
            })
            .catch(error=>{
                console.log('Something went wrong',error);
            });
        }

    }

    useEffect(()=>{
        if(id){
            employeeService.get(id)
            .then(employee =>{
                setName(employee.data.name);
                setDepartment(employee.data.department);
                setLocation(employee.data.location);
            })
            .catch(error =>{
                console.log('Something went wrong', error);
            });
        }
    }, [])

    return ( 
        <div className="container">
            <h1>Add New Employee</h1>
            <hr/>
            <from>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        placeholder="Enter Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form control, col-4"
                        id="department"
                        value={department}
                        onChange={(e)=>setDepartment(e.target.value)}
                        placeholder="Enter department"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e)=> setLocation(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e)=>saveEmployee(e)}>Save</button>
                </div>
            </from>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
     );
}
 
export default AddEmployee;
