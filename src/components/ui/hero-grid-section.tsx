"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Avatar {
    id: number;
    src: string;
    alt: string;
}

const AVATARS: Avatar[] = [];

interface HeroGridSectionProps {
    avatars?: Avatar[];
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    onPrimaryCtaClick?: () => void;
    onSecondaryCtaClick?: () => void;
    className?: string;
}

export function HeroGridSection() {
    const router = useRouter();

    return (
        <HeroGrid
            avatars={AVATARS}
            title="DIM Internal Studio"
            subtitle="The internal hub for beautifully branded social media assets & team marketing tools."
            primaryCtaText="Launch Image Studio"
            secondaryCtaText="Read Internal Wiki"
            onPrimaryCtaClick={() => router.push("/images")}
            onSecondaryCtaClick={() => window.open("/terms", "_self")}
        />
    );
}

export function HeroGrid({
    avatars = AVATARS,
    title,
    subtitle,
    primaryCtaText,
    secondaryCtaText,
    onPrimaryCtaClick,
    onSecondaryCtaClick,
    className,
}: HeroGridSectionProps) {
    return (
        <section className={cn("relative min-h-[calc(800px-var(--header-height))] overflow-hidden pb-10 w-full", className)} >
            <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[--border]" >
                {/* Decorations */}
                <div className="col-span-1 flex h-full items-center justify-center" />
                <div className="col-span-1 flex h-full items-center justify-center border-x border-[--border]" />
                <div className="col-span-1 flex h-full items-center justify-center" />
            </div>

            {/* Gradients */}
            <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[--accent-500-40] blur-[200px]" />
            <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-[--surface-primary] opacity-50 blur-[100px] md:block" />
            <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-[--surface-primary] opacity-50 blur-[100px] md:block" />

            <div className="relative z-10 flex flex-col divide-y divide-[--border] pt-[120px]">
                <div className="flex flex-col items-center justify-end" >
                    <div className="flex items-center gap-3 !border !border-b-0 border-[--border] px-4 py-2 bg-white/50 backdrop-blur-sm" >
                        {/* Avatars */}
                        <div className="flex -space-x-3" >
                            {
                                avatars.map((avatar) => (
                                    <img
                                        key={avatar.id}
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        className="h-8 w-8 rounded-full border border-[--border] bg-white object-cover"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-4 px-2 py-8 sm:px-16 lg:px-24" >
                        <img src="/logo.png" alt="DIM Logo" className="w-16 h-16 object-contain mb-4 drop-shadow-sm" />
                        <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-bold leading-[1.1] tracking-[-1.44px] text-[--text-primary] md:tracking-[-2.16px]" >
                            {title}
                        </h1>
                        <h2 className="text-md max-w-2xl text-pretty text-center text-[--text-tertiary] sm:text-lg" >
                            {subtitle}
                        </h2>
                    </div>
                </div>

                <div className="flex items-start justify-center px-8.25 sm:px-24 border-t border-[--border]" >
                    <div className="flex w-full max-w-[80vw] flex-col items-center justify-start sm:flex-row md:!max-w-[500px]" >
                        <Button
                            className="!h-14 flex-col items-center justify-center rounded-none !text-base flex w-full max-w-sm:!border-x-0 !border-x !border-y-0 border-[--border] !bg-white/80 backdrop-blur-xl transition-colors duration-150 hover:!bg-slate-50 cursor-pointer text-slate-800"
                            variant="outline"
                            onClick={onPrimaryCtaClick}
                        >
                            {primaryCtaText}
                        </Button>
                        <Button
                            className="max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 border-[--border] bg-blue-600 backdrop-blur-xl transition-colors duration-150 hover:bg-blue-700 !h-14 flex-col items-center justify-center rounded-none !text-base cursor-pointer text-white sm:-ml-px"
                            onClick={onSecondaryCtaClick}
                        >
                            {secondaryCtaText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
