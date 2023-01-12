import ListadoPosts from '../components/listadoPosts'
import Layout from '../components/layout'
import styleGrid from '../styles/grid.module.css'
function Blog({posts}) {

  console.log(posts)
  return (
    <Layout>
        <main className="contenedor">
          <h1 className="heading">Blog</h1>

          <div className={styleGrid.grid}>
            {posts?.map(post => (
              <ListadoPosts
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

export default Blog

export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.Url_api}/posts?populate=imagen`) //consultando una api con staticProps
  const {data : posts} = await respuesta.json()

  return {
      props: {
        posts
      }
  }
}