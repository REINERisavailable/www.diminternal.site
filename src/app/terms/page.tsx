import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="flex flex-col items-center justify-center bg-[#030303]">
            <HeroGeometric
                badge="Internal Policy"
                title1="Terms of"
                title2="Service"
                description="This application is strictly for internal DIM use. Unauthorized access, sharing of credentials, or external distribution is prohibited."
                actionMenu={
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                            {[
                                { title: "1. Internal Use Only", body: "DIM employees and authorized contractors only. No external sharing." },
                                { title: "2. Data & Content", body: "All generated content belongs to DIM. Do not upload sensitive personal data." },
                                { title: "3. AI Tools", body: "AI-generated content must be reviewed for accuracy before external publishing." },
                                { title: "4. Account Access", body: "Access may be revoked at any time at management's discretion." },
                            ].map((item) => (
                                <div key={item.title} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                                    <p className="text-white/50 text-sm">{item.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <Link href="/">
                                <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Dashboard
                                </Button>
                            </Link>
                        </div>
                    </div>
                }
            />
        </main>
    );
}
