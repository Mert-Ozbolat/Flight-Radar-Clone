import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Gallery = ({ data }) => {
    return (
        <div className="slider">
            <Splide>
                {data.large.map((item) => (
                    <SplideSlide>
                        <img src={item.src} alt="plane" />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Gallery;