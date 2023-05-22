import React from "react";

interface TextLightProps {
  title: string;
}
const TextLight: React.FC<TextLightProps> = ({ title }) => {
  return (
    <div className="text-light text-4xl lg:text-5xl font-bold">{title}</div>
  );
};

export default TextLight;
