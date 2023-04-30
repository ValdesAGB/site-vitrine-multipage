import React from 'react'
import Accueil from '../../components/Accueil'
import Discovery from '../../components/Discovery'
import APropos from '../../components/APropos'
import Avis from '../../components/Avis'
import Contact from '../../components/Contact'
import styled from 'styled-components'

function Home() {
  const DIV = styled.div`
    @media (min-width: 320px) {
      margin-top: -100px;
    }
    @media (min-width: 321px) and (max-width: 425px) {
      margin-top: -150px;
    }
  `
  return (
    <React.Fragment>
      <div className="row">
        <Accueil />
        <Discovery />
        <APropos />
        <DIV>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8">
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/7ce91c9a35b35619b7adcc0a/fddff-min.jpg"
                alt="sourire"
                className="w-100"
              />
            </div>
          </div>
        </DIV>
        <Avis />
        <Contact />
      </div>
    </React.Fragment>
  )
}

export default Home
