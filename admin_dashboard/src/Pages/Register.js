import React, { useState ,useEffect} from 'react';
import {useHistory} from "react-router-dom";


function Register() {
useEffect(() => {
    if (localStorage.getItem('UserInfo')) {
        history.push('/add')
    }
}, [])
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const history=useHistory();

    const InputValue = async () => {
        let data = { name, password, email };
        let result = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        result = await result.json();
        localStorage.setItem('UserInfo',JSON.stringify(result));
        history.push('/add');
        window.location.reload();

    }


    return (

        <div className='mr-auto ml-auto text-center col-sm-6 center'>
            <h1 className='font-weight-bold text-danger '>Register Form</h1>
            <label htmlFor="name">Kullanıcı Adı</label>
            <input type="text" id='name' value={name} onChange={e => setname(e.target.value)} name='name' placeholder='Kullanıcı Adı' className='form-control text-center' />
            <label htmlFor="password">Şifre </label>
            <input type="password" id='password' value={password} onChange={e => setpassword(e.target.value)} name='password' placeholder='Şifre' className='form-control text-center' />
            <label htmlFor="Email">Email </label>
            <input type="email" id='Email' value={email} onChange={e => setemail(e.target.value)} name='Email' className='form-control text-center' />
            <button onClick={InputValue} className='btn btn-primary mt-4 btn-block'>Kaydet</button>
        </div>
    )
}

export default Register
