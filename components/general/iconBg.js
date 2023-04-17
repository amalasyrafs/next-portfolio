import { classConcatenator } from "@/helpers/classConcatenator";

export default function IconBg({ containerStyle, children }) {
  return (
    <div
      className={classConcatenator(
        "flex h-6 w-6 items-center justify-center rounded-full border border-invoke-bgBlack/60",
        containerStyle
      )}
    >
      {children}
    </div>
  );
}
