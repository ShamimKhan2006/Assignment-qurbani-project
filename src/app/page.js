import Banner from "@/components/Banner";
import AllAnimalsPage from "./all-animals/page";
import TipsPage from "@/components/Tips";
import Breed from "@/components/Breed";



export default function Home() {
  return (
    <div >
         <Banner></Banner>
         <AllAnimalsPage></AllAnimalsPage>
         <TipsPage></TipsPage>
         <Breed></Breed>
    </div>
  );
}
