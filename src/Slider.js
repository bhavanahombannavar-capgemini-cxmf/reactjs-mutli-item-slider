import React, { useEffect, useState } from "react";
import styles from './Slider.module.css';
import ChevronRight from "./assets/chevron_right.svg";

let poss = 0;
const Slider = ({ slides }) => {
    /* const [currentFirstItem, setCurrentFirstItem] = useState(0);
    const [currentList, setCurrentList] = useState([...slides, slides[0]]);
    const [nextItemToPush, setNextItemToPush] = useState(1); */
    // const [animateSlider, setAnimateSlider] = useState(false);
    const [showArrow, setShowSlider] = useState(false);

    let side = 1;
    let currentWidth = 0;
    let moveTo = 0;
    let totalMoved = 0;
    const nextSlide = () => {
        if (side === slides.length) {
            slides.map((sliderItem, index) => {
                let currentEle = document.querySelector("#slider" + index);
                let id = setInterval(frame, 6);
                function frame() {
                    if (poss > 0) {
                        clearInterval(id);
                    } else {
                        poss++;
                        currentEle.style.left = poss + "px";
                    }
                }
            });
            side = 1;
            currentWidth = 0;
            moveTo = 0;
            totalMoved = 0;
            return 0;
        }

        let parentDiv = document.querySelector("#slide");
        let totalWidth = parentDiv.getBoundingClientRect().width;
        // console.log(side);
        let slide1 = document.querySelector("#slider0").getBoundingClientRect().width;
        /* console.log(currentWidth);
        console.log(moveTo); */
        while (side < slides.length) {
            let slide2 = document.querySelector("#slider" + side).getBoundingClientRect().width;
            currentWidth = currentWidth ? currentWidth + slide2 : slide1 + slide2 + 30;
            /* console.log(currentWidth);
            console.log(moveTo); */
            if (currentWidth > totalWidth) {
                moveTo = totalWidth - currentWidth;
                totalMoved = totalMoved + moveTo;
                // console.log(side);
                side++;
                break;
            } else {
                currentWidth = currentWidth + 20;
                side++;
                continue;
            }
        }

        // let slide1 = document.querySelector("#slider0");
        // let slide2 = document.querySelector("#slider1");

        // let slide1Width = slide1.getBoundingClientRect().width;
        // let slide2Width = slide2.getBoundingClientRect().width;

        // console.log(slide1Width+slide2Width+30);

        // let moveTo;
        // if(slide1Width+slide2Width+30>totalWidth){
        //     moveTo =  (totalWidth-(slide1Width+slide2Width+30));
        // }

        slides.map((sliderItem, index) => {
            let currentEle = document.querySelector("#slider" + index);
            let id = setInterval(frame, 7);
            /* console.log(Math.round(moveTo));
            console.log(poss); */
            function frame() {
                if (poss <= Math.round(moveTo)) {
                    clearInterval(id);
                } else {
                    poss--;
                    currentEle.style.left = poss + "px";
                }
            }
        });

        // console.log(totalWidth);
    };

    useEffect(() => {
        let showSliderArrow = 0;
        if (slides.length > 1) {
            let totalWidthshowArrow = document.querySelector("#slide").getBoundingClientRect().width;
            // console.log("totalWidthshowArrow", totalWidthshowArrow);
            if(slides.length == 2){
                let slide1Width = document.querySelector("#slider0").getBoundingClientRect().width;
                let slide2Width = document.querySelector("#slider1").getBoundingClientRect().width;
                showSliderArrow = slide1Width+slide2Width+30;
                console.log(slide1Width, slide2Width);
                console.log(document.querySelector("#slider0").getBoundingClientRect().right, document.querySelector("#slider0").getBoundingClientRect().left);
                console.log(document.querySelector("#slider1").getBoundingClientRect().right, document.querySelector("#slider1").getBoundingClientRect().left);
                console.log("showSliderArrow", showSliderArrow);
                console.log(document.querySelector("#slider0").offsetWidth);
                console.log(document.querySelector("#slider1").offsetWidth);
                let element = document.querySelector("#slider1");
                const cssObj = window.getComputedStyle(element, null);

                let width = cssObj.getPropertyValue("width");

            console.log(width);

                if(showSliderArrow>totalWidthshowArrow){
                    setShowSlider(true);
                }
            }else  if(slides.length > 2){
                setShowSlider(true);
            }
            // setShowSlider(true);
        }
    }, []);

    return (
        <div className={styles.sliderMain} id="slide">
            <div className={styles.sliderDiv}>
                {/* onAnimationIteration={()=>setAnimateSlider(false)}> */}
                {slides.map((item, index) => {
                    return (
                        <div className={styles.SlidedContent} key={index} id={`slider${index}`}>
                            {/* <div className={animateSlider ?
                                    styles.SlidedContent.concat(" " +styles.sliderAnimation) : styles.SlidedContent} key={index}> */}
                            {item}
                        </div>
                    );
                })}
            </div>
            {showArrow && (
                <span className={styles.rightArrow}>
                    <img src={ChevronRight} onClick={() => nextSlide()} alt="Arrow Right"/>
                </span>
            )}
        </div>
    );
};
export default Slider;
