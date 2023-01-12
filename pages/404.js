import Layout from "../components/layout"
import Link from "next/link"

function Pagina404() {
  return (
    <Layout
    title="Guitarra - No encontrada"
    >
        <div>
            <h1 className="error">Pagina No encontrada</h1>

            <Link legacyBehavior href={'/'}>
                <a className="error-enlace">
                    Volver a Inicio
                </a>
            </Link>
        </div>
    </Layout>
  )
}

export default Pagina404
