import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollReset(props: any) {
    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [location])

  return (
    <div style={{minHeight: '80vh'}}>
      {props.children}
    </div>
  )

}
