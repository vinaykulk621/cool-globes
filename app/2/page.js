import { Links } from "../../components/Links/Links";
import EarthNight_2 from "@/components/Normal-Ones/EarthNight_2";

export default function Home() {
  return (
    <>
      <EarthNight_2 />
      <Links
        prev={"/"}
        next={"3"}
      />
    </>
  );
}
