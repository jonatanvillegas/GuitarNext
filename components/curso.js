import React from 'react'
import Image from 'next/image'
import styleCurso from '../styles/curso.module.css'

export default function Curso({curso}) {

const {titulo, contenido, imagen} = curso.attributes
  return (
    <section className={`curso ${styleCurso.curso}`}>
       <style jsx>{`
        .curso{
            background-image: linear-gradient( to right , rgb(0 0 0 / .65) ,rgb(0 0 0/ .7)), url(${imagen.data.attributes.url})
          }
      `}</style>
      <div className={`contenedor ${styleCurso.grid}`}>
        <div className={styleCurso.contenido}>
            <h2 className='heading'>{titulo}</h2>
            <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}
