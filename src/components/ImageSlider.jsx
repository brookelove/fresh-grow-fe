import { useState, useEffect } from "react";
import img1 from "../assets/Images/Featured/1.png";
import img2 from "../assets/Images/Featured/2.png";
import img3 from "../assets/Images/Featured/3.png";
import img4 from "../assets/Images/Featured/4.png";
import "../assets/CSS/components/ImageSlider.css"

const imgArr = [img1, img2,img3,img4]
export default function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <img
                src={imgArr[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
            />
        </div>
    );
}