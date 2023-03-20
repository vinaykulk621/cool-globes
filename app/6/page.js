import { Links } from "../../components/Links/Links";
import EarthNight_12 from "../../components/Cool-ones/EarthNight_12";
import EarthNight_13 from "../../components/Far-Ones/EarthNight_13";

export default function Home() {
  return (
    <>
      <EarthNight_13 />
      <EarthNight_12 />
      <Links
        prev={"5"}
        next={"7"}
      />
    </>
  );
}
