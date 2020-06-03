import React, { ReactNode } from 'react'
import { Text } from 'drei'
import font from 'typeface-fira-code/files/fira-code-latin-300.woff'

const ResponsiveText = ({
  children,
  ...props
}: {
  children: ReactNode
} & typeof Text &
  any) => (
  <Text {...props} font={font} color="white" maxWidth={20} fontSize={0.25}>
    {children}
  </Text>
)
export default ResponsiveText
