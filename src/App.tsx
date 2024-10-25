import ProductCart from "./components/ProductCart"
import { productList } from "./data/data"


const App = () => {
  const renderProductList=productList.map(product => <ProductCart key={product.id} product={product} />)
  return (
    <main className="container mx-auto">
    <div className=" bg-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 rounded-md">
{renderProductList}
    </div>
    </main>
  )
}

export default App