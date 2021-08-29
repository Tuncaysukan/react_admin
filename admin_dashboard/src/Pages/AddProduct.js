import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


function AddProduct() {
    const history = useHistory();
    const [name, setproductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setdescription] = useState('');
    const [file, setFile] = useState('null');
    useEffect(() => {
        if (!localStorage.getItem('UserInfo')) {
            history.push('/register');

        }
    }, [])
    const productSave = async () => {

        console.log(name, price, description, file)

        let formdata = new FormData();
        formdata.append("file_path", file);
        formdata.append("name", name);
        formdata.append("description", description);
        formdata.append("price", price);
        let result = await fetch("http://127.0.0.1:8000/api/add", {

            method: 'POST',
            body: formdata
        })
    }
    return (
        <>
            <div className='text-center mb-3'>
                <h1>Add Products</h1>
            </div>
            <div className='container text-center col-6'>
                <label htmlFor="name">Ürün Adı</label>
                <input id='name' type="text" onChange={e => { setproductName(e.target.value) }} className='form-control' />
                <label htmlFor="price">Fiyat Adı</label>
                <input id='price' type="number" onChange={e => { setPrice(e.target.value) }} className='form-control' />
                <label htmlFor="desc">Ürün Açıklama</label>
                <input id='desc' type="text" onChange={e => { setdescription(e.target.value) }} className='form-control' />
                <label htmlFor="file_path">Ürün Resmi</label>
                <input id='file_path' type="file" onChange={e => { setFile(e.target.value) }} className='form-control' />
                <button onClick={productSave} className='btn btn-primary btn-block mt-2'>Ürün Ekle</button>
            </div>
        </>
    )
}

export default AddProduct
