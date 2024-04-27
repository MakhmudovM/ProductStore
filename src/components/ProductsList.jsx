import { Link } from "react-router-dom"



function ProductsList() {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="" alt="Movie"/></figure>
  <div className="card-body flex flex-col items-center justify-center">
    <h2 className="card-title">Honor</h2>
    <p>100$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductsList