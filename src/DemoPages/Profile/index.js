import React from 'react'

function Profile() {
  return (
    <>
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Edit</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fa fa-github fa-lg" style={{ color: "#333333" }}></i>
                    <p className="mb-0">Github/user.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fa fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                    <p className="mb-0">Twitter/user.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fa fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                    <p className="mb-0">Insta/user.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fa fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                    <p className="mb-0">Facebook/user.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date of Birth</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">01/01/2000</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Qualification</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">BS Computer Science</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                    <div className="progress rounded mb-2" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                    <div className="progress rounded mb-2" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile