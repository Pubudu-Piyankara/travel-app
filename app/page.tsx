import Dash from "@/components/Dash";
import Destinations from "@/components/Destinations";
import Festivals from "@/components/Festivals";
import TravelGuide from "@/components/TravelGuide";


export default function Home() {
  return (
    <>
      <Dash />
      <Destinations />
      <TravelGuide />`
      <hr/>
      <Festivals />
    </>
  );
}
