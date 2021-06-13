import React from "react";
import Header from "./Header";

function AllNotifications() {
  return (
    <>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Timestamp</th>
            <th>Title</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Timestamp</td>
            <td>Title</td>
            <td>Message</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Notifications() {
  return (
    <>
      <Header />
      <main>
        <div className="text-center">
          <h2 id="webpageTitle">Notifications</h2>
          <hr />
        </div>
        <AllNotifications />
      </main>
    </>
  );
}

export default Notifications;
