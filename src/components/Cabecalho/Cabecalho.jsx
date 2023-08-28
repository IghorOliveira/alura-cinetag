import React from 'react'
import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import CabecalhoLink from 'components/CabecalhoLink/CabecalhoLink.jsx'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to='./'>
            <img src={logo} alt="Logotipo do Cinetag" />
        </Link>
        <nav>
          <CabecalhoLink url='./'> 
            Home
          </CabecalhoLink>  
          <CabecalhoLink url='./Favoritos'> 
            Favoritos
          </CabecalhoLink>  
        </nav>
    </header>
  )
}
