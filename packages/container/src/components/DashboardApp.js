import { mount } from 'dashboard/DashboardApp' // loads remoteEntry.js file
import React, { useRef, useEffect } from 'react'


export default () => {
  const ref = useRef(null)


  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}
