import { Links } from "../../components/Links/Links";
import EarthNight_5 from "../../components/Normal-Ones/EarthNight_5";
import EarthNight_6 from "../../components/Normal-Ones/EarthNight_6";

export default function Home() {
  return (
    <>
      <EarthNight_5 />
      <EarthNight_6 />
      <Links
        prev={"2"}
        next={"4"}
      />
    </>
  );
}
