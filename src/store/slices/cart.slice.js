import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../utils/getConfing";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => action.payload
    }
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer

export const getCartThunk = () => dispatch => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

    //header del token, para el get, por las rutas protegidas
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    // }

    axios.get(url, config)
        .then(res => dispatch(setCart(res.data)))
        .catch(err => console.log(err))
}