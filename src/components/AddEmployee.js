import React from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {


    const [employee, setEmployee] = React.useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    })

    const navigate = useNavigate();


    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({
            ...employee,
            [e.target.name]: value
        }
        );


    };

    const saveEmployee = (e) => {
        e.preventDefault();                        //stoping the default behaviour of the form which redirect
        EmployeeService.saveEmployee(employee)     //calling the saveEmployee method from the EmployeeService
            .then((response) => {
                console.log(response);

                navigate("/employeesList");        //redirecting to the employees page after saving the employee
            })
            .catch((error) => {
                console.log(error);

            });
        //employee thsi odject 

    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });
    }


    return (
        <div className='flex max-w-2xl shadow border-b mx-auto'>
            <div className="px-8 py-8">
                <div className='font-thin text-2xl tracking-wider' >
                    <h1>Add New Employee</h1>
                </div>
                <div className='item-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Fisrt Name</label>
                    <input type="text" name='firstName' value={employee.firstName}
                        onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>

                </div>
                <div className='item-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input type="text" name='lastName' value={employee.lastName}
                        onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>

                </div>
                <div className='item-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input type="email" name='emailId' value={employee.emailId}
                        onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>

                </div>
                <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button onClick={saveEmployee} className="text-white font-semibold py-2 px-4 rounded bg-green-400  hover:bg-green-700">Save</button>
                    <button
                    onClick={reset}
                     className="text-white font-semibold py-2 px-4 rounded bg-red-400  hover:bg-red-700">Clear</button>
                </div>
            </div>
        </div>

    )
}

export default AddEmployee