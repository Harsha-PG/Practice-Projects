import React from 'react'

const Cars = (props) => {
  return (
    <>
    <div>{props.head}</div>
    <img src={props.url} />
    </>
    )
}

export const Tile= (props) => {
    return(
        <>
        <h1>{props.header}</h1>
        </>
    )
}
export default Cars