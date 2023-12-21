import { Banner } from "../../component/Banner.jsx";

export const Landing = () => {
  console.log(import.meta.env.VITE_APIKEY);
  return (
    <>
      <Banner />
    </>
  );
};
