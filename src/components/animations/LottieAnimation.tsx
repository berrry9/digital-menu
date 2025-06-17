import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

// Simple animation data for menu interactions
const menuAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Menu Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { 
          a: 1, 
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { t: 60, s: [360] }
          ]
        },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { 
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [50, 50, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [120, 120, 100] },
            { t: 60, s: [50, 50, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [60, 60] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.6, 1, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    }
  ]
};

const addToCartAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 30,
  w: 100,
  h: 100,
  nm: "Add to Cart",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Plus",
      sr: 1,
      ks: {
        o: { 
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 10, s: [100] },
            { t: 30, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { 
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0, 0, 100] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [150, 150, 100] },
            { t: 30, s: [0, 0, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [20, 4] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 2 }
            },
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [4, 20] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 2 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ],
      ip: 0,
      op: 30,
      st: 0
    }
  ]
};

export const MenuLottieAnimation: React.FC<Omit<LottieAnimationProps, 'animationData'>> = (props) => (
  <Lottie animationData={menuAnimationData} {...props} />
);

export const AddToCartLottieAnimation: React.FC<Omit<LottieAnimationProps, 'animationData'>> = (props) => (
  <Lottie animationData={addToCartAnimationData} {...props} />
);