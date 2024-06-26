import React from "react";
import iconsSprite from "../../assets/images/iconSprite.svg";


type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewbox?: string;
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width || "16"}  height={props.height || "16"} viewBox={props.viewbox ||  "0 0 16 16"}  fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <use xlinkHref={ `${ iconsSprite }#${props.iconId}` } /> 
    </svg>
    
  );
};

