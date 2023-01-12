import Link from "next/link"
import Image from "next/image"
import FormatearFecha from '../utils/helpers'
import StyleBlog from '../styles/blog.module.css'

function ListadoPosts({post}) {

    const {contenido,imagen,titulo,url,publishedAt
    } = post
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} width={400} height={300} alt={`post ${titulo}`}/>

      <div className={StyleBlog.contenido}>
        <h3>{titulo}</h3>
        <p className={StyleBlog.fecha}>{FormatearFecha(publishedAt)
}</p>
        <p className={StyleBlog.resumen}>{contenido}</p>
        <Link legacyBehavior href={`/blog/${url}`}>
            <a className={StyleBlog.enlace}>
                Leer Post
            </a>
        </Link>
      </div>
    </article>
  )
}

export default ListadoPosts
