import Layout from "../components/layout"
import ListadoPosts from "../components/listadoPosts"
import ListadoGuitarras from "../components/listadoGuitarras"
import Curso from "../components/curso"
import styleGrid from '../styles/grid.module.css'


export default function Home({guitarra,post,curso}) {

 
  return (
    <>
      <Layout
        title='inicio' 
        description=" desde inicio"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={styleGrid.grid}>
              {guitarra?.map(guitarra => ( //()
                <ListadoGuitarras
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
              
              ))}
            </div>
            
            <Curso
            curso={curso}
            />


            <h1 className="heading">Nuestra Coleccion</h1>

            <div className={styleGrid.grid}>
            {post?.map(post => (
              <ListadoPosts
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
      
  )
}

export async function getStaticProps(){
  const Urlguitarras = `${process.env.Url_api}/guitarras?populate=imagen`
  const Urlposts = `${process.env.Url_api}/posts?populate=imagen`
  const Urlcurso = `${process.env.Url_api}/curso?populate=imagen`

  const [resguitarra, respost, rescurso] = await Promise.all([
    fetch(Urlguitarras),
    fetch(Urlposts),
    fetch(Urlcurso)
  ])

  const [{data: guitarra}, {data: post}, {data: curso}] = await Promise.all([
    resguitarra.json(),
    respost.json(),
    rescurso.json()
  ])

  return{
    props:{
      guitarra,
      post,
      curso
    }
  }
}
