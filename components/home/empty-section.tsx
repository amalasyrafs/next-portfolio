interface EmptySectionProps {
  bgColor?: string;
  title: string;
  customText?: string;
}

const EmptySection = ({
  bgColor = "bg-white",
  title,
  customText,
}: EmptySectionProps) => {
  return (
    <div
      className={`${bgColor} flex flex-col justify-center h-screen snap-center items-center`}
    >
      <h6>{title}</h6>
      <h6>Please come back later</h6>
    </div>
  );
};

export default EmptySection;
