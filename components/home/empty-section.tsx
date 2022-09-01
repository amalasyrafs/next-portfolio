interface EmptySectionProps {
  bgColor?: string;
  title: string;
  customText?: string;
}

const EmptySection = ({
  bgColor = "bg-white",
  title,
  customText = "Please come back later",
}: EmptySectionProps) => {
  return (
    <div
      className={`${bgColor} flex flex-col justify-center h-screen snap-center items-center`}
    >
      <h6>{title}</h6>
      <h6>{customText}</h6>
    </div>
  );
};

export default EmptySection;
