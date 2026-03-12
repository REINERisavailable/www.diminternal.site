import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center bg-[#030303]">
            <HeroGeometric
                badge="Data In Motion"
                title1="DIM Internal Tools"
                title2=""
                description="The internal hub for beautifully branded social media assets & team marketing tools."
                actionMenu={
                    <div className="flex flex-col items-center gap-6">
                        {/* Primary CTA */}
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

                        {/* Coming Soon Tools */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                            <p className="text-white/30 text-sm mr-1">Coming soon:</p>
                            <Link href="/scripts">
                                <span className="text-sm text-white/50 hover:text-white/80 transition-colors border border-white/10 hover:border-white/25 px-3 py-1 rounded-full">
                                    Script Writer
                                </span>
                            </Link>
                            <Link href="/webhooks">
                                <span className="text-sm text-white/50 hover:text-white/80 transition-colors border border-white/10 hover:border-white/25 px-3 py-1 rounded-full">
                                    Webhooks
                                </span>
                            </Link>
                        </div>
                    </div>
                }
            />
        </main>
    );
}

