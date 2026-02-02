import HomeContainer from "@/components/ui/home";
import HomepageImage from "../assets/images/HomepageImage5.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HomepageImage.src})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-0">
        <HomeContainer />
      </div>
    </div>
  );
}

