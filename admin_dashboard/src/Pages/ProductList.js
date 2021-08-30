import React, { useState, useEffect } from 'react';
import {  Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductList() {
    //All  data
    const getData = async () => {

        let result = await fetch('http://127.0.0.1:8000/api/list');
        result = await result.json();
        setdata(result);
    }
    //Delete Data
    const deleteId = async (id) => {

        let result = await fetch('http://127.0.0.1:8000/api/delete/' + id, {
            method: 'DELETE',
        });
        result = await result.json();
        getData();
    }
    const [data, setdata] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='text-center'>
            <h1>List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>İd</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Desc</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Link to={'update/' + item.id}
                                        className='btn  btn-info'>
                                        Edit
                                    </Link>

                                    <span className='btn  btn-danger'
                                        onClick={() => deleteId(item.id)}
                                    >Delete
                                    </span>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList
