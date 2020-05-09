import React from 'react'

type BundlerInfoProps = {
  lang: string
  zeroConfig: boolean | 'Yes, has optional configuration'
  website: string
  installation: string
}

const BundlerInfo = ({ data }: { data: BundlerInfoProps }) => (
  <ul css={{ listStyleType: 'none' }}>
    <li>
      <span role="img" aria-label="diamond">
        💎
      </span>{' '}
      Language: {data.lang}
    </li>
    <li>
      <span role="img" aria-label="package">
        📦
      </span>{' '}
      Zero-config: {typeof data.zeroConfig === 'boolean' ? (data.zeroConfig ? 'Yes' : 'No') : data.zeroConfig}
    </li>
    <li>
      <span role="img" aria-label="globe">
        🌎
      </span>{' '}
      Website:{' '}
      <a href={data.website} target="_blank" rel="noopener noreferrer">
        {data.website}
      </a>
    </li>
    <li>
      <span role="img" aria-label="instal">
        ⬇
      </span>{' '}
      Installation: <code>{data.installation}</code>
    </li>
  </ul>
)

export default BundlerInfo
