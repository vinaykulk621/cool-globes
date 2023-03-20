import { Links } from "../../components/Links/Links";
import EarthNight_15 from "../../components/Far-Ones/EarthNight_15";
import EarthNight_17 from "../../components/Crazy-Ones/EarthNight_17";

export default function Home() {
  return (
    <>
      <EarthNight_15 />
      <EarthNight_17 />
      <Links
        prev={"7"}
        next={"9"}
      />
    </>
  );
}
