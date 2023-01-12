import Image from "next/image"
import Link from "next/link"
import styleGuitarra from '../styles/guitarras.module.css'


function ListadoGuitarras({guitarra}) {
    const {nombre, precio, imagen, descripcion, url} = guitarra

  return (
    <div className={styleGuitarra.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={400} height={200} alt={`guitarra ${nombre}`}/>

        <div className={styleGuitarra.contenido}>
            <h3>{nombre}</h3>
            <p className={styleGuitarra.descripcion}>{descripcion}</p>
            <p className={styleGuitarra.precio}>${precio}</p>
            <Link legacyBehavior  href={`/guitarra/${url}`}>
                <a className={styleGuitarra.enlace}>
                    Ver Guitarra
                </a>
            </Link>
        </div>
    </div>
  )
}

export default ListadoGuitarras

