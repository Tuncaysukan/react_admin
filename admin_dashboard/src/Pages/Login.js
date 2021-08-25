import React, {useState , useEffect} from 'react';
import {useHistory} from "react-router-dom";

function Login() {

    const history=useHistory();
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    let  login= async()=>{
        let data={name,password}
        let result=await fetch('http://127.0.0.1:8000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(data)
            
        }).then((result) => {
            localStorage.setItem('UserInfo',JSON.stringify(data));
            
          
        }).catch((err) => {
            console.log(err);
        });;
        
    }
    useEffect(() => {
        if (localStorage.getItem('UserInfo')) {
            history.push('/add')
        }else{
            login();

        }
    }, [])
    return (
        <div>
            <div className='mr-auto ml-auto text-center col-sm-6 center'>
            <h1 className='font-weight-bold text-danger '>Login </h1>
            <label htmlFor="Email">Email </label>
            <input type="email" id='Email' value={name} onChange={e=>{setname(e.target.value)}} name='Email' className='form-control text-center' />
            <label htmlFor="password">Şifre </label>
            <input type="password" id='password' value={password} onChange={e=>{setpassword(e.target.value)}} name='password' placeholder='Şifre' className='form-control text-center' />
            
            <button onClick={login} className='btn btn-primary mt-4 btn-block'>Kaydet</button>
        </div>
        </div>
    )
}

export default Login
