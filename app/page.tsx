import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Hero from "@/app/components/Hero/Hero";
import TechCard from "@/app/components/TechCard/TechCard";

export default function Home() {
    return (
        <div className="w-[100%] flex justify-center">
            <main
                // className="flex flex-grow-0 justify-center left-[20%] items-start mx-[12px] my-[15px] min-w-[259px] max-w-[1200px] gap-[25px] mb-[60px] sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-10 xl:px-32 pb-20 content">
                <div className="row-span-2 col-span-1">
                    <Sidebar />
                    <TechCard />
                </div>
                <div className="col-span-3">
                    <Hero />
                </div>
            </main>
        </div>
    );
}
