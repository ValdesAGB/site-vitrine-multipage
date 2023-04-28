import React from 'react'
import Accueil from '../../components/Accueil'
import Discovery from '../../components/Discovery'
import APropos from '../../components/APropos'
import Avis from '../../components/Avis'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <React.Fragment>
      <div className="row">
        <Accueil />
        <Discovery />
        <APropos />
        <div className="row justify-content-center">
          <div className="col-8" style={{ marginTop: '-150px' }}>
            <img
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/7ce91c9a35b35619b7adcc0a/fddff-min.jpg"
              alt="sourire"
              className="w-100"
            />
          </div>
        </div>
        <Avis />
        <Contact />
      </div>
    </React.Fragment>
  )
}

export default Home
