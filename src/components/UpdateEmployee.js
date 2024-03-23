import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployee() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({secondEmployee: {id:id,firstName: '', lastName: '', emailId: ''}});


    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id).then((response) => {
            console.log(response);
            navigate('/employeeList');
        }).catch((error) => {
            console.log(error);
        });
       
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({
            ...employee,
            [e.target.name]: value
        }
        );


    };

    useEffect(() => {
        const fetchData = async () => {
            const reponse = await EmployeeService.getEmployeeById(id);
            setEmployee(reponse.data);
        };
        fetchData();
    }, []);
    
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
    <div className="px-8 py-8">
        <div className='font-thin text-2xl tracking-wider' >
            <h1>Edit Employee</h1>
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
            <button onClick={updateEmployee} className="text-white font-semibold py-2 px-4 rounded bg-green-400  hover:bg-green-700">Update</button>
            <button
            onClick={() => navigate('/employeeList')}
             className="text-white font-semibold py-2 px-4 rounded bg-red-400  hover:bg-red-700">cancel</button>
        </div>
    </div>
</div>
  )
}

export default UpdateEmployee