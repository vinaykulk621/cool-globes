import { Links } from "@/components/Links/Links";
import EarthNight_14 from "@/components/Far-Ones/EarthNight_14";
import EarthNight_16 from "@/components/Crazy-Ones/EarthNight_16";

export default function Home() {
  return (
    <>
      {" "}
      <EarthNight_14 />
      <EarthNight_16 />
      <Links
        prev={"5"}
        next={"7"}
      />
    </>
  );
}
