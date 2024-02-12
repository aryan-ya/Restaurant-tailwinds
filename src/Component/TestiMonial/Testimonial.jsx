import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm text-primary">What our customers say</p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis delectus architecto error nesciunt,
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="mb-8">
                <div className="flex flex-col items-center gap-4 text-center shadow-lg p-4 rounded-xl bg-white">
                  <img
                    className="rounded-full w-20 h-20 mx-auto"
                    src={data.img}
                    alt=""
                  />
                  <p className="text-gray-500 text-sm">{data.text}</p>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
