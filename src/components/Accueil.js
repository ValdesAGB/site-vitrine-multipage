import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Accueil() {
  const url =
    'https://img.freepik.com/free-vector/gradient-dynamic-wavy-background_52683-74595.jpg?w=740&t=st=1682666417~exp=1682667017~hmac=339c8e029d19aad934765439e0aeebf0fbc14ad9ff5d7b5fe554fe3908699eb4'
  const Section = styled.section`
     {
      background: url(${url}) no-repeat center center / cover;
      color: white;
    }
  `
  return (
    <React.Fragment>
      <Section className="py-5">
        <div className="row justify-content-end my-5">
          <div className="col-10 col-md-5 text-end me-0 me-md-5">
            <h1 className="fw-bold text-end">
              Nous aidons les entreprises à se développer en créant des sites
              Web de haute qualité
            </h1>
            <Link
              to="/nos-activit%C3%A9s"
              className="btn border-white fw-bold border border-5 rounded-5 p-1 p-md-3 text-md-end mt-3 text-white"
            >
              APPRENDRE ENCORE PLUS
            </Link>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Accueil
