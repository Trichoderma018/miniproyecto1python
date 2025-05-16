import React from 'react'

async function DeleteProductos(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error("Error eliminando productos")
        }

        return { success: true };
    } catch (error) {
        console.error("Error eliminando productos:", error);
        throw error
    }
}

export default DeleteProductos