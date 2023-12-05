import React, { useState, useRef, useEffect } from 'react';
import './ScreenThree.css';
import ButtonDrawGames from '../../../components/ButtonDrawGame/ButtonDrawGames'
import { Link } from 'react-router-dom';
Link

const ScreenThree = () => {
    const containerRef = useRef(null);
    const colorInputRef = useRef(null);
    const sizeInputRef = useRef(null);
    const groupRef = useRef(null);

    const [currentColor, setCurrentColor] = useState('#0075ff');
    const [currentSize, setCurrentSize] = useState(5);
    const [svgWidth, setSvgWidth] = useState(500);
    const [svgHeight, setSvgHeight] = useState(500);
    const [initialX, setInitialX] = useState(0);
    const [initialY, setInitialY] = useState(0);
    const [circles, setCircles] = useState([]);

    const handleColorChange = () => {
        setCurrentColor(colorInputRef.current.value);
    };

    const handleSizeChange = () => {
        setCurrentSize(sizeInputRef.current.value);
    };

    const handleMouseDown = (e) => {
        setInitialX(containerRef.current.clientWidth / svgWidth);
        setInitialY(containerRef.current.clientHeight / svgHeight);

        const mouseX = e.clientX || e.touches[0].clientX;
        const mouseY = e.clientY || e.touches[0].clientY;
        const relativeX = mouseX - containerRef.current.getBoundingClientRect().left;
        const relativeY = mouseY - containerRef.current.getBoundingClientRect().top;

        setCircles((prevCircles) => [
            ...prevCircles,
            {
                cx: relativeX / initialX,
                cy: relativeY / initialY,
                fill: currentColor,
                r: currentSize,
            },
        ]);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const mouseX = e.clientX || e.touches[0].clientX;
        const mouseY = e.clientY || e.touches[0].clientY;
        const relativeX = mouseX - containerRef.current.getBoundingClientRect().left;
        const relativeY = mouseY - containerRef.current.getBoundingClientRect().top;

        setCircles((prevCircles) => [
            ...prevCircles,
            {
                cx: relativeX / initialX,
                cy: relativeY / initialY,
                fill: currentColor,
                r: currentSize,
            },
        ]);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        containerRef.current.addEventListener('mousedown', handleMouseDown);
        return () => {
            containerRef.current.removeEventListener('mousedown', handleMouseDown);
        };
    }, [currentColor, currentSize, initialX, initialY]);

    useEffect(() => {
        setInitialX(containerRef.current.clientWidth / svgWidth);
        setInitialY(containerRef.current.clientHeight / svgHeight);
    }, [svgWidth, svgHeight]);

    return (
        <>

            <div className="screen-2-game-1">
                <Link to="/jogo1tela2"><img className='back-game-draw' src="../public/icon-button-left.svg" alt="" /></Link>
                <h1>Cachinhos crespos</h1>
                <div className="title-game1">

                </div>
                <div className="container-draw2" ref={containerRef}>


                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="395.000000pt" height="404.000000pt" viewBox="0 0 395.000000 404.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g id="group" ref={groupRef}>
                            {circles.map((circle, index) => (
                                <circle key={index} cx={circle.cx} cy={circle.cy} fill={circle.fill} r={circle.r} />
                            ))}
                        </g>

                        <g transform="translate(0.000000,404.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">



                            <path d="M1485 3466 c-94 -21 -134 -41 -146 -73 -8 -22 -7 -34 6 -56 l17 -28
-29 7 c-30 7 -62 23 -103 51 l-25 17 20 -23 c57 -68 182 -88 325 -52 135 33
178 34 255 6 19 -7 19 -6 -1 8 -42 32 -109 39 -203 22 -47 -8 -96 -18 -109
-21 -18 -5 -21 -3 -16 10 6 15 3 15 -30 -1 -34 -16 -40 -16 -64 -2 -42 23 -38
69 8 91 90 44 305 48 413 8 100 -38 147 -94 147 -177 -1 -49 -48 -211 -50
-168 -1 39 -31 104 -61 132 -82 75 -240 78 -383 7 -74 -37 -109 -41 -169 -20
-50 18 -79 46 -74 68 3 10 1 16 -4 12 -31 -19 7 -65 83 -100 l33 -15 -49 6
c-58 8 -111 40 -127 76 -8 21 -7 33 5 58 9 17 14 31 12 31 -8 0 -36 -58 -36
-74 0 -8 13 -30 30 -49 30 -34 106 -67 159 -67 24 -1 24 -2 7 -12 -66 -38
-147 -27 -195 27 -28 32 -31 43 -31 99 0 105 54 164 162 176 54 5 59 8 35 14
-38 11 -104 0 -144 -25 -54 -34 -77 -82 -78 -164 l0 -70 -41 3 c-77 7 -172
-66 -215 -162 -29 -66 -36 -160 -16 -207 l15 -36 -92 23 c-110 28 -177 30
-232 5 -51 -23 -70 -49 -85 -117 -11 -47 -9 -60 11 -122 25 -78 96 -170 150
-192 36 -15 38 -25 7 -45 -40 -26 -71 -94 -71 -154 0 -46 -5 -58 -32 -88 -19
-21 -34 -30 -39 -24 -10 17 -73 13 -101 -5 -14 -10 -32 -30 -40 -45 -21 -41
-18 -127 6 -167 21 -34 102 -92 129 -92 37 -1 41 -15 16 -51 -15 -21 -28 -55
-31 -85 -5 -41 -2 -55 18 -84 l24 -35 -50 -25 c-56 -28 -87 -72 -88 -122 0
-84 22 -201 46 -243 50 -85 124 -128 224 -128 34 -1 62 -2 62 -3 0 -1 -7 -19
-16 -40 -11 -27 -15 -60 -12 -115 3 -68 7 -82 33 -114 33 -41 108 -75 165 -75
39 0 108 29 128 53 12 14 17 12 43 -17 76 -87 219 -100 352 -31 87 45 106 61
123 102 l14 32 24 -24 c13 -13 35 -27 49 -30 36 -9 85 19 93 53 10 47 14 54
27 49 7 -2 45 -11 85 -18 39 -7 72 -18 72 -24 0 -5 -43 -48 -95 -94 -52 -46
-95 -89 -95 -96 0 -20 124 -75 205 -90 136 -26 297 -16 415 27 66 23 100 44
100 61 0 12 -141 138 -193 172 -36 23 -26 31 46 38 54 5 59 4 67 -17 24 -64
128 -89 184 -45 24 19 31 20 54 9 15 -6 59 -14 97 -17 67 -5 72 -4 119 28 28
19 58 50 69 72 10 20 22 37 26 37 22 0 43 -43 45 -90 1 -45 6 -56 34 -81 68
-61 165 -20 186 78 4 18 26 50 48 72 37 38 41 40 61 26 26 -18 139 -20 188 -3
90 30 149 97 149 167 0 60 -27 103 -79 127 -22 11 -40 21 -40 24 0 3 14 14 32
25 18 11 46 41 62 67 24 37 36 47 58 47 66 2 121 -63 96 -111 -28 -53 -76 -63
-108 -22 -24 31 -29 19 -5 -14 32 -46 115 -21 137 41 17 46 -41 113 -107 124
-29 5 -32 8 -32 41 0 21 -3 49 -8 65 -6 21 -5 27 7 27 40 0 107 111 107 178 0
59 -54 127 -110 139 -25 5 -26 7 -22 69 4 52 0 70 -17 99 -26 45 -26 45 5 45
73 0 144 82 144 168 0 53 -36 119 -81 149 -29 19 -56 27 -109 31 l-70 5 20 34
c31 53 46 159 32 232 -20 108 -82 176 -191 208 -68 19 -156 7 -205 -30 -55
-41 -55 -41 -39 20 24 93 -6 224 -59 256 -10 7 -27 31 -38 54 -21 48 -54 73
-107 80 -93 12 -188 -49 -214 -137 -17 -62 -29 -72 -29 -24 0 22 -9 57 -20 79
-14 27 -20 59 -20 105 0 54 -5 73 -26 107 -52 80 -151 119 -275 111 -84 -6
-184 -52 -226 -103 l-28 -33 -25 32 c-30 41 -72 69 -136 91 -65 24 -248 29
-329 11z m852 -27 c99 -23 172 -101 173 -183 l0 -39 -22 19 c-34 30 -69 50
-113 64 -22 7 -52 24 -67 38 -61 57 -182 36 -270 -46 l-48 -45 0 36 c0 110
186 193 347 156z m-56 -99 c33 -18 21 -27 -45 -32 -69 -6 -152 -39 -211 -84
-40 -30 -44 -25 -14 17 23 33 90 81 134 97 39 14 111 15 136 2z m136 -96 c26
-16 61 -48 77 -71 36 -52 58 -156 47 -225 -10 -61 -3 -68 19 -20 46 99 113
156 220 187 l55 15 -49 -5 c-41 -4 -85 -21 -169 -63 -10 -5 13 47 36 81 10 15
37 37 60 48 71 37 169 11 183 -48 4 -15 21 -38 37 -52 44 -37 67 -95 67 -170
0 -72 -18 -144 -34 -137 -6 3 -29 10 -51 17 -22 7 -41 14 -43 15 -2 1 6 20 17
43 58 113 -25 239 -139 208 -44 -11 -97 -61 -105 -99 -9 -41 18 -80 52 -76 15
2 28 9 31 16 3 11 0 11 -16 1 -53 -33 -73 44 -26 100 71 85 204 37 204 -73 0
-82 -60 -145 -152 -160 -44 -7 -104 15 -161 58 -113 86 -311 -55 -257 -183 13
-33 79 -71 121 -71 72 1 149 72 149 139 0 42 -47 91 -86 91 -27 0 -64 -24 -64
-42 0 -4 9 1 20 12 26 26 51 25 84 -1 39 -31 37 -88 -7 -136 -29 -31 -41 -37
-88 -41 -48 -4 -59 -1 -86 22 -42 35 -48 67 -24 121 27 62 87 100 158 100 47
0 56 -4 89 -36 94 -95 85 -248 -22 -355 -100 -100 -294 -103 -392 -5 -39 40
-54 66 -87 162 l-25 74 6 -75 c10 -121 61 -208 148 -252 57 -29 160 -35 226
-14 51 17 51 17 80 -8 77 -64 211 -100 293 -78 42 12 42 12 22 -54 -20 -66
-19 -120 4 -170 18 -39 65 -84 104 -97 21 -8 23 -53 3 -60 -8 -3 -22 -20 -31
-37 -20 -40 -12 -85 22 -116 l26 -24 -21 -82 c-11 -45 -18 -86 -16 -90 9 -15
22 1 28 37 10 51 55 69 109 44 57 -26 76 -128 35 -189 -38 -55 -81 -72 -166
-66 -72 6 -73 6 -82 -22 -51 -139 -175 -284 -304 -357 -150 -84 -309 -118
-551 -119 -148 -1 -182 2 -260 23 -172 44 -321 119 -413 205 -77 71 -158 198
-177 279 -7 25 -11 27 -58 27 -101 0 -177 64 -177 149 0 31 6 48 25 66 40 41
105 27 105 -23 0 -33 14 -57 28 -48 6 4 6 21 0 51 -9 43 -8 47 21 74 38 36 43
93 11 134 -11 14 -20 39 -20 56 0 32 29 71 54 71 19 0 74 64 82 96 7 26 1 98
-10 125 -5 10 1 19 16 26 20 9 28 7 51 -13 15 -13 46 -28 68 -34 115 -31 208
45 211 170 1 28 4 50 7 50 3 0 28 -7 55 -15 68 -21 171 -19 222 4 91 41 147
113 184 239 36 120 13 199 -68 238 -51 24 -143 16 -177 -16 -14 -13 -25 -28
-25 -34 0 -6 5 -3 11 7 30 51 147 64 197 22 61 -52 63 -146 4 -217 -31 -37
-114 -78 -160 -78 -49 0 -137 34 -210 82 -63 41 -70 43 -142 43 -63 0 -84 -5
-133 -29 -80 -41 -83 -52 -4 -15 96 44 153 48 222 15 30 -15 55 -31 55 -35 0
-5 34 -26 77 -47 66 -34 85 -39 142 -39 71 1 115 18 164 63 34 32 34 21 1 -35
-55 -95 -183 -162 -288 -150 -82 10 -125 26 -166 64 -71 63 -159 55 -237 -23
-24 -24 -46 -57 -50 -74 -11 -58 -26 -45 -21 18 8 112 86 177 213 176 61 0 81
-6 156 -42 48 -23 95 -42 105 -41 14 0 15 2 4 6 -8 3 -58 25 -110 50 -83 41
-102 46 -161 45 -75 0 -126 -21 -177 -73 -18 -18 -32 -28 -32 -23 0 25 -65
105 -105 130 -44 29 -75 69 -75 100 0 10 10 28 22 41 42 45 142 16 151 -45 l4
-27 2 27 c3 64 -120 107 -169 58 -22 -22 -26 -70 -10 -101 10 -18 7 -19 -45
-19 -50 0 -56 2 -65 26 -16 40 -12 67 17 125 40 77 91 110 180 116 61 4 74 2
123 -24 37 -20 62 -42 78 -69 15 -26 21 -31 16 -14 -12 44 -44 80 -97 106 -43
22 -60 26 -123 22 -61 -3 -79 -8 -116 -33 -23 -17 -56 -53 -73 -80 -26 -43
-30 -57 -29 -119 1 -69 0 -72 -30 -91 -75 -49 -133 -173 -123 -261 6 -59 47
-134 87 -161 52 -36 53 -27 2 25 -82 82 -89 181 -22 299 80 141 268 147 357
12 24 -37 27 -49 25 -118 -2 -59 2 -85 17 -114 19 -37 19 -37 -1 -48 -11 -6
-26 -8 -34 -5 -16 6 -19 -9 -4 -19 5 -3 15 -25 21 -48 15 -55 -1 -107 -43
-142 -28 -24 -38 -26 -92 -23 -34 2 -70 8 -81 12 -12 4 -5 -6 17 -26 36 -34
37 -35 18 -51 -26 -22 -25 -33 3 -57 73 -65 77 -70 77 -99 0 -37 -23 -61 -59
-61 -42 0 -62 30 -71 107 -4 37 -14 84 -23 103 l-15 35 -1 -38 c-1 -54 -22
-97 -65 -135 -42 -37 -73 -47 -123 -39 -72 12 -125 74 -144 168 -15 72 1 132
48 176 30 29 41 33 86 33 85 0 136 -46 137 -123 0 -78 -68 -157 -124 -143 -13
3 -35 17 -49 30 -15 14 -27 22 -27 17 0 -17 49 -52 81 -57 73 -10 129 53 129
147 0 51 -4 63 -31 94 -84 95 -226 58 -263 -70 -9 -29 -16 -65 -16 -79 0 -30
-7 -32 -38 -10 -33 23 -52 67 -52 122 0 82 56 131 152 133 l43 1 -40 8 c-22 5
-52 6 -66 3 -22 -4 -27 -1 -33 21 -16 63 36 156 103 183 l35 15 -36 12 c-53
19 -105 54 -133 90 -91 119 -92 275 -2 323 45 24 171 21 257 -6 69 -22 120
-27 120 -12 0 5 -7 12 -15 15 -28 11 -48 75 -41 135 13 105 64 187 141 222 55
26 82 24 141 -10 104 -60 95 -154 -20 -195 -23 -8 -32 -15 -22 -15 11 -1 39 8
62 19 46 23 74 67 74 118 0 29 2 30 34 25 44 -7 94 10 186 64 208 121 376 109
441 -32 32 -70 27 -86 -40 -117 -136 -64 -183 -166 -135 -299 17 -47 85 -139
103 -139 4 0 -11 19 -33 43 -66 68 -83 150 -43 207 46 68 64 75 205 75 70 0
163 -3 207 -7 91 -8 47 3 -80 21 -197 27 -290 5 -347 -84 l-20 -30 6 38 c14
102 139 179 335 209 71 10 194 2 245 -18 12 -5 17 -4 13 3 -13 21 -114 35
-230 32 -64 -2 -117 -2 -117 1 3 32 95 129 158 166 73 43 119 54 209 51 70 -3
89 -8 130 -33z m893 -445 c60 -27 79 -45 106 -104 55 -117 11 -303 -79 -335
-45 -15 -72 -12 -92 10 -10 11 -16 22 -14 23 2 2 22 14 44 26 62 34 88 82 93
172 5 88 -12 136 -60 171 -32 22 -101 34 -142 24 -29 -7 -96 -62 -96 -79 0 -6
12 1 28 15 39 37 65 48 114 48 101 0 160 -87 137 -204 -11 -61 -47 -110 -101
-137 -38 -19 -42 -19 -79 -5 -56 22 -70 20 -29 -5 126 -76 161 -196 86 -298
-34 -46 -87 -82 -143 -97 -31 -8 -39 -13 -23 -13 43 -1 92 17 134 51 37 29 39
30 25 8 -25 -38 -95 -88 -142 -101 -127 -34 -227 33 -227 153 0 67 33 159 67
183 136 98 187 280 112 401 -11 19 -17 38 -14 44 9 15 77 57 101 63 51 13 151
6 194 -14z m-396 -13 c65 -27 126 -134 126 -221 0 -88 -53 -181 -131 -231 -86
-54 -233 -48 -340 14 l-50 29 45 37 c63 51 107 143 107 222 0 32 -4 72 -10 87
-6 16 -11 31 -11 35 0 4 33 7 73 8 52 0 80 5 97 17 30 21 50 21 94 3z m-1416
-381 c27 -34 36 -93 22 -146 -13 -46 -67 -109 -95 -109 -13 0 -11 6 9 33 59
77 11 177 -65 137 -10 -6 -19 -16 -19 -22 0 -6 8 -4 18 5 61 56 105 -48 45
-105 -50 -47 -106 -46 -152 3 -52 56 0 162 104 210 59 27 109 25 133 -6z
m2048 -81 c71 -52 89 -117 54 -189 -41 -85 -126 -111 -180 -56 -34 33 -45 68
-36 115 16 83 100 114 157 57 50 -51 29 -121 -36 -121 -42 0 -62 49 -27 69 9
6 12 11 7 11 -16 0 -35 -21 -35 -39 0 -47 74 -67 111 -30 29 29 21 92 -15 128
-36 36 -103 37 -140 2 -65 -61 -56 -158 21 -231 47 -44 82 -108 83 -150 0 -36
-17 -93 -35 -115 -15 -18 -16 -13 -10 65 6 77 4 87 -13 103 -34 31 -101 22
-148 -19 -53 -47 -55 -103 -4 -129 36 -19 67 -19 100 0 34 19 40 18 40 -5 0
-65 -81 -104 -156 -75 -103 39 -120 158 -36 249 l27 29 -27 -19 c-34 -23 -78
-107 -78 -148 -1 -17 -7 -44 -15 -61 l-15 -30 6 32 c8 47 -20 93 -56 92 -9 0
-5 -4 7 -9 48 -20 35 -102 -20 -128 -41 -20 -91 -8 -121 29 -14 17 -26 39 -26
49 0 33 46 74 102 92 l53 16 -47 1 c-27 1 -48 6 -48 11 0 6 21 10 48 10 86 1
176 62 225 153 19 36 22 57 21 149 l0 107 35 4 c20 3 73 4 118 3 65 -1 87 -5
109 -22z m-3122 -250 c18 -7 21 -55 6 -85 -6 -10 -7 -19 -2 -19 4 0 14 -15 20
-34 7 -19 28 -48 47 -65 l35 -30 -34 -7 c-64 -12 -134 27 -161 88 -8 18 -14
26 -15 17 0 -30 45 -84 92 -109 47 -25 73 -24 139 4 23 10 41 -44 33 -95 -4
-21 -4 -49 0 -63 9 -37 51 -74 91 -82 39 -7 43 -15 19 -35 -22 -18 -54 -84
-54 -112 0 -24 20 -56 72 -112 40 -43 53 -89 39 -135 -15 -51 -83 -117 -135
-131 -81 -22 -94 -30 -43 -24 81 8 151 55 188 127 34 67 23 110 -56 198 -50
57 -56 87 -26 136 22 36 81 84 102 84 8 0 29 9 47 20 47 29 39 7 -18 -55 -70
-73 -74 -105 -25 -169 62 -82 75 -108 75 -156 0 -55 -23 -95 -82 -143 -64 -52
-112 -70 -188 -70 -64 0 -130 22 -130 43 0 6 -7 10 -15 10 -22 0 -73 76 -90
133 -22 73 -21 77 17 67 44 -13 82 6 86 43 6 53 -48 85 -90 53 -28 -20 -21
-29 7 -10 50 33 100 -19 59 -60 -8 -9 -21 -16 -27 -16 -26 0 -56 32 -63 64
-13 75 58 146 146 146 l43 0 -42 30 c-23 17 -46 43 -52 58 -16 41 -4 100 30
149 22 31 27 43 16 43 -24 0 -128 56 -152 81 -41 45 -55 118 -32 162 17 30 53
57 60 45 4 -5 9 -3 12 6 7 17 24 20 51 10z m3016 -144 c19 -19 26 -50 14 -62
-3 -4 -14 2 -25 13 -10 10 -29 19 -41 19 -22 -1 -22 -2 4 -16 15 -8 32 -23 38
-34 9 -16 6 -22 -17 -37 -31 -21 -94 -23 -117 -4 -36 30 -10 102 48 127 44 19
73 17 96 -6z m-2370 -34 c0 -1 -5 -17 -11 -35 -9 -25 -14 -29 -25 -20 -17 14
-18 31 -2 47 11 11 38 17 38 8z m2527 -131 c32 -32 35 -39 30 -78 -4 -31 -14
-49 -38 -69 -36 -30 -50 -33 -80 -18 -24 13 -26 62 -3 84 19 20 34 12 34 -17
1 -20 1 -21 11 -4 11 19 -3 47 -24 47 -22 0 -47 -34 -47 -63 0 -61 49 -83 113
-51 l32 17 -19 -22 c-23 -26 -86 -44 -121 -35 -32 8 -65 49 -65 81 0 30 12 54
58 116 45 58 70 61 119 12z m-341 -75 c36 -26 44 -69 28 -146 -29 -137 -29
-146 0 -176 29 -33 90 -38 122 -12 19 15 19 16 -1 8 -34 -13 -84 -8 -105 11
-26 24 -26 68 1 158 20 67 21 90 4 130 -6 14 -2 17 28 17 20 0 47 4 60 9 24 9
24 9 20 -33 -3 -24 0 -53 6 -64 19 -36 68 -55 120 -48 42 6 44 5 30 -10 -33
-32 -121 -38 -174 -11 -27 14 -35 27 -35 60 0 16 -4 26 -10 22 -15 -9 -12 -58
5 -82 17 -24 104 -57 127 -48 25 10 48 -23 48 -66 0 -81 -68 -165 -153 -189
-73 -20 -123 -1 -203 76 l-65 63 25 44 c49 84 26 176 -54 219 -25 13 -46 17
-72 13 -36 -6 -37 -6 -29 22 5 17 14 26 22 24 8 -3 36 -5 63 -5 45 -1 51 2 85
41 l36 41 25 -27 c14 -14 34 -33 46 -41z m-2336 36 c0 -13 10 -36 21 -51 18
-22 20 -29 8 -36 -8 -5 -17 -9 -20 -9 -11 0 -49 -79 -49 -103 0 -94 94 -177
201 -177 33 0 36 -3 52 -48 17 -48 17 -51 -3 -103 -11 -30 -28 -67 -37 -84
-16 -28 -16 -29 0 -16 9 7 28 37 43 67 14 30 30 51 35 48 17 -10 9 -59 -16
-104 l-25 -45 30 33 c16 18 30 39 30 47 0 8 4 15 8 15 9 0 56 -60 50 -65 -1
-1 -18 -10 -36 -19 -18 -9 -46 -35 -62 -58 -27 -37 -30 -49 -30 -115 0 -54 5
-84 20 -112 24 -47 92 -108 131 -116 54 -12 23 -35 -49 -35 -114 0 -202 149
-169 285 l7 30 -15 -25 c-18 -32 -19 -140 -2 -183 8 -18 26 -46 40 -63 34 -41
34 -48 -2 -30 -109 57 -133 200 -57 343 21 39 40 89 43 118 3 28 15 67 25 87
11 21 18 43 16 50 -2 6 -10 -3 -17 -20 -13 -32 -31 -43 -31 -19 -1 14 -33 52
-69 82 -21 17 -19 12 9 -30 28 -40 35 -62 38 -110 3 -54 1 -64 -26 -101 -44
-61 -90 -91 -163 -110 -35 -9 -79 -25 -98 -37 -37 -22 -70 -84 -71 -132 -1
-26 -2 -28 -11 -12 -28 48 27 137 124 201 131 87 167 137 167 229 0 53 -17
125 -33 142 -7 7 -7 3 -2 -10 5 -11 10 -60 12 -110 5 -113 -5 -131 -116 -209
-89 -62 -135 -106 -157 -148 -22 -42 -27 -34 -20 28 10 88 27 118 82 145 72
34 138 104 152 161 15 60 -1 109 -63 184 -25 32 -45 66 -45 80 0 15 19 45 50
79 67 74 69 134 4 100 -38 -20 -127 -19 -170 1 -25 12 -37 26 -46 55 -6 22 -9
42 -6 45 3 3 25 -9 50 -26 24 -17 60 -33 81 -37 46 -7 114 17 147 52 29 31 40
32 40 1z m2260 -467 c30 -31 62 -59 70 -62 13 -5 12 -8 -4 -18 -25 -15 -51
-43 -64 -65 -10 -18 -12 -18 -39 7 -66 61 -108 73 -151 43 -15 -10 -22 -25
-22 -49 0 -19 4 -36 8 -39 5 -3 7 8 4 23 -8 55 50 78 108 44 71 -41 99 -174
52 -241 -20 -27 -29 -32 -66 -32 -57 0 -140 42 -166 84 -14 24 -20 50 -20 93
0 51 5 67 33 107 49 73 57 88 57 124 0 24 4 32 18 32 9 0 35 11 57 24 l40 23
15 -21 c8 -11 39 -46 70 -77z m-247 54 c41 -8 36 -52 -15 -130 -97 -150 -43
-291 126 -328 39 -8 16 -25 -34 -25 -86 1 -177 78 -206 176 -21 72 -15 117 32
234 29 73 40 90 53 85 9 -4 28 -9 44 -12z m462 -148 c65 -17 97 -41 115 -86
36 -87 -81 -189 -216 -189 -76 0 -111 22 -100 63 l6 26 36 -24 c50 -34 121
-35 152 -2 44 47 50 116 12 137 -26 14 -74 12 -88 -2 -18 -18 -15 -75 4 -82
31 -12 37 -6 16 14 -25 23 -28 40 -10 58 27 27 88 0 88 -40 0 -33 -29 -77 -55
-84 -67 -17 -135 24 -156 94 -10 35 -10 45 5 67 22 33 74 65 106 65 14 0 53
-7 85 -15z m-606 -226 c17 -44 11 -73 -29 -127 -37 -51 -59 -56 -25 -6 30 44
32 98 8 188 -15 59 -15 63 3 91 l19 29 5 -69 c3 -39 12 -86 19 -106z m-1501
119 c8 -8 8 -17 1 -32 -10 -20 -10 -20 5 -2 13 16 18 17 31 6 8 -7 15 -16 15
-21 0 -5 -25 -36 -55 -69 -64 -69 -72 -108 -31 -136 45 -29 100 -1 81 42 -8
18 -9 17 -12 -4 -6 -32 -35 -45 -61 -26 -30 20 -28 40 7 75 38 37 55 37 97 -5
28 -28 34 -42 34 -75 0 -46 -17 -86 -49 -115 -19 -17 -25 -18 -62 -7 -153 46
-204 284 -77 361 38 23 59 25 76 8z m1439 -93 c16 -109 -2 -172 -57 -200 -41
-21 -64 -19 -99 10 -30 26 -34 34 -46 91 -5 28 -2 33 45 63 49 32 52 32 66 15
14 -18 14 -17 4 4 -10 21 -7 27 27 57 21 19 41 34 44 35 3 0 11 -34 16 -75z
m-1311 -10 c25 -19 50 -35 56 -35 6 0 7 -8 3 -17 -4 -10 -14 -46 -22 -79 -8
-34 -21 -70 -29 -80 -15 -18 -15 -18 -8 1 27 74 3 147 -59 178 -36 18 -36 19
-21 43 9 13 20 24 25 24 5 0 29 -16 55 -35z m-452 -17 c-14 -47 -19 -50 -44
-30 l-24 19 30 16 c40 22 47 21 38 -5z m-61 -49 c26 -33 23 -101 -8 -137 -33
-39 -72 -54 -131 -50 -60 4 -77 29 -64 96 18 100 148 158 203 91z m622 -23
c-4 -11 -10 -34 -14 -51 -7 -29 -7 -30 -19 -8 -15 27 -15 48 -2 73 14 27 44
15 35 -14z m985 -11 c0 -15 7 -40 16 -58 l16 -32 -32 30 c-54 51 -62 85 -19
85 14 0 19 -7 19 -25z m-909 3 c42 -12 47 -24 24 -67 -25 -50 -105 -47 -105 4
0 33 17 75 31 75 6 0 29 -5 50 -12z m852 -37 c26 -38 26 -39 6 -57 -18 -17
-19 -16 -19 9 0 14 -4 28 -9 31 -5 4 -7 -3 -4 -14 7 -27 -14 -50 -44 -50 -33
0 -57 14 -77 45 -26 40 -8 51 23 14 29 -35 62 -36 60 -2 -1 17 -2 17 -6 1 -5
-21 -24 -23 -41 -6 -22 22 -12 37 36 51 26 8 48 15 48 16 1 1 13 -17 27 -38z
m571 -20 c39 2 50 -1 48 -12 -6 -31 -28 -61 -52 -74 -26 -13 -26 -13 -22 21 4
28 0 35 -19 43 -25 9 -59 -2 -59 -19 0 -6 8 -5 19 1 22 14 51 6 51 -15 0 -18
-27 -46 -45 -46 -24 0 -55 51 -55 90 l0 38 42 -15 c23 -8 65 -13 92 -12z
m-904 -15 c0 -29 -16 -36 -100 -42 -88 -7 -164 13 -168 44 -3 22 -3 22 132 22
l136 0 0 -24z m-1170 -35 c0 -30 -62 -72 -112 -77 -24 -2 -36 -2 -28 2 65 24
91 40 109 65 25 34 31 36 31 10z m945 -23 c50 -12 213 -5 243 11 20 11 28 5
96 -66 41 -43 72 -81 68 -85 -15 -14 -131 -46 -213 -58 -69 -10 -103 -10 -170
0 -92 13 -193 43 -224 66 -19 15 -17 18 55 85 49 46 80 67 90 63 8 -3 33 -11
55 -16z"/>
                            <path d="M2158 3220 c-25 -7 -88 -50 -75 -50 4 0 25 10 48 22 57 30 148 29
209 -2 74 -36 123 -102 140 -183 7 -37 8 -39 9 -11 3 78 -61 172 -143 210 -53
25 -133 31 -188 14z"/>
                            <path d="M1469 3102 c-24 -21 -32 -38 -36 -75 -5 -44 -3 -49 35 -87 22 -22 48
-40 58 -40 14 1 11 5 -11 17 -71 37 -88 112 -36 164 24 24 38 29 75 29 55 0
86 -25 86 -70 0 -23 -6 -33 -22 -39 -50 -19 -94 29 -45 49 22 10 22 10 -3 7
-49 -4 -26 -77 25 -77 62 0 83 82 31 126 -41 36 -115 34 -157 -4z"/>
                            <path d="M979 3073 c-13 -17 -13 -17 6 -3 11 8 22 16 24 17 2 2 0 3 -6 3 -6 0
-17 -8 -24 -17z"/>
                            <path d="M1090 3065 c19 -20 22 -30 14 -43 -14 -22 -50 -27 -72 -10 -15 12
-16 11 -3 -4 25 -32 91 -13 91 26 0 13 -36 56 -47 56 -4 0 4 -11 17 -25z"/>
                            <path d="M962 2964 c10 -10 20 -16 22 -13 3 3 -5 11 -17 18 -21 13 -21 12 -5
-5z"/>
                            <path d="M2200 2876 c0 -2 9 -6 20 -9 11 -3 18 -1 14 4 -5 9 -34 13 -34 5z" />
                            <path d="M1790 2730 c-25 -25 -26 -72 -2 -93 22 -20 48 -22 58 -5 5 7 2 9 -8
5 -21 -8 -58 20 -58 44 0 23 34 59 55 59 9 0 27 -11 40 -25 35 -34 33 -78 -4
-116 -37 -36 -27 -39 11 -2 22 21 28 36 28 68 0 73 -73 112 -120 65z"/>
                            <path d="M2442 2720 c6 -19 37 -25 52 -10 8 8 7 10 -7 4 -9 -3 -25 0 -34 7
-14 12 -16 12 -11 -1z"/>
                            <path d="M1418 2692 c-10 -4 16 -7 56 -7 63 0 78 -4 117 -29 37 -24 41 -25 24
-7 -38 43 -141 65 -197 43z"/>
                            <path d="M691 2674 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                            <path d="M741 2664 c-2 -45 -91 -96 -130 -74 -12 6 -21 7 -21 1 0 -5 13 -12
29 -16 58 -13 140 46 128 92 -4 15 -5 15 -6 -3z"/>
                            <path d="M1365 2670 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z" />
                            <path d="M590 2654 c0 -6 9 -19 20 -29 23 -21 64 -14 74 12 6 16 6 16 -12 0
-25 -23 -48 -21 -66 5 -9 12 -16 18 -16 12z"/>
                            <path d="M537 2593 c12 -45 74 -93 120 -93 31 0 93 24 93 36 0 2 -9 0 -19 -6
-11 -5 -42 -10 -70 -10 -39 0 -56 6 -80 26 -17 14 -31 32 -31 39 0 8 -4 16 -9
19 -5 4 -7 -2 -4 -11z"/>
                            <path d="M1808 2563 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                            <path d="M934 2446 c-44 -44 -46 -86 -5 -127 25 -24 38 -29 79 -29 64 0 102
32 102 86 0 51 -53 104 -105 104 -29 0 -45 -8 -71 -34z m135 -12 c26 -33 27
-75 3 -104 -28 -34 -98 -32 -129 4 -30 35 -29 66 2 100 34 37 95 37 124 0z"/>
                            <path d="M984 2180 c21 -33 20 -83 -2 -103 -11 -10 -35 -17 -57 -17 -21 0 -36
-3 -32 -6 15 -15 80 -5 103 17 31 29 31 66 -2 104 -18 21 -21 23 -10 5z"/>
                            <path d="M1070 2171 c16 -31 12 -93 -10 -128 -20 -33 -56 -49 -90 -40 -29 7
-25 -2 5 -13 59 -22 125 39 125 115 0 25 -25 85 -36 85 -2 0 0 -9 6 -19z"/>
                            <path d="M2393 2125 c-18 -8 -33 -16 -33 -19 0 -2 33 -4 74 -4 91 -1 145 -16
185 -53 34 -31 36 -31 20 3 -31 69 -165 108 -246 73z"/>
                            <path d="M1464 2105 c-51 -25 -92 -60 -82 -70 3 -3 28 6 55 20 66 33 144 48
201 41 l47 -7 -24 21 c-35 30 -130 27 -197 -5z"/>
                            <path d="M898 2103 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                            <path d="M1410 1982 c0 -7 7 -23 15 -36 14 -21 13 -24 -9 -46 l-25 -23 -40 22
c-49 25 -54 12 -9 -23 31 -24 32 -26 16 -43 -15 -15 -24 -16 -58 -6 -22 5 -40
7 -40 2 0 -12 35 -29 61 -29 17 0 20 -4 15 -22 -4 -13 -10 -51 -13 -84 -5 -58
1 -91 32 -167 5 -12 -3 -27 -31 -53 -34 -32 -36 -35 -14 -29 14 4 35 19 47 33
17 20 25 24 34 15 8 -8 6 -19 -6 -43 -22 -42 -13 -49 15 -11 29 41 54 42 45 1
-8 -38 0 -39 19 -2 13 26 22 29 108 42 75 12 85 16 52 18 l-41 3 32 32 c53 53
67 132 40 223 -20 67 -54 99 -107 99 -54 0 -92 -42 -108 -120 -21 -101 15
-201 83 -230 l32 -14 -53 -1 c-89 0 -130 33 -153 124 -14 57 1 126 42 190 54
85 139 110 210 62 44 -30 97 -127 105 -193 10 -77 26 -88 20 -13 -7 88 -21
130 -59 187 -45 66 -88 93 -150 93 -42 0 -56 5 -79 27 -15 15 -28 21 -28 15z
m150 -177 c0 -27 -22 -48 -47 -43 -27 5 -28 43 -2 61 27 20 49 12 49 -18z"/>
                            <path d="M2590 1959 c-19 -17 -33 -20 -64 -15 -53 9 -103 -9 -149 -53 -73 -68
-115 -191 -101 -291 l7 -45 17 86 c33 163 101 249 195 249 43 0 69 -12 113
-53 33 -32 72 -119 72 -163 0 -52 -24 -116 -55 -150 -30 -32 -36 -34 -96 -34
l-64 0 39 23 c95 54 115 232 36 317 -57 61 -144 22 -178 -79 -28 -79 -3 -198
48 -234 22 -15 22 -16 -21 -19 -37 -3 -30 -5 50 -18 87 -13 95 -17 113 -45
l20 -30 -4 33 c-3 24 -1 32 11 32 8 0 27 -15 43 -32 l29 -33 -16 32 c-27 58
-14 71 29 28 14 -14 33 -25 42 -25 12 0 8 8 -15 29 -35 33 -38 49 -15 93 17
33 24 153 12 199 -7 23 -4 26 29 35 20 5 39 15 41 23 4 11 0 12 -14 6 -43 -18
-65 -17 -79 1 -18 24 -19 34 -2 34 16 0 61 40 53 47 -2 3 -15 -2 -28 -11 -29
-21 -48 -20 -76 4 -22 18 -22 20 -7 50 18 35 18 36 -15 9z m-112 -151 c2 -19
-3 -30 -18 -38 -29 -16 -50 -6 -50 24 0 48 63 61 68 14z"/>
                            <path d="M674 1948 l-19 -23 23 19 c12 11 22 21 22 23 0 8 -8 2 -26 -19z" />
                            <path d="M1930 1433 c0 -15 32 -41 60 -47 14 -3 39 1 55 8 30 13 30 13 -21 12
-38 -1 -57 4 -73 18 -12 11 -21 15 -21 9z"/>
                            <path d="M1765 1257 c-27 -26 -27 -29 -8 -23 15 5 36 -1 65 -18 55 -31 140
-56 194 -56 52 0 163 34 196 59 16 13 34 18 49 15 23 -5 23 -5 4 7 -11 6 -28
21 -38 33 l-18 21 6 -23 c6 -19 0 -25 -40 -43 -110 -49 -219 -48 -334 1 -41
18 -50 26 -46 41 8 24 7 23 -30 -14z"/>
                            <path d="M3115 2695 c-19 -18 -25 -34 -24 -62 l2 -38 6 39 c4 26 15 46 33 59
24 18 32 19 68 8 54 -16 79 -60 55 -97 -18 -28 -32 -30 -57 -7 -10 9 -18 11
-18 5 0 -13 32 -32 54 -32 8 0 22 7 30 16 45 44 -13 134 -86 134 -28 0 -46 -7
-63 -25z"/>
                            <path d="M3171 2634 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                            <path d="M3160 2552 c0 -7 15 -21 33 -32 39 -25 72 -19 107 18 l25 26 -26 -22
c-33 -29 -85 -29 -116 0 -13 12 -23 16 -23 10z"/>
                            <path d="M3155 2490 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23
20 -3 0 3 -9 13 -20z"/>
                            <path d="M3107 2338 c32 -36 43 -63 43 -108 0 -120 -128 -206 -197 -132 -24
26 -25 31 -20 112 4 75 3 82 -8 55 -13 -30 -18 -72 -16 -129 1 -39 62 -96 101
-96 70 0 132 53 156 135 18 65 9 114 -32 157 -33 33 -57 38 -27 6z"/>
                            <path d="M3017 2243 c-12 -12 -7 -50 8 -63 26 -22 50 -8 50 29 0 20 -6 36 -13
39 -11 3 -11 0 -1 -16 10 -17 10 -23 -1 -37 -12 -14 -15 -15 -29 0 -13 13 -13
19 -3 35 11 19 3 28 -11 13z"/>
                            <path d="M2820 2743 c-23 -9 -39 -35 -40 -63 0 -31 17 -50 45 -50 18 0 17 2
-5 13 -50 25 -28 87 30 87 16 0 42 -11 59 -26 78 -65 49 -187 -49 -209 -35 -8
-116 25 -143 58 l-18 22 11 -22 c5 -12 30 -34 54 -48 102 -60 206 -7 206 105
0 90 -79 160 -150 133z"/>
                            <path d="M1341 2274 c-2 -19 26 -47 40 -41 11 4 11 6 -2 6 -9 1 -21 11 -27 24
-6 12 -11 17 -11 11z"/>
                            <path d="M3050 1835 c-18 -21 -4 -65 20 -65 10 0 21 4 24 9 4 5 -3 7 -14 4
-25 -7 -38 22 -21 48 13 23 8 25 -9 4z"/>
                            <path d="M505 1730 c-31 -60 -28 -175 6 -195 5 -4 5 5 -1 20 -14 37 -12 123 4
168 16 45 12 48 -9 7z"/>
                            <path d="M540 1354 c0 -4 17 -30 39 -58 69 -92 75 -113 36 -151 -31 -32 -77
-33 -105 -3 -24 26 -25 45 -3 70 18 20 4 25 -15 6 -20 -20 -14 -63 13 -92 65
-71 180 20 133 107 -15 28 -98 131 -98 121z"/>
                            <path d="M478 1053 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
                            <path d="M2652 900 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                            <path d="M2571 860 c-1 -31 15 -50 45 -50 25 0 48 24 41 42 -4 9 -6 7 -6 -4
-1 -21 -38 -33 -56 -18 -8 6 -16 21 -18 33 -4 19 -4 19 -6 -3z"/>
                            <path d="M841 818 c-1 -28 -30 -46 -52 -32 -8 4 -9 3 -5 -4 20 -33 71 0 63 40
-4 21 -4 21 -6 -4z"/>
                            <path d="M1572 798 c7 -15 15 -23 17 -17 2 6 -4 18 -13 27 -15 15 -15 15 -4
-10z"/>
                            <path d="M3545 1280 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z" />
                            <path d="M3593 1280 c20 -13 23 -36 5 -43 -8 -3 -5 -6 5 -6 27 -1 19 53 -8 57
-18 2 -18 2 -2 -8z"/>
                        </g>


                    </svg>
                    <div className="options-game2">
                        <div className="color-options">
                            <label htmlFor="color-input">Cor: </label>
                            <input type="color" id="color-input" value={currentColor} onChange={handleColorChange} ref={colorInputRef} />
                        </div>
                        <div className="size-game2">
                            <label htmlFor="size-input">Tamanho do pincel:</label>
                            <input type="range" min="5" max="100" value={currentSize} id="size-input" onChange={handleSizeChange} ref={sizeInputRef} style={{ borderRadius: "50px" }} />
                        </div>
                    </div>
                    <div className="button-game1-draw1">
                        <Link to="/jogo1tela4">
                            <ButtonDrawGames props_button_draw={"Terminar"} />
                        </Link>
                    </div>

                </div>

            </div>

        </>
    );
};

export default ScreenThree;