import Collection from "@/components/Collection";
import HomeCarousel from "@/components/HomeCarousel";
import TrendingCatagories from "@/components/categories/TrendingCatagories";

export default function Home() {
  return (
    <main className ="flex min-h-screen flex-col items-center justify-between mb-24 z-0">
      {/* <div classNameNameName="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"> */}
      <HomeCarousel />
      <TrendingCatagories />
      <Collection />

      {/* </div> */}
    </main>
  );
}
