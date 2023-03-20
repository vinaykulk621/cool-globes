import { Links } from "../../components/Links/Links";
import EarthNight_19 from "@/components/No-Ball/EarthNight_19";

export default function Home() {
  return (
    <>
      <EarthNight_19 />
      <Links
        prev={"16"}
        next={"/"}
      />
    </>
  );
}
