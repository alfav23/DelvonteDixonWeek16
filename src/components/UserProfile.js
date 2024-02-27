import React from "react";
import { Col, Button } from "react-bootstrap";
import Badge from "./Badge.js";
import { useState } from "react";

function UserProfile (props) {
  const {user} = props;
  const [badgeStatus, setBadgeStatus] = useState(false);

  function handleClick() {
    console.log("button to show teams was clicked: ", badgeStatus);
    setBadgeStatus(!badgeStatus);
    console.log(badgeStatus);
  }
  return (
    <Col key={user.id} className="p-2 text-center border border-1 rounded-4 m-1">
      <img src={user.avatar} alt={user.name} className="img-fluid rounded-circle Image" />
      <h1 className="fs-4">{user.name}</h1>
      <p>{user.phone}</p>
      <Button variant="secondary" onClick={() => handleClick()}>
        Show Teams
      </Button>
      <div className={badgeStatus ? "" : "d-none"}>
        <Badge teams={user.teams} />
      </div>
    </Col>
  );
}

export default UserProfile;
