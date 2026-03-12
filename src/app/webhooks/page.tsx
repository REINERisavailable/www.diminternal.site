import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WebhooksPage() {
    return (
        <main className="flex flex-col items-center justify-center bg-[#030303]">
            <HeroGeometric
                badge="Integrations"
                title1="Webhooks"
                title2="Coming Soon"
                description="Power up your workflows by securely connecting internal events to external systems."
                actionMenu={
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <Link href="/">
                            <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Dashboard
                            </Button>
                        </Link>
                    </div>
                }
            />
        </main>
    );
}
