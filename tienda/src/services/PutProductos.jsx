import React from 'react'

async function PutProductos(id, data) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error("Error actualizando productos")
        }

        return await response.json()
    } catch (error) {
        console.error("Error actualizando productos:", error);
        throw error
    }
}

export default PutProductos