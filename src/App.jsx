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
      <div className='flex items-center justify-center mt-20'>
        <span className='text-2xl text-center'>Total Price:</span>
        <p className='text-2xl ml-4'>{0}$</p>
      </div>
    </div>
  )
}

export default App