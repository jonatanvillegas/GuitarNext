import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/header.module.css'

function Header() {

    const router = useRouter()
  return (
    <header className={style.header}>
        <div className={`contenedor ${style.barra}`}>
            <Link legacyBehavior href={'/'}>
                <a>
                    <Image src={'/img/logo.svg'} width={300} height={40} alt='logo'/>
                </a>
            </Link>

            <nav className={style.navegacion}>
                <Link legacyBehavior href={'/'} >
                    <a className={router.pathname === '/' ? style.active : ''}>
                        inicio
                    </a>
                </Link>
                <Link legacyBehavior href={'/nosotros'} >
                    <a className={router.pathname === '/nosotros' ? style.active : ''}>
                        nosotros
                    </a>
                </Link>
                <Link legacyBehavior href={'/tienda'} >
                    <a className={router.pathname === '/tienda' ? style.active : ''}>
                        tienda
                    </a>
                </Link>
                <Link legacyBehavior href={'/blog'} >
                    <a className={router.pathname === '/blog' ? style.active : ''}>
                        blog
                    </a>
                </Link>
                <Link legacyBehavior href={'/carrito'} >
                    <a className={router.pathname === '/carrito' ? style.active : ''}>
                        <Image src={'/img/carrito.png'} width={30} height={25} alt='img carrito'/>
                    </a>
                </Link>
                
            </nav>
        </div>

    </header>
  )
}

export default Header
