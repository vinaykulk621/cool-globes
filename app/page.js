import EarthNight_1 from "@/components/Normal-Ones/EarthNight_1";
import EarthNight_2 from "@/components/Normal-Ones/EarthNight_2";
import EarthNight_3 from "@/components/Normal-Ones/EarthNight_3";
import EarthNight_4 from "@/components/Normal-Ones/EarthNight_4";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <EarthNight_1 />
      <EarthNight_2 />
      <EarthNight_3 />
      <EarthNight_4 />
      {/* <EarthNight_5 />
      <EarthNight_6 />
      <EarthNight_7 />
      <EarthNight_8 />
      <EarthNight_10 />
      <EarthNight_11 />
      <EarthNight_13 />
      <EarthNight_12 />
      <EarthNight_14 />
      <EarthNight_16 />
      <EarthNight_15 />
      <EarthNight_17 />
      <EarthNight_18 />
      <EarthNight_9 />
      <EarthNight_19 /> */}{" "}
      <Link href={"/2"}>Next Page</Link>
    </>
  );
}
