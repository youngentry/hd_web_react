import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "01 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 2, content: "02 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 3, content: "03 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" }
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <h2>{slide.content}</h2>
                                    <p>{slide.desc}</p>
                                    <a href={slide.link} target="_blank">VIEW MORE</a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? ' on' : ''}>{dots.content}</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;