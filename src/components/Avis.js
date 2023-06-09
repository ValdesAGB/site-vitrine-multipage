import React from 'react'
import { AvisClients } from '../data'

function Avis() {
  const path = window.location.pathname

  return (
    <React.Fragment>
      <section>
        <div className=" row justify-content-center my-5">
          <div className="row col-md-8 text-center">
            <h1 className="fw-bold">Comment nous aidons les gens</h1>
            <p className=" my-2">
              Avec des économies sérieuses, une application en ligne
              transparente et des avantages communautaires uniques, nos membres
              ont beaucoup à dire sur nos prêts !
            </p>
          </div>

          <div className="row col-12 col-md-10 ">
            {path !== '/'
              ? AvisClients.map(({ id, name, cover }) => (
                  <div
                    className="card col-md-6 col-xl-4 col-12 border-0 my-4 my-md-0"
                    key={id}
                  >
                    <div
                      className="card-body  mx-md-2  rounded-4"
                      style={{ backgroundColor: '#34c1f4' }}
                    >
                      <p className="card-text p-4 text-white">
                        L'article évident est arrivé express les hommes les plus
                        élevés ont fait le garçon. Maîtresse sensée le suis tout
                        à fait. Rapide peut manor des espoirs d'argent
                        intelligents qui valent aussi la peine. Confort produire
                        mari garçon elle avait l'ouïe.
                      </p>
                    </div>

                    <div className="row align-items-center my-2">
                      <div className="col-4 ">
                        <img
                          src={cover}
                          alt="1"
                          className="w-100 "
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            border: 'solid 5px #34c1f4',
                          }}
                        />
                      </div>
                      <h6 className="card-subtitle mb-2  col ">{name}</h6>
                    </div>
                  </div>
                ))
              : AvisClients.slice(0, 3).map(({ id, name, cover }) => (
                  <div
                    className="card col-md-6 col-xl-4 col-12 border-0 my-4 my-md-0"
                    key={id}
                  >
                    <div
                      className="card-body  mx-md-2  rounded-4"
                      style={{ backgroundColor: '#34c1f4' }}
                    >
                      <p className="card-text p-4 text-white">
                        L'article évident est arrivé express les hommes les plus
                        élevés ont fait le garçon. Maîtresse sensée le suis tout
                        à fait. Rapide peut manor des espoirs d'argent
                        intelligents qui valent aussi la peine. Confort produire
                        mari garçon elle avait l'ouïe.
                      </p>
                    </div>

                    <div className="row align-items-center my-2">
                      <div className="col-4 ">
                        <img
                          src={cover}
                          alt="1"
                          className="w-100 "
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            border: 'solid 5px #34c1f4',
                          }}
                        />
                      </div>
                      <h6 className="card-subtitle mb-2  col ">{name}</h6>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Avis
