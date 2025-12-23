import { Rocket } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[50] flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 animate-pulse">
                    <Rocket className="w-8 h-8 text-primary animate-bounce" />
                </div>
                <p className="text-muted-foreground text-sm font-medium animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
