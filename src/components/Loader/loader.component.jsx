import React from 'react'

export const Loader = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'rgba(241, 242, 243, 0)', display: 'block', shapeRendering: 'auto' }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} r={32} strokeWidth={8} stroke="#ff1400" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" />
                </circle></svg>


        </div>
    )
}
