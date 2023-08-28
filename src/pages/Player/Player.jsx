import React, { useEffect, useState } from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner/Banner'
import Titulo from 'components/Titulo/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrado from 'pages/NaoEncontrado/NaoEncontrado'

export default function Player() {
    const [video, setVideo] = useState()
    //pegando id da URL
    const parametros = useParams();

    //old code
    //const video = listaFilmes.find(filme => {
        //return filme.id===Number(parametros.id);
    //})

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/IghorOliveira/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => setVideo(...dados))
    }, []);

    if (!video) {
        return <NaoEncontrado />
    }

  return (
    <>
        <Banner imagem='player'/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </>
  )
}
