import Preloader from '../components/common/Preloader/Preloader'
import React from 'react'

export function withSuspense (Component: React.ComponentType) {
  return (props: any) => (
    <React.Suspense fallback={<Preloader/>}>
      <Component {...props} />
    </React.Suspense>
  )
}
