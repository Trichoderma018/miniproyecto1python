import React, { useEffect } from 'react'
import ProductosServices from '../services/ProductosServices'
import GetProducts from '../services/GetProducts'
import PutProductos from '../services/PutProductos'
import DeleteProductos from '../services/DeleteProductos'

function ProductosCrud() {
    const [nombreProducto, setNombreProducto] = React.useState("")
    const [descripcionProducto, setDescripcionProducto] = React.useState("")
    const [precioProducto, setPrecioProducto] = React.useState(0)
    const [cantidadDiponibleProducto, setCantidadDiponibleProducto] = React.useState(0)

    const [productos, setProductos] = React.useState([])
    const [editMode, setEditMode] = React.useState(false)
    const [currentProductId, setCurrentProductId] = React.useState(null)

    function nombre(e) {
        setNombreProducto(e.target.value)
    }   
    function descripcion(e) {
        setDescripcionProducto(e.target.value)
    }
    function precio(e) {
        setPrecioProducto(e.target.value)
    }
    function cantidadDisponible(e) {
        setCantidadDiponibleProducto(e.target.value)
    }

    useEffect(() => {
        obtenerProductos()
    }, [])

   async function obtenerProductos() {
       try {
           const productos = await GetProducts();
           console.log("Productos obtenidos:", productos);
       } catch (error) {
           console.error("Error obteniendo productos:", error);
       }
   }

    async function agregarProducto() {
       const obj = {
           nombre: nombreProducto,
           descripcion: descripcionProducto,
           precio: precioProducto,
           cantidad_disponible: cantidadDiponibleProducto
       }
       const respuestaServer = await ProductosServices(obj)
           console.log(respuestaServer)
    }

    async function actualizarProducto() {
        try {
            const productoActualizado = {
                nombre: nombreProducto,
                descripcion: descripcionProducto,
                precio: precioProducto,
                cantidad_disponible: cantidadDisponibleProducto
            }
            
            await PutProductos(currentProductId, productoActualizado)
            limpiarFormulario()
            setEditMode(false)
            setCurrentProductId(null)
            obtenerProductos() // Refresh the list
        } catch (error) {
            console.error("Error al actualizar producto:", error)
        }
    }

    async function eliminarProducto(id) {
        if (window.confirm("¿Está seguro que desea eliminar este producto?")) {
            try {
                await DeleteProductos(id)
                obtenerProductos() // Refresh the list
            } catch (error) {
                console.error("Error al eliminar producto:", error)
            }
        }
    }

    function editarProducto(producto) {
        setNombreProducto(producto.nombre)
        setDescripcionProducto(producto.descripcion)
        setPrecioProducto(producto.precio)
        setCantidadDiponibleProducto(producto.cantidad_disponible)
        setCurrentProductId(producto.id)
        setEditMode(true)
    }
    
    // Reset form fields
    function limpiarFormulario() {
        setNombreProducto("")
        setDescripcionProducto("")
        setPrecioProducto(0)
        setCantidadDiponibleProducto(0)
        setEditMode(false)
        setCurrentProductId(null)
    }
    
    // Handle form submission based on mode
    function handleSubmit() {
        if (editMode) {
            actualizarProducto()
        } else {
            agregarProducto()
        }
    }

  return (
     <div>
            <h2>{editMode ? 'Editar Producto' : 'Crear Nuevo Producto'}</h2>
            <div className="formulario">
                <div className="campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        id="nombre"
                        value={nombreProducto} 
                        onChange={nombre} 
                        type="text"
                    />
                </div>
                
                <div className="campo">
                    <label htmlFor="descripcion">Descripción</label>
                    <input 
                        id="descripcion"
                        value={descripcionProducto} 
                        onChange={descripcion} 
                        type="text"
                    />
                </div>
                
                <div className="campo">
                    <label htmlFor="precio">Precio</label>
                    <input 
                        id="precio"
                        value={precioProducto} 
                        onChange={precio} 
                        type="number"
                    />
                </div>
                
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad Disponible</label>
                    <input 
                        id="cantidad"
                        value={cantidadDiponibleProducto} 
                        onChange={cantidadDisponible} 
                        type="number"
                    />
                </div>
                
                <div className="botones">
                    <button 
                        onClick={handleSubmit}
                        className="btn-primary"
                    >
                        {editMode ? 'Actualizar' : 'Crear'} Producto
                    </button>
                    
                    {editMode && (
                        <button 
                            onClick={limpiarFormulario}
                            className="btn-secondary"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </div>
            
            <h2>Lista de Productos</h2>
            <table className="tabla-productos">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Disponible</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.cantidad_disponible}</td>
                            <td>
                                <button 
                                    onClick={() => editarProducto(producto)}
                                    className="btn-edit"
                                >
                                    Editar
                                </button>
                                <button 
                                    onClick={() => eliminarProducto(producto.id)}
                                    className="btn-delete"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default ProductosCrud