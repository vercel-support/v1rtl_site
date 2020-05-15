import React from 'react'

const Table = (props: any) => (
  <table {...props} cellSpacing={0} cellPadding={10} border={1}>
    {props.children}
  </table>
)

export default Table
