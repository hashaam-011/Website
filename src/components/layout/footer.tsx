import Link from "next/link";
import { Linkedin, Facebook, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            NanTech
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering businesses with cutting-edge IT infrastructure, Cloud Solutions, and AI-driven analytics.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                            <li><Link href="/#why-us" className="hover:text-primary transition-colors">Why Us</Link></li>
                            <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>800 3rd St #100, Herndon, VA 20170</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>NanTechHub@gamil.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-4">
                        <h4 className="font-semibold text-white mb-2 md:mb-6">Socials</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="https://www.facebook.com/profile.php?id=61564869365698" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                                    <Facebook className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/n-z-a3856188/" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2024 NanTech. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
