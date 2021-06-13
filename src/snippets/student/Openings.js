import React from "react";

import Header from "./Header";

function CurrentOpenings() {
  return (
    <>
      <div
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="studentViewJob"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View Job</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-start">
              <form className="row g-3">
                <div className="col-md-12">
                  <label
                    className="form-label"
                    htmlFor="studentViewJobCompanyName"
                  >
                    Company Name
                  </label>
                  <div className="input-group mb-3">
                    <input
                      id="studentViewJobCompanyName"
                      className="form-control"
                      type="text"
                      placeholder="Company Name"
                      name="CompanyName"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <label className="form-label" htmlFor="studentViewJobJobID">
                    Job ID
                  </label>
                  <div className="input-group mb-3">
                    <input
                      id="studentViewJobJobID"
                      className="form-control"
                      type="text"
                      placeholder="Job ID"
                      name="JobID"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <label
                    className="form-label"
                    htmlFor="studentViewJobJobTitle"
                  >
                    Job Title
                  </label>
                  <div className="input-group mb-3">
                    <input
                      id="studentViewJobJobTitle"
                      className="form-control"
                      type="text"
                      placeholder="Job Title"
                      name="JobTitle"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label
                    className="form-label"
                    htmlFor="studentViewJobJobDescription"
                  >
                    Job Description
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      id="studentViewJobJobDescription"
                      className="form-control"
                      type="text"
                      placeholder="Job Description"
                      name="message"
                      rows="4"
                      disabled
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Apply to this job
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>View Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Company Name</td>
            <td>Job Title</td>
            <td>View Job</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Openings() {
  return (
    <>
      <Header />
      <main>
        <div className="text-center">
          <h2 id="webpageTitle">Openings</h2>
          <hr />
          <h3 className="text-center">Current Openings</h3>
          <CurrentOpenings />
        </div>
      </main>
    </>
  );
}

export default Openings;
