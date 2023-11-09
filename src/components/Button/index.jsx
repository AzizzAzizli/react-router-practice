import React from 'react'
// import styles from "./button.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

export const Button= (props) => {

  return (
    <button onClick={props.onClick} className={`btn btn-${props.fav?"danger":"primary"}`}>{props.btn}</button>

  )
}
