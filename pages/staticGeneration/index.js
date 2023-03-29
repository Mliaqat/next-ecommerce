import React from 'react'

function staticGeneration(props) {
  return (
    <div>{props.heading}</div>
  )
}

export async function getStaticProps() {
    return {
      props: { heading:"This is Static Genration"}, // will be passed to the page component as props
    }
  }

export default staticGeneration