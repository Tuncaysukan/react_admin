import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from "react-router-dom";

function UpdateProduct(props) {
    const id = useState(props.location.pathname.slice(8));
    const [data, setdata] = useState('')
    const history = useHistory();
    const updateId = async (id) => {
        let result = await fetch('http://127.0.0.1:8000/api/update/' + id)
        setdata( result.json())
   
    }
    useEffect(() => {
        if (!localStorage.getItem('UserInfo')) {
            history.push('/register')
        }
        updateId(id)
        console.log(data);
         
    }, [])
    return (

        <div className='text-center'>
            <div>
                <h1>Update Products</h1>
            </div>
             
            <div className='container text-center col-6'>
                <label htmlFor="name">Ürün Adı</label>
                <input id='name' type="text" value='' className='form-control' />
                <label htmlFor="price">Fiyat Adı</label>
                <input id='price' type="number" className='form-control' />
                <label htmlFor="desc">Ürün Açıklama</label>
                <input id='desc' type="text" className='form-control' />
                <label htmlFor="file">Ürün Resmi</label>
                <input id='file' name='file' type="file" className='form-control' />
                <button className='btn btn-primary btn-block mt-2'>Ürün Ekle</button>
            </div>
        </div>

    )
}

export default withRouter(UpdateProduct)
