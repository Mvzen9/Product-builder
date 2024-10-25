import { FC } from "react";
interface Iprops {
  imageUrl: string;
  alt: string;
  className: string;
}

const Image: FC<Iprops> = ({ imageUrl, alt, className }) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};

export default Image;
