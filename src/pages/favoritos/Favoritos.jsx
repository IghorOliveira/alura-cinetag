import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'components/Banner/Banner'
import Titulo from 'components/Titulo/Titulo'
import Card from 'components/Cards/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {
  const {favorito} = useFavoritoContext();
  
  return (
    <>
        
        <Banner imagem='favoritos'/>
        <Titulo>
          <h1 id='99'>Meus favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {/*<Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />*/}
            {favorito.map(filme => {
              return <Card id={filme.id} titulo={filme.titulo} capa={filme.capa} />
            })}
        </section>
        
        
        
      </>
  )
}
