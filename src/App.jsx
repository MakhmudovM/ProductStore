import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { calulateTotal } from './features/products/productSlice'
import { useDispatch } from 'react-redux'
import ProductsList from './components/ProductsList'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calulateTotal())

  },[])
  return (
    <div className='max-w-4xl mx-auto'>
      <Navbar/>
      <ProductsList/>
      <span>Total Price:</span>
      <p>{0}$</p>
    </div>
  )
}

export default App