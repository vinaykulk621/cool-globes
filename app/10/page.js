import { Links } from "@/components/Links/Links";
import EarthNight_9 from "@/components/No-Ball/EarthNight_9";

export default function Home() {
  return (
    <>
      <EarthNight_9 />
      <Links
        prev={"9"}
        next={"/"}
      />
    </>
  );
}
