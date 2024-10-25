import { FC } from "react";
import Image from "./ui/Image";
import Button from "./ui/Button";
import { IProduct } from "../interfaces";
interface Iprops {
    product:IProduct 
}
const ProductCart: FC<Iprops> = ({ product }) => {
    const { title, description, imageURL } = product;
return (
<div>
    <Image
    imageUrl={imageURL}
    alt="ProductName"
    className="rounded-md"
    />

    <h3>{title} </h3>
    <p>
   {description}
    </p>
    <div className="flex items-center my-4 space-x-2 cursor-pointer">
    <span className="w-4 h-3 bg-indigo-600 rounded-full " />
    <span className="w-4 h-3 bg-yellow-600 rounded-full  " />
    <span className="w-4 h-3 bg-red-600 rounded-full " />
    </div>
    <div className="flex items-center justify-between">
    <span className="text-blue-900">$500,000</span>

    <Image
        imageUrl="https://images.unsplash.com/photo-1517676109075-9a94d44145d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="ProductName"
        className="w-10 h-10 rounded-full cursor-pointer object-"
    />
    </div>
    <div className="flex items-center justify-between space-x-2 mt-5 ">
    <Button
                className="bg-indigo-500" width="w-full"              
>
        Edit
    </Button>
    <Button className="bg-red-500 ">Delete</Button>
    </div>
</div>
);
};

export default ProductCart;
