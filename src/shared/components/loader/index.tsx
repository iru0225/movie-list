import { Spinner } from "./style"

const Loader = () => {  
  return(
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#D2D2D2',
      opacity: 0.75,
      zIndex: 10
    }}>
      <Spinner/>
    </div>
  )
}

export default Loader