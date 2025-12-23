"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Stethoscope, ShoppingBag, GraduationCap } from "lucide-react";

export default function IndustriesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const industries = [
        {
            title: "Government",
            icon: Building2,
            desc: "NanTech provides comprehensive IT support for government agencies, focusing on secure infrastructure management, cybersecurity, and efficient public service platforms. We help streamline operations, enhance data security, and ensure compliance, empowering government bodies to serve citizens effectively in the digital age."
        },
        {
            title: "Healthcare",
            icon: Stethoscope,
            desc: "NanTech provides specialized IT support for the healthcare industry, offering secure and efficient solutions tailored to meet the unique challenges of healthcare providers. From managing electronic health records (EHR) to ensuring compliance with industry regulations, we help healthcare organizations enhance patient care and streamline operations with cutting-edge technology."
        },
        {
            title: "Retail & E-Commerce",
            icon: ShoppingBag,
            desc: "NanTech delivers tailored IT solutions for the retail and e-commerce industry, optimizing online platforms, enhancing customer experiences, and managing supply chains efficiently. We help businesses stay competitive by integrating cutting-edge technology to drive sales, improve operations, and secure customer data."
        },
        {
            title: "Education",
            icon: GraduationCap,
            desc: "NanTech supports the education sector with innovative IT solutions, including e-learning platforms, secure data management, and advanced student information systems. We empower educational institutions to enhance learning experiences, streamline administration, and ensure data security in an increasingly digital world."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            IT Solutions for <span className="text-gradient-primary">Your Business</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Specialized expertise across key sectors to drive innovation and efficiency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                                    <CardContent className="p-10">
                                        <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/20 text-primary">
                                            <item.icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
