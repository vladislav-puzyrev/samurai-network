import { useEffect } from 'react'

function useSetTitle (title: string | null) {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  })
}

export default useSetTitle
