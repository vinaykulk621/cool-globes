import { Links } from "@/components/Links/Links";
import EarthNight_8 from "../../components/Normal-Ones/EarthNight_8";
import EarthNight_7 from "@/components/Normal-Ones/EarthNight_7";

export default function Home() {
  return (
    <>
      {" "}
      <EarthNight_7 />
      <EarthNight_8 />
      <Links
        prev={"2"}
        next={"4"}
      />
    </>
  );
}
