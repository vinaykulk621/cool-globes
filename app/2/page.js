import { Links } from "@/components/Links/Links";
import EarthNight_3 from "@/components/Normal-Ones/EarthNight_3";
import EarthNight_4 from "@/components/Normal-Ones/EarthNight_4";

export default function Home() {
  return (
    <>
      <EarthNight_3 />
      <EarthNight_4 />
      <Links
        prev={"/"}
        next={"3"}
      />
    </>
  );
}
