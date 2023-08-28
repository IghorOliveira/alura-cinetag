import Banner from 'components/Banner/Banner'
import Card from 'components/Cards/Card'
import Titulo from 'components/Titulo/Titulo'
import React, { useEffect, useState } from 'react'
import styles from './Inicio.module.css'

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //here we are coonecting to our fake API
    fetch("https://my-json-server.typicode.com/IghorOliveira/cinetag-api/videos")
      //then we convert the data we got from the API to a JSON
      .then(resposta => resposta.json())
      //and finally we put the JSON on a State hook
      .then(dados => {
        setVideos(dados)
      })
  }, [])
  return (
      <>
        
        <Banner imagem='home'/>
        <Titulo>
          <h1 id='1'>Um lugar para guardar seus videos e filmes!</h1>
        </Titulo>
        <section className={styles.container}> 
          {videos.map(video => {
            return <Card id={video.id} titulo={video.titulo} capa={video.capa} />
          })}
        </section>  
        
        
        
      </>
  )
}
