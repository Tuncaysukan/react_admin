import React ,{useEffect}from 'react';
import { useHistory } from "react-router-dom";

function UpdateProduct() {
    const history=useHistory();
    useEffect(() => {
        if (!localStorage.getItem('UserInfo')) {
            history.push('/register')
        }
    }, [])
    return (
        <div>
            <h1>Update Products</h1>
        </div>
    )
}

export default UpdateProduct
