import { useState } from "react"
import Layout from "../../components/layout"
import Image from "next/image"
import styleGuitarra from '../../styles/guitarras.module.css'

function Guitarra({guitarra, agregarCarrito}) {

  
  const [cantidad, setCantidad] = useState(0)
  const {nombre, imagen, descripcion, precio,} = guitarra[0].attributes

  const hamdleSubmit = e => {
    e.preventDefault()
    if (cantidad < 1) {
      alert('tiene que escoger un numero')
      return
    }
    //construis un objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    //pasar la informacion al contex 
    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <Layout
      title={`Guitarla - ${nombre}`}
      description='guitarra info'
    >
      <div className={styleGuitarra.guitarra}>
        <Image src={imagen.data.attributes.url} width={400} height={200} alt={`guitarra ${nombre}`}/>

        <div className={styleGuitarra.contenido}>
          <h3>{nombre}</h3>
          <p className={styleGuitarra.descripcion}>{descripcion}</p>
          <p className={styleGuitarra.precio}>${precio}</p>

          <form onSubmit={hamdleSubmit} className={styleGuitarra.formulario} >
            <label htmlFor="cantidad"> Cantidad</label>

            <select onChange={e => setCantidad(+e.target.value)} id="cantidad">
              <option value="0">--seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value='Agregar al carrito' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Guitarra

export async function getStaticPaths(){ //es necesaria sobre todo cuando estas usando routing dinamico 

  const respuesta = await fetch(`${process.env.Url_api}/guitarras`)
  const { data } = await respuesta.json()

  console.log(data)

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {

    paths,
    fallback: false //cuando el usuario realiza una busqueda next crea automaticamente un apagina de error 404, el valor es true tendrias que validar ese error    
  }
}


export async function getStaticProps({ params: { url } }) {//getServerSideProps se optiene un prop (data)

  const respuesta = await fetch(`${process.env.Url_api}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json()

  return {
    props: {
      guitarra
    }
  }
}
/*
export async function getServerSideProps({ query: {url}}){//getServerSideProps se optiene un prop (data)

  const respuesta = await fetch(`${process.env.Url_api}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json()

  return {
    props: {
      guitarra
    }
  }
}*/