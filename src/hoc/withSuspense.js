import Preloader from '../components/common/Preloader/Preloader'
import React from 'react'

export function withSuspense (Component) {
  return (props) => (
    <React.Suspense fallback={<Preloader/>}>
      <Component {...props}/>
    </React.Suspense>
  )
}