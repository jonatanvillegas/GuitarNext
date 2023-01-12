import Layout from "../components/layout"
import Image from "next/image"
import styleNosotros from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <>
      <Layout
        title="Nosotro"
        description="sobre nosotros"
      >
          <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styleNosotros.contenido}>
                <Image src={'/img/nosotros.jpg'} width={600} height={400} alt='imagen de nosotros'/>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quo ipsum accusantium praesentium nostrum quidem cum? Sequi cupiditate illo esse quo, sapiente molestias, totam facilis non aspernatur ad expedita vero!
                Inventore nam suscipit aliquid ad asperiores, temporibus praesentium quisquam, blanditiis dolor provident, totam tempora assumenda nesciunt ducimus enim. Magni accusamus ab veritatis tempore aliquam alias enim dolorum pariatur qui suscipit!
                sequuntur nobis expedita labore ipsa eligendi porro dolor libero sed, eos sapiente necessitatibus cum, quas quo ex maiores saepe perspiciatis hic rem sunt tenetur voluptate. Temporibus architecto ea voluptatibus a.</p>
              </div>
            </div>
          </main>
      </Layout>
    </>
  )
}

export default Nosotros
