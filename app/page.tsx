import About from "@/components/About";
import Dash from "@/components/Dash";
import Destinations from "@/components/Destinations";
import TravelGuide from "@/components/TravelGuide";


export default function Home() {
  return (
    <>
      <Dash />
      <Destinations />
      <TravelGuide />
      <About />
    </>
  );
}
