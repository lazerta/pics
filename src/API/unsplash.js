import axios from 'axios';

 export  default axios.create(
    {
        baseURL: 'https://api.unsplash.com/search/',
        headers: {
            Authorization: 'Client-ID f851d49f6683b10c6c05eb0284c029da14031592cc0e417c595c2cfc7e84a916',
        }
    }
);

