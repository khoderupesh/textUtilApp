import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&
    <>
        <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
          <div>
                <strong>{props.alert.type}</strong>: <label>{props.alert.message}</label>
            </div>          
        </div>
    </>
  )
}
