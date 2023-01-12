import ListadoGuitarras from '../components/listadoGuitarras'
import React from 'react'
import Layout from '../components/layout'
import styleGrid from '../styles/grid.module.css'

//cliente
function Tienda({guitarras}) {

  return (
   <Layout
   title='tienda'
   description='Tienda de guitarras'
   >
        <mai className="contenedor">
            <h1 className="heading">Nuestra coleccion</h1>

            <div className={styleGrid.grid}>
              {guitarras.map(guitarra => ( //()
                <ListadoGuitarras
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
              
              ))}
            </div>
           
        </mai>
   </Layout>
  )
}

export default Tienda

//primero se ejecuta la parte del servidor y luego la parte del cliente
//servidor
export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.Url_api}/guitarras?populate=imagen`) //consultando una api con staticProps
  const {data: guitarras} = await respuesta.json()

  return {
      props: {
       guitarras
      }
  }
}
/*export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.Url_api}/guitarras?populate=imagen`) //consultando una api con staticProps
  const {data} = await respuesta.json()

  return {
      props: {
        data
      }
  }
}*/