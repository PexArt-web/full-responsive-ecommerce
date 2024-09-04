import axios from "axios";

export const productCategory = async ({ params }) =>{
    const { path } = params;

    try {
        const response = await axios.get('http://localhost:4000/api/products/category/' + path)
        
        return response.data
    } catch (error) {
        throw  Error(error.message)
    }

    
}