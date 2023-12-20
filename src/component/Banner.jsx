export const Banner = () => {
  return (
    <>
      <div
        className={" -mt-24 flex items-center px-[8.75rem] "}
        style={{
          background:
            "url('https://i.ibb.co/xYsH2hC/christina-wocintechchat-com-L85a1k-Xq-H8-unsplash-1-1.png')",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={""}>
          <h1
            className={
              "font-deca text-[3.125rem] font-bold leading-[4rem] text-[#F5F5F5] "
            }
          >
            Instant collaboration <br /> for remote teams
          </h1>
          <p
            className={
              "mt-4  font-deca text-[1.125rem] font-normal text-[#F5F5F5] leading-[1.6875rem]"
            }
          >
            All-in-one place for your remote team to <br /> chat, collaborate
            and track project progress.
          </p>
          <button
            className={
              " py-[0.625rem] mt-8  bg-softBlue font-deca font-medium text-[1.125rem] text-[#F5F5F5]  px-[2.75rem] rounded-[0.25rem]"
            }
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's Explore
          </button>
        </div>
      </div>
    </>
  );
};
