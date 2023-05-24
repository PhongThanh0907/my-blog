import React from "react";

interface GlitchProps {
  title: string;
}

const GlitchMemo: React.FC<GlitchProps> = ({ title }) => {
  return (
    <div className="glitch text-3xl lg:text-5xl" data-text={title}>
      {title}
    </div>
  );
};

const Glitch = React.memo(GlitchMemo);

export default Glitch;
