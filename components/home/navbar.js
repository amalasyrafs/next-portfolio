import { useLenis } from "@studio-freight/react-lenis";

export default function VerticalNavbar({ section }) {
  const lenis = useLenis();

  return (
    <div className="fixed right-5 top-1/2 flex flex-col gap-2">
      {[0, 1, 2].map((el) => (
        <div
          onClick={() =>
            lenis?.scrollTo(`#section-${el}`, {
              // immediate: true,
              duration: 2,
            })
          }
          href={`#section-${el}`}
          className={`h-4 w-4 cursor-pointer rounded-full ${
            el === section ? "bg-invoke-white" : "bg-invoke-brown/40"
          }`}
        ></div>
      ))}
    </div>
  );
}
