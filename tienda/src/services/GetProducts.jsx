import React from 'react'

async function GetProducts() {
    try {
    const response = await fetch("http://127.0.0.1:8000/api/productos/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        throw new Error("Error obteniendo productos")
    }
    
    return await response.json()
} catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error
}
}

export default GetProducts