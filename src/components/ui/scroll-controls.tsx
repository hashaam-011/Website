"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollControls() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
                {show && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            className="rounded-full w-12 h-12 p-0 shadow-lg border border-white/20 bg-black/80 backdrop-blur-md"
                            onClick={scrollToTop}
                        >
                            <ArrowUp className="w-6 h-6" />
                        </Button>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                >
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full w-12 h-12 p-0 shadow-lg border border-white/20 bg-black/80 backdrop-blur-md"
                        onClick={scrollToBottom}
                    >
                        <ArrowDown className="w-6 h-6" />
                    </Button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
