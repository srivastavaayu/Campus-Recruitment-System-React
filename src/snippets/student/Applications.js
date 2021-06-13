import React from "react";
import Header from "./Header";

function ApplicationStatus(props) {
  if (props.status == "BeingProcessed") {
    return (
      <span className="badge bg-warning rounded-pill">Being Processed</span>
    );
  } else if (props.status == "Rejected") {
    return <span className="badge bg-danger rounded-pill">Rejected</span>;
  } else if (props.status == "Selected") {
    return <span className="badge bg-success rounded-pill">Selected</span>;
  } else {
    return <span className="badge bg-secondary rounded-pill">Applied</span>;
  }
}

function CurrentApplications() {
  return (
    <>
      <div
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="studentViewApplication"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View Application</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form action="" className="row g-3 text-start">
                <div className="col-md-7">
                  <label className="form-label">Application Date</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
                <div className="col-md-5">
                  <label className="form-label">Application Status</label>
                  <div className="mb-3">
                    <ApplicationStatus status="BeingProcessed" />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="form-label">Company Name</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
                <div className="col-md-5">
                  <label className="form-label">Job ID</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
                <div className="col-md-7">
                  <label className="form-label">Job Title</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Job Description</label>
                  <textarea className="form-control mb-3" rows="4" disabled />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Student Username</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
                <div className="col-md-8">
                  <label className="form-label">Student Name</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
                <div className="col-md-5">
                  <label className="form-label">Student Phone Number</label>
                  <input className="form-control mb-3" type="tel" disabled />
                </div>
                <div className="col-md-7">
                  <label className="form-label">Student E-mail Address</label>
                  <input className="form-control mb-3" type="email" disabled />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Student Department</label>
                  <input className="form-control mb-3" type="text" disabled />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
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
            <th>Job ID</th>
            <th>Job Title</th>
            <th>Application Date</th>
            <th>Application Status</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Company Name</td>
            <td>Job ID</td>
            <td>Job Title</td>
            <td>Application Date</td>
            <td>Application Status</td>
            <td>View Application</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Applications() {
  return (
    <>
      <Header />
      <main>
        <div className="text-center">
          <h2 id="webpageTitle">Applications</h2>
          <hr />
          <CurrentApplications />
        </div>
      </main>
    </>
  );
}

export default Applications;
