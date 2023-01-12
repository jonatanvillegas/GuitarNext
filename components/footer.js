import Link from "next/link"
import styleFooter from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styleFooter.footer}>
      <div className={`contenedor ${styleFooter.contenido}`}>
            <nav className='navegacion'>
                <Link legacyBehavior href={'/'} >
                        inicio
                </Link>
                <Link legacyBehavior href={'/nosotros'} >
                        nosotros
                </Link>
                <Link legacyBehavior href={'/blog'} >
                        blog
                </Link>
                <Link legacyBehavior href={'/tienda'} >
                        tienda
                </Link>
            </nav>
            <p className={styleFooter.copyright}>Todos los derechos reservados { new Date().getFullYear()}</p>
            
      </div>
    </footer>
  )
}

export default Footer
