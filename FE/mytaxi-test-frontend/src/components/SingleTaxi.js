import React, { Component } from "react";

 const SingleTaxi = (props) => (
      <div className="taxi-card" onClick={() => props.onHandleHover(props.id)}>
      <p>{props.state}</p>
      <p>{props.type}</p>
      <p>{props.id}</p>
      </div>
    );


export default SingleTaxi
