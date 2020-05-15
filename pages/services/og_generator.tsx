import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

const OpenGraphImageGenerator: NextPage<{
  status: string
}> = ({ status }: { status: string }) => {
  return <h1>{status}</h1>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      status: 'Nothing here yet',
    },
  }
}

export default OpenGraphImageGenerator
