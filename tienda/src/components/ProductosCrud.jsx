import React from 'react'

function ProductosCrud() {
    const [nombreProducto, setNombreProducto] = React.useState("")
    const [descripcionProducto, setDescripcionProducto] = React.useState("")
    const [precioProducto, setPrecioProducto] = React.useState(0)
    const [cantidadDiponibleProducto, setCantidadDiponibleProducto] = React.useState(0)

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

    async function cargarProductos() {
        const obj = {
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            precio: precioProducto,
            cantidad_disponible: cantidadDiponibleProducto
        }
    }

  return (
    <div>
        <label htmlFor="">Nombre</label>
        <input value={nombreProducto} onChange={nombre} type="text"/>
        <br />
        <br />
        <label htmlFor="">Descripcion</label>
        <input value={descripcionProducto} onChange={descripcion} type="text"/>
        <br />
        <br />
        <label htmlFor="">Precio</label>
        <input value={precioProducto} onChange={precio} type="number"/>
        <br />
        <br />
        <label htmlFor="">Cantidad Disponible</label>
        <input value={cantidadDiponibleProducto} onChange={cantidadDisponible} type="number"/>
        <br />
        <br />
        <button onClick={cargarProductos}>Crear Productos</button>
    </div>
  )
}

export default ProductosCrud