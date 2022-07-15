import { useState } from "react";

interface PortfolioSectionProps {
  bgColor?: string;
}

const PortfolioSection = ({ bgColor = "bg-white" }: PortfolioSectionProps) => {
  return (
    <div className={`${bgColor} flex flex-col h-screen py-4 snap-center`}>
      <h6>hello world</h6>
    </div>
  );
};

export default PortfolioSection;
