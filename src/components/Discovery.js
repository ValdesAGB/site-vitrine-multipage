import React from 'react'
import { advice, needed } from '../data'
import styled from 'styled-components'

function Discovery() {
  const Section = styled.section`
    background-color: #e0e5eb;
  `
  return (
    <React.Fragment>
      <Section className="py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-6 text-center">
            <h1 className="fw-bold">
              Découvrez et répondez aux besoins des clients.
            </h1>
            <h5 className="fw-light">
              La plupart des équipes cherchent à comprendre les besoins des
              clients, mais ne sont pas en mesure d'embaucher un chercheur
              dédié. Maintenant, il y a une autre option.
            </h5>
          </div>
        </div>

        <div className="row justify-content-center">
          {needed.slice(0, 2).map(({ id, title }) => (
            <div
              class="card col-4 border-0 rounded-4 m-2 p-0"
              key={id}
              style={{ backgroundColor: '#34c1f4' }}
            >
              <div class="card-body bg-white ms-3 rounded-4">
                <h5 class="card-title fw-bold">{title}</h5>
                <p class="card-text">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#" class="card-link text-dark">
                  SUITE
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8 text-center">
            <h1 className="fw-bold">
              Nous conseillons les organisations dans leurs stratégies de
              création de valeur
            </h1>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            {advice.map(({ id, icone, title }) => (
              <div class="card col mx-2 border-0 rounded-4 " key={id}>
                <div class="card-body bg-white ms-3 rounded-4  text-center">
                  <i className={`bi fs-1 ${icone}`}></i>
                  <h5 class="card-title fw-bold my-2">{title}</h5>
                  <p class="card-text my-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                  <a href="#" class="card-link text-dark">
                    SUITE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Discovery
