import axios from 'axios'

export const productsLoader = async () =>{
    try {
        const products = await axios.get('http://localhost:4000/api/products')
        return products.data
    } catch (error) {
        throw Error(error.message)
    }
}