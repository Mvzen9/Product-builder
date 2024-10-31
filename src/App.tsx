import { useState } from "react";
import ProductCart from "./components/ProductCart";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data/data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

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

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}{" "}
      </label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));
  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-500" onClick={openModal}>
        Add
      </Button>
      <div className=" bg-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Product">
      <div className="space-y-3">   {renderFormInputList}
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-500 hover:bg-indigo-800 text-white">
            Edit
          </Button>
          <Button
            type="button"
            className="bg-gray-400 hover:bg-gray-600 !text-white"
          >
            Cancel
            </Button>
            </div>
        </div>
      </Modal>
    </main>
  );
};

export default App;
