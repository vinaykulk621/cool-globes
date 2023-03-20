import { Links } from "../../components/Links/Links";
import EarthNight_10 from "../../components/Cool-ones/EarthNight_10";
import EarthNight_11 from "../../components/Cool-ones/EarthNight_11";

export default function Home() {
  return (
    <>
      <EarthNight_10 />
      <EarthNight_11 />
      <Links
        prev={"4"}
        next={"6"}
      />
    </>
  );
}
