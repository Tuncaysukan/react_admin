import React ,{useState}from 'react';

function Register() {

    const [name, setname] = useState();
    const [password, setpassword] = useState();
    const [email, setemail] = useState();

    const InputChange=(e)=>{
        return (console.log(e.target.value));
    }
    return (

        <div className='mr-auto ml-auto text-center col-sm-6 center'>
            <h1 className='font-weight-bold text-danger '>Register Form</h1>
            <label htmlFor="name">Kullanıcı Adı</label>
            <input type="text" id='name' onChange={InputChange(setname())} name='name' placeholder='Kullanıcı Adı' className='form-control text-center' />
            <label htmlFor="password">Şifre </label>
            <input type="password" id='password' name='password' placeholder='Şifre' className='form-control text-center' />
            <label htmlFor="Email">Email </label>
            <input type="email" id='Email' name='Email' className='form-control text-center' />
  <button className='btn btn-primary mt-4 btn-block'>Kaydet</button>
        </div>
    )
}

export default Register
