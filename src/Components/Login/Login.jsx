import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Delete = (userToken) => {
    
    const { id } = useParams();

    const userTokenValue = userToken.userToken;

    const [details, setDetails] = useState([]);

    const getEmployeeDetails = async (id) => {
        try {
            const response = await axios.get(`https://localhost:7173/api/Employee/GetEmployeeById/${id}`, {
                headers: {
                    Authorization: `Bearer ${userTokenValue}`,
                }
            });

            if (response.status === 200) {
                console.log('Employee Details:', response.data);
                setDetails(response.data);
            } else {
                console.log('Failed to fetch employee details');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteEmployee = async (id, details) => {
        try {
            const response = await fetch(`https://localhost:7173/api/Employee/DeleteEmployeeMaster/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${userTokenValue}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            if (response.status === 200) {
                console.log('Employee deleted');
            } else {
                console.log('Failed to delete employee');
            }
        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        getEmployeeDetails(id);
    }, [id]);

    return (
        <>
            <div>Are you sure you want to delete the details?</div>
            <button className='btn btn-danger' onClick={() => deleteEmployee(id, details)}>Delete</button>
        </>
    );
}