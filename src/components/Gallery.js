import "./styles/gallery.css";
import {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';

import SpaceAppsPic from "../docs/spaceapps_pic.jpg";
import DreamscopePic from '../docs/dreamscope_pic.jpg';
import GuitarPic from '../docs/guitar.jpg';
import SiemensPic from "../docs/siemens_pic.jpg";


const items = [
    {
      src: SpaceAppsPic,
      altText: 'NASA Space Apps Hackathon October \'22',
      caption: 'Best Use of Data Award',
      key: 1
    },
    {
      src: SiemensPic,
      altText: "Siemens Team",
      caption: 'Cybersecurity Researcher',
      key: 2
    },
    {
      src: GuitarPic,
      altText: 'My Current Guitar',
      caption: 'ESP LTD EC-256FM',
      key: 3
    },
    {
      src: DreamscopePic,
      altText: 'Dreamscope Theatre',
      caption: 'Middle School Stageplay Phase',
      key: 4
    },
];

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img className="carousel-images" src={item.src} alt={item.altText} />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.altText}
            />
          </CarouselItem>
        );
    });

    return(
        <section id="gallery-section">
            <h2>Gallery</h2>
                <div id="gallery-items">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        />
                    </Carousel>
                </div>
        </section>
    )
}