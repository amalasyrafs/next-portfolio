export default function ContactUsSection() {
  return (
    <section
      className="h-full min-h-screen w-full bg-invoke-bgBlack"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px",
      }}
    >
      <div className="m-auto flex h-screen max-w-4xl flex-col items-center justify-evenly p-8">
        <div className="my-10 h-[0.5px] w-full bg-invoke-white bg-opacity-25" />
        <div className="flex flex-col items-center justify-center py-8">
          <p
            className={" text-center font-raleway text-xl font-semibold"}
            style={{
              background: "-webkit-linear-gradient(#eee, #333)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Let's collaborate
          </p>
          <h1
            className={
              "text-center font-raleway text-6xl font-semibold leading-[65px]"
            }
            style={{
              background: "-webkit-linear-gradient(#eee, #333)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Tell me about your
            <br /> next project
          </h1>
        </div>
        <div className="my-10 h-[0.5px] w-full bg-invoke-white bg-opacity-25" />
      </div>
    </section>
  );
}