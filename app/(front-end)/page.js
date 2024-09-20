import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
const categories=await getData("categories")
const session=await getServerSession(authOptions)
const training=await getData('trainings')
console.log(categories)
  return (
    <div className=" min-h-screen">
    <Hero/>
    <MarketList/>
    {categories && categories.map((category,i)=>{
      return <div className="py-16" key={i}> <CategoryList isMarketPage={false} category={category} />
      </div>
    })}
   {/* <div className="py-16">
   <CategoryList/>
   </div> */}
  
   <div className="">
<CommunityTrainings title="Featured Trainings" trainings={training.slice(0,3)}/>
   </div>


    
      <h2 className="text-4xl">Welcome to Beki Dink Ecommerce</h2>
   <Link className="my-4 underline" href={"/register-farmer"}>Become a farmer/Vendor/Supplier</Link>
    </div>
  );
}
