import React from "react";

export default function CartWidget({items}) {
  return (
      <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="28.000000pt"
      height="21.000000pt"
      viewBox="0 0 900.000000 1218.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1218.000000) scale(0.100000,-0.100000)"
        fill="#086A87"
        stroke="none"
      >
        <path d="M5920 12167 c-228 -52 -421 -312 -701 -942 -51 -115 -258 -541 -459 -945 -202 -404 -532 -1069 -735 -1477 l-368 -743 -1426 -2 -1426 -3 -69 -33 c-50 -23 -89 -53 -145 -110 -171 -172 -304 -425 -486 -927 -92 -254 -110 -328 -102 -414 11 -130 74 -204 278 -326 191 -113 272 -201 292 -315 4 -19 27 -213 52 -430 24 -217 76 -673 115 -1012 38 -340 102 -896 140 -1235 39 -340 91 -796 116 -1013 24 -217 67 -593 95 -835 55 -492 62 -537 90 -649 107 -420 366 -654 809 -733 101 -17 264 -18 4340 -18 4438 0 4329 -1 4535 41 408 84 636 301 719 684 9 41 106 795 216 1675 455 3635 428 3427 469 3519 25 57 94 117 246 218 72 47 150 107 173 132 229 249 99 719 -387 1401 -132 186 -223 269 -356 324 -157 66 -100 63 -1478 61 l-1247 -1 -726 1458 c-400 802 -771 1555 -826 1673 -213 461 -349 690 -493 835 -126 126 -245 171 -357 133 -62 -22 -206 -118 -252 -168 -200 -222 -157 -678 127 -1350 151 -357 352 -740 716 -1365 99 -169 235 -426 387 -734 129 -261 233 -476 231 -478 -2 -1 -720 -2 -1595 -1 l-1591 3 486 975 c742 1491 921 1858 954 1950 34 96 81 285 100 405 17 103 18 394 2 461 -36 150 -106 251 -205 294 -64 28 -178 35 -258 17z" />
      </g>
    </svg>
    {items}
    </>
  );
}
