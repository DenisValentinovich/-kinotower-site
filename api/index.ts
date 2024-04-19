import axios from "axios";

export const api = axios.create({
    baseURL: 'https://kinotower.polytech.kz/api/v1',
})
