import React from 'react'

function Contact() {
  return (
    <React.Fragment>
      <section className="text-white" style={{ backgroundColor: '#1738a1' }}>
        <div className="container my-5">
          <div className="row">
            <div className="col bg-white text-dark mt-5 rounded-4 p-5">
              <p className="mb-5" style={{ fontSize: '1.2em' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <h1 className="fw-bold mb-4">Prêt à parler ?</h1>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary text-white border-0"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                  style={{ backgroundColor: '#34c1f4' }}
                >
                  Nous contacter
                </button>
              </form>
            </div>
            <div className="col p-5">
              <p className="mb-5 fw-bold" style={{ fontSize: '2.5em' }}>
                Nous travaillons avec des leaders ambitieux
              </p>
              <div className="mt-5 ">
                <img
                  src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/edb0e79e9f605a12a2045f4a/fdg-min.jpg"
                  alt="1"
                  className="w-100 h-100 rounded-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact
