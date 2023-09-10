import React from "react";

export default function Event1() {
  return (
    <div
      style={{
        border: "1px solid grey",
        width: "200px",
        height: "250px",
        marginTop: "30px",
        borderRadius: 5,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <h4>Event</h4>
      <h2 style={{ fontSize: 30, color: "red" }}>Music Event</h2>
      <p>25 September 2023</p>
      <button
        style={{ marginRight: "2px", width: "90px", padding: "5px" }}
        onClick={() => {}}
      >
        Register
      </button>
    </div>
  );
}
