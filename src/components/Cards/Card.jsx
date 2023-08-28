import React from 'react'
import styles from './Card.module.css'
import iconeDesfavoritar from './favoritar.png'
import iconeFavoritar from './desfavoritar.png'
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';
//import iconeDesfavoritar from './favoritar.png'

export default function Card({id, titulo, capa}) {
  const {favorito, adicionarFavorito} = useFavoritoContext();
  //elegant solution on how to make a visual change
  //This element will receive a movie object we can check it against the list of favorites
  //If the element is on the list it means it will receive a black heart icon indicating it is a favorite
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`} >
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img src={icone} alt="Favoritar Filme" className={styles.favoritar} onClick={() => {adicionarFavorito({id, titulo, capa})}}/>
    </div>
  )
}
