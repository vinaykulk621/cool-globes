import { Links } from "../../components/Links/Links";
import EarthNight_7 from "@/components/Normal-Ones/EarthNight_7";
import EarthNight_8 from "@/components/Normal-Ones/EarthNight_8";

export default function Home() {
  return (
    <>
      <EarthNight_8 />
      <Links
        prev={"7"}
        next={"9"}
      />
    </>
  );
}
