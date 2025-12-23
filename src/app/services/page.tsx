"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Lock, Server, Cpu, HeartHandshake, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const services = [
        { title: "Cloud Solutions", icon: Cloud, desc: "Our cloud solutions are designed to enhance your business operations by providing scalable and secure cloud infrastructure. Whether you need to migrate to the cloud or optimize your existing cloud environment, we have the expertise to make it happen.", linkText: "Explore More" },
        { title: "Managed IT Services", icon: Server, desc: "With our managed IT services, you can offload the burden of IT management and maintenance, allowing your internal teams to focus on strategic initiatives. We proactively monitor, manage, and support your IT environment to keep your business running smoothly.", linkText: "Discover More" },
        { title: "Disaster Recovery", icon: ShieldCheck, desc: "Our disaster recovery solutions ensure that your critical data and systems are protected and recoverable in the event of a disaster. We help you develop robust recovery strategies to minimize downtime and keep your business operational.", linkText: "Learn More" },
        { title: "Cloud Desktop", icon: Cpu, desc: "Empower your workforce with our cloud desktop solutions that enable secure and flexible remote access to essential business applications and data. Experience the freedom of working from anywhere while maintaining the highest level of security.", linkText: "Get Started" },
        { title: "Network Solutions", icon: Lock, desc: "Our network solutions are designed to optimize your network infrastructure for superior performance, reliability, and security. Whether you need network design, implementation, or optimization, we have the expertise to meet your networking needs.", linkText: "Explore Solutions" },
        { title: "Support Consulting", icon: HeartHandshake, desc: "Our support consulting services provide you with expert guidance and support to address your IT challenges and enhance your technology investments. We work closely with you to develop customized IT strategies that align with your business goals.", linkText: "Get Consultation" },
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
                            Our Comprehensive <span className="text-gradient-primary">Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            End-to-end technology solutions tailored to your business needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-white/5 bg-white/5 hover:bg-white/10 transition-colors group flex flex-col">
                                    <CardContent className="p-8 flex flex-col items-start gap-4 flex-1">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                            {service.desc}
                                        </p>
                                        <div className="mt-auto pt-4">
                                            <span className="text-sm font-medium text-primary group-hover:text-white transition-colors flex items-center cursor-pointer">
                                                {service.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                                            </span>
                                        </div>
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
