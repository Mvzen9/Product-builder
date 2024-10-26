import {  useState } from "react";
import ProductCart from "./components/ProductCart";
import Modal from "./components/ui/Modal";
import { productList } from "./data/data";
import Button from "./components/ui/Button";

const App = () => {
  /*__________state_____________*/
  const [isOpen, setIsOpen] = useState(false);

  /*__________ Handeler ____________*/
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderProductList = productList.map((product) => (
    <ProductCart key={product.id} product={product} />
  ));
  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-500" onClick={openModal}>Add</Button>
      <div className=" bg-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 rounded-md">
        {renderProductList}
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Product">
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-500 hover:bg-indigo-800 text-white">
            Edit
          </Button>
          <Button type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black">
            Cancel
          </Button>
          </div>
      </Modal>
    </main>
  );
};

export default App;
