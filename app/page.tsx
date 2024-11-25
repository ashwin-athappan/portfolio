import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Hero from "@/app/components/Hero/Hero";

export default function Home() {
    return (
        <div className="w-[100%] flex justify-center">
            <main
                className="flex justify-center left-[20%] items-start mx-[12px] my-[15px] min-w-[259px] max-w-[1200px] gap-[25px] mb-[60px] sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                <Sidebar />
                <Hero />
            </main>
        </div>
    );
}
