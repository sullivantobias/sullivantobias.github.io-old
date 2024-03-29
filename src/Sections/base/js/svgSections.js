import React from "react";

export const moutainsSvg = (bcSvg, fill, fill2) => {
    return (
        <svg style={ { backgroundColor: bcSvg } } xmlns="http://www.w3.org/2000/svg" height="120"
             viewBox="0.2 0 151 27"
             preserveAspectRatio="none">
            <g transform="translate(-18.766517,-159.24846)">
                <path style={ { fill: fill2 } }
                      d="m 18.898809,169.7732 h 11.150298 v -10.20536 l 10.016369,10.01637 10.016369,10.01637 v -9.82738 h 20.032738 v -10.20536 l 20.127232,20.12723 v -9.92187 h 19.938245 v -10.01637 l 19.93824,19.93824 v -9.92187 h 19.93824 v -10.20536 l 20.12723,20.12723 v 5.19718 H 18.898809 Z"></path>
                <path style={ { fill } }
                      d="m 18.898809,171.88988 h 11.150298 v -10.20536 l 10.016368,10.01637 10.016368,10.01637 v -9.82738 h 20.032739 v -10.20536 l 20.127233,20.12723 v -9.92187 h 19.938245 v -10.01637 l 19.93824,19.93824 v -9.92187 h 19.93825 v -10.20536 l 20.12723,20.12723 v 5.19718 H 18.898809 Z"></path>
            </g>
        </svg>
    )
};

export const cloudSvg = (bcSvg, fill, rotate) => {
    return (
        <svg style={ { backgroundColor: bcSvg } } className={ rotate ? 'rotate' : '' } id="clouds"
             xmlns="http://www.w3.org/2000/svg" version="1.1" height="100"
             viewBox="0 0 100 100" preserveAspectRatio="none">
            <path style={ { fill } } d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z">
            </path>
        </svg>
    )
};