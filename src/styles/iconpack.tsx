import React from "react";

interface IconProps {
    color?: string | "#FFFFFF";
    fill?: string | "#FFFFFF";
}

const IconLinkedin: React.FC<IconProps> = ({color, fill}) =>{
    return (
        <svg className="icon icon_linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
            <title id="title">LinkedIn</title>
            <path stroke={color} d="M0 0h24v24H0z" fill={fill}/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    )
};

export default IconLinkedin;