import React from 'react'
import Food1 from "../../assets/biryani3.png";
import Food2 from "../../assets/biryani5.png";
import Food3 from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";

const ImageList = [
  {
     id: 1,
     image : Food1,

  },

  {
    id: 2,
    image : Food2,

 },
 {
  id: 3,
  image : Food3,

},
];

const bgImage = {
  backgroundImage : `url(${Vector})`,
  backgroundPosition : "center",
  backgroundSize :"cover",
  backgroundRepeat : "no-repeat",
  width : "100%",
  height: "100%",
}



const Hero = () => {
  const [imageId , setImageId] = React.useState(Food1);
  return (
    <div style={bgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
    ></div>
  )
}

export default Hero