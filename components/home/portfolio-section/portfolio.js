import { useRef, useState } from "react";
import { gsap } from "gsap";

const getZIndex = (index) => {
  switch (index) {
    case 0:
      return 100;
    case 1:
      return 99;
    case 2:
      return 98;
    case 3:
      return 97;
    case 4:
      return 96;
  }
};
const getTranslate = (index) => {
  switch (index) {
    case 0:
      return -9;
    case 1:
      return -18;
    case 2:
      return -27;
    case 3:
      return -36;
    case 4:
      return -45;
  }
};
const getTranslate3D = (index) => {
  switch (index) {
    case 0:
      return -15;
    case 1:
      return -30;
    case 2:
      return -45;
    case 3:
      return -60;
    case 4:
      return -75;
  }
};
const getScale = (index) => {
  switch (index) {
    case 0:
      return 0.9;
    case 1:
      return 0.84;
    case 2:
      return 0.76;
    case 3:
      return 0.68;
    case 4:
      return 0.6;
  }
};

const CARD_DATA = [
  {
    id: 1,
    content: "Hello World 1",
    bgColor: "bg-invoke-blue",
  },
  {
    id: 2,
    content: "Hello World 2",
    bgColor: "bg-invoke-brown",
  },
  {
    id: 3,
    content: "Hello World 3",
    bgColor: "bg-invoke-maroon",
  },
  {
    id: 4,
    content: "Hello World 4",
    bgColor: "bg-invoke-decoris",
  },
  {
    id: 5,
    content: "Hello World 5",
    bgColor: "bg-invoke-meniaga",
  },
];

export default function Portfolio() {
  const awardsRef = useRef();
  const childRefs = useRef([]);
  const [cardArr, setCardArr] = useState(CARD_DATA);

  const handleCardOnClick = (item) => {
    if (item.id === cardArr[0].id) {
      return;
    }
    setCardArr((prev) => {
      const filterCard = prev.filter((el) => el.id !== item.id);
      return [item, ...filterCard];
    });
  };

  return (
    <div
      className="relative mt-56 py-4"
      style={{
        perspective: 1000,
      }}
      ref={awardsRef}
    >
      {cardArr.map((item, index) => (
        <div
          key={`cardstack-#${index}`}
          ref={(el) => (childRefs.current[item.id - 1] = el)}
          className={`box absolute top-4 h-[80vh] w-full rounded-xl p-8 ${item.bgColor}`}
          onMouseEnter={() => {
            if (index === 0) {
              return;
            }
            gsap.to(childRefs.current[item.id - 1], {
              transform: `translate(0%, ${
                getTranslate(index) - 4.5
              }%) translate3d(0px, 0px, ${getTranslate3D(
                index
              )}px) scale(${getScale(index)}, ${getScale(index)})`,
              cursor: "pointer",
              duration: 0.3,
            });
          }}
          onMouseLeave={() => {
            if (index === 0) {
              return;
            }

            gsap.to(childRefs.current[item.id - 1], {
              transform: `translate(0%, ${getTranslate(
                index
              )}%) translate3d(0px, 0px, ${getTranslate3D(
                index
              )}px) scale(${getScale(index)}, ${getScale(index)})`,
              duration: 0.3,
            });
          }}
          onClick={() => handleCardOnClick(item)}
          style={{
            zIndex: getZIndex(index),
            translate: "none",
            rotate: "none",
            scale: "none",
            transformOrigin: "50% 50%",
            transform: `translate(0%, ${getTranslate(
              index
            )}%) translate3d(0px, 0px, ${getTranslate3D(
              index
            )}px) scale(${getScale(index)}, ${getScale(index)})`,
          }}
        >
          <div className="absolute -top-6 right-2 flex h-8 w-20 items-center justify-center rounded-md bg-black">
            <p className="font-bold text-white">{item.id}</p>
          </div>
          <h1 className="text-7xl">{item.content}</h1>
        </div>
      ))}
    </div>
  );
}
