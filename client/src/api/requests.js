
import { BASE_URL } from "./base_url";
import axios from "axios";

//get all authors
export const getAllAuthors = async () => {
    let globalData;
    await axios.get(`${BASE_URL}/authors`)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}

//get author by id
export const getAuthorById = async (id) => {
    let globalData;
    await axios.get(`${BASE_URL}/authors/${id}`)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}
//delete author by id
export const deleteAuthorById = async (id) => {
    let globalData;
    await axios.delete(`${BASE_URL}/authors/${id}`)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}

//update author
export const updateAuthor = async (id, data) => {
    let globalData;
    await axios.put(`${BASE_URL}/authors/${id}`, data)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}


