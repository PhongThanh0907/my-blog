import React from "react";

interface TextLightProps {
  title: string;
  className?: string;
}
const TextLightMemo: React.FC<TextLightProps> = ({ title, className }) => {
  return (
    <div className={`text-light text-4xl lg:text-5xl font-bold ${className}`}>
      {title}
    </div>
  );
};

const TextLight = React.memo(TextLightMemo);

export default TextLight;
