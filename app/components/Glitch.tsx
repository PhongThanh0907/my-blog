import React from "react";

interface GlitchProps {
  title: string;
}

const Glitch: React.FC<GlitchProps> = ({ title }) => {
  return (
    <div className="glitch text-3xl lg:text-5xl" data-text={title}>
      {title}
    </div>
  );
};

export default Glitch;
