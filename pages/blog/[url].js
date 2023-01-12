import Layout from "../../components/layout"
import Image from "next/image"
import FormatearFecha from "../../utils/helpers"
import StyleBlog from '../../styles/blog.module.css'


function Post({post}) {
    const { titulo,contenido,imagen,publishedAt} = post[0].attributes
  return (
    <Layout
    title={`${titulo}`}
    >
        <article className={`${StyleBlog.post} ${StyleBlog['mt-3']}`}>
            <Image src={imagen.data.attributes.url} width={1000} height={800} alt={`post ${titulo}`}/>
            <div className={StyleBlog.contenido}>
                <h3>{titulo}</h3>
                <p className={StyleBlog.fecha}>{FormatearFecha(publishedAt)}</p>
                <p className={StyleBlog.texto}>{contenido}</p>
            </div>
        </article>
    </Layout>
   
  )
}

export default Post


export async function getServerSideProps({query:{ url}}){

    const respuesta = await fetch(`${process.env.Url_api}/posts?filters[url]=${url}&populate=imagen`)
    const {data : post} =  await respuesta.json()

    return{
        props: {
            post
        }
    }
}