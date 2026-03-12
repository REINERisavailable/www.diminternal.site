import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center bg-[#030303]">
            <HeroGeometric
                badge="DIM Internal Tools"
                title1="Data in"
                title2="Motion"
                description="The internal hub for beautifully branded social media assets & team marketing tools."
                actionMenu={
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <Link href="/images">
                            <Button className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                Launch Image Studio
                            </Button>
                        </Link>
                        <Link href="/terms">
                            <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent">
                                Read Internal Wiki
                            </Button>
                        </Link>
                    </div>
                }
            />
        </main>
    );
}
