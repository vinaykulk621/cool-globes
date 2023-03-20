import { Links } from "../components/Links/Links";
import EarthNight_1 from "../components/Normal-Ones/EarthNight_1";

export default function Home() {
  return (
    <>
      <EarthNight_1 />
      <Links
        prev={"/"}
        next={"2"}
      />
    </>
  );
}
