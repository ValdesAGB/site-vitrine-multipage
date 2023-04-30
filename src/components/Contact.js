import React from 'react'

function Contact() {
  return (
    <React.Fragment>
      <section className="text-white" style={{ backgroundColor: '#1738a1' }}>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6 bg-white order-1 border border-dark order-md-0 text-dark mt-5 mt-md-0 rounded-4 p-md-5 p-3">
              <p className="mb-5" style={{ fontSize: '1.2em' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <h1 className="fw-bold mb-4">Prêt à parler ?</h1>
              <form>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">
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
                  <label htmlFor="exampleInputPassword1" class="form-label">
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

            <div className="col-12 col-md-6 p-2 p-md-5 order-0 order-md-1 ">
              <h2 className="mb-5 fw-bold text-center text-md-start ">
                Nous travaillons avec des leaders ambitieux
              </h2>
              <div className="">
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
