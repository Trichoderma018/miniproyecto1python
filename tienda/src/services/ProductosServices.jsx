import React from 'react'

async function ProductosServices(obj) {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok){
            throw new Error("Error fetching productos")
        }

        return await response.json()
    } catch (error) {
        console.error("Error fetching productos:", error);
        throw error
    }
}

export default ProductosServices