import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styleCarrito from '../styles/carrito.module.css'


export default function Carrito({carrito, actualizarCantidad,eliminarProducto}) {


  const [total , setTotal] = useState(0)

  useEffect(()=>{

    const calculo = carrito.reduce( (total, producto) =>  total + (producto.cantidad * producto.precio),0)
    setTotal(calculo)
  },[carrito])
  return (
    <Layout
    title='Guitarla - Carrito'
    >
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styleCarrito.contenido}>


            <div className={styleCarrito.carrito}>
                <h2>Articulos</h2>
                {carrito.length == 0 ? 'Carrito vacio' : (
                  carrito.map(producto => (
                    <div key={producto.id} className={styleCarrito.producto}>
                        <div>
                          <Image src={producto.imagen} width={250} height={480} alt={producto.nombre}/>
                        </div>
                        <div>
                          <p className={styleCarrito.nombre}>{producto.nombre}</p>
                          <div className={styleCarrito.cantidad}>
                            <p>cantidad:</p>

                              <select onChange={e => actualizarCantidad({
                                id: producto.id,
                                cantidad: +e.target.value
                              })} className={styleCarrito.selecct} 
                              value={producto.cantidad}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                          </div>
                          <p className={styleCarrito.precio}><span>{producto.precio}</span></p>
                          <p className={styleCarrito.subtotal}>Subtotal: $ <span> {producto.precio * producto.cantidad}</span></p>
                        </div>
                        <button type='button' className={styleCarrito.eliminar} onClick={() => eliminarProducto(producto.id)}>X</button>
                    </div>
                  ))
                )}
            </div>

            <aside className={styleCarrito.resumen}>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar:${total}</p>
            </aside>
        </div>
      </main>
    </Layout>
  )
}
