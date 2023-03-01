import React from 'react'
import axios from 'axios'
import defaultValues from '../utils/defaultValues'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        console.log(data);
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        reset(defaultValues)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('firstName')} type="text" id='firstName' />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('lastName')} type="text" id='lastName' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="text" id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="text" id='password' />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input {...register('phone')} type="text" id='phone' />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage