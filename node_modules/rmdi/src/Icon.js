import React from 'react'
import * as Icons from './index'

const Icon = ({ name, ...props }) => {
  const Component = Icons[name]
  if (!Component) return false
  return <Component {...props} />
}

Icon.displayName = 'Icon'

export default Icon