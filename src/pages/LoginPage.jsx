import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import defaultValues from '../utils/defaultValues'
import { useState } from 'react'

const LoginPage = () => {

    const { register, handleSubmit, reset } = useForm()

    const [token, setToken] = useState()

    const submit = data => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
            })
            .catch(err => {
                console.log(err)
                localStorage.clear()
            })
        reset(defaultValues)
    }

    /* para ver los errores del axios, entra en el catch, en response y luego en data*/

    const handleClick = () =>{
        localStorage.clear()
        setToken()
    }

    if (localStorage.getItem('name')) {
        return (
            <div>
                <h2>{localStorage.getItem('name')}</h2>
                <button onClick={handleClick}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <h2>Form Login</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input {...register('password')} type="password" id='password' />
                    </div>
                    <button>Login</button>
                </form>
                <Link to='/user/register'>Go to register</Link>
            </div>
        )
    }


}

export default LoginPage