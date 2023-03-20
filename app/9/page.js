import { Links } from "../../components/Links/Links";
import EarthNight_18 from "../../components/Cool-Ones/EarthNight_18";
import EarthNight_19 from "../../components/No-Ball/EarthNight_19";

export default function Home() {
  return (
    <>
      <EarthNight_18 />
      <EarthNight_19 />
      <Links
        prev={"8"}
        next={"10"}
      />
    </>
  );
}
