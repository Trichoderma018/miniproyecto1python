import React from 'react'

async function ProductosServices(obj) {
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ3MDIyMzYxLCJpYXQiOjE3NDcwMTg3NjEsImp0aSI6IjdlOTBiYzkxZWJkMjRhOGI4NTFlZTI2NjUxMzk0ZGEwIiwidXNlcl9pZCI6M30.LIPSeJYIF_Y-Uyusrcg24DxtZI070oOWmuXI9aTD5Q4"
    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok){
            throw new Error("Error fetching doctores")
        }

        return await response.json()
    } catch (error) {
        console.error("Error fetching doctores:", error);
        throw error
    }
}

export default ProductosServices