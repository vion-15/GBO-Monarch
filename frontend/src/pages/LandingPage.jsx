import Header from "../components/Header";
import { Play, ArrowRight, Sparkles, Box, Target, FileBraces, Share } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";

export default function LandingPage() {

    const mainFeatures = [
        {
            icon: <Box className="w-12 h-12" />,
            title: "Smart Artifact Inventory",
            desc: "Easily track and manage all your artifacts in one clean interface.",
            delay: 0,
        },

        {
            icon: <Target className="w-12 h-12" />,
            title: "Real-Time Damage Calculator",
            desc: "See exactly how much damage your burst will do before even opening the game.",
            delay: 0.2,
        },

        {
            icon: <Sparkles className="w-12 h-12" />,
            title: "Algorithmic Optimizer",
            desc: "Let our engine instanly find the mathematically perfect artifact combination from your inventory.",
            delay: 0.4,
        },
    ];

    const bonusFeatures = [
        {
            icon: <FileBraces className="w-12 h-12" />,
            title: "Auto-Import (Painless Data Entry)",
            desc: "Don't waste time typing. Instantly import hundreds of artifacts using the GOOD (Genshin Open Object Description) format from third-party scanners.",
            delay: 0.6,
        },

        {
            icon: <Share className="w-12 h-12" />,
            title: "Export & Flex Your Build",
            desc: "Generate premium, beautifully designed build cards with a single click. Ready to be shared on Discord, Reddit, or your favorite community.",
            delay: 0.8,
        },
    ]

    return (
        <main className='min-h-screen bg-linear-to-b from-surface-base via-surface-elevated to-surface-highlight'>
            {/* Header */}
            <Header />

            {/* section: Hero */}
            <section className='mx-auto px-6 py-20 max-w-7xl md:py-32'>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className='text-white font-bold text-5xl md:text-7xl mb-6 leading-tight'>Stop Guessing.
                            <br />
                            <span className="text-transparent bg-clip-text 
                            bg-linear-to-r from-accent-primary to-accent-secondary">Start Hitting Harder.</span>
                        </h1>
                        <p className="text-gray-300 text-xl mb-8 leading-relaxed">The ultimate artifact management and damage calculation engine for Genshin Impact.
                            Maximize your character's potential with math, not luck.</p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="px-8 py-4 bg-linear-to-r 
                            from-accent-primary to-accent-secondary text-surface-base rounded-lg font-bold flex items-center justify-center gap-2
                            hover:shadow-2xl hover:shadow-accent-primary/50 transition-all group">
                                Get Started - It's Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center gap-2 border-2 border-accent-primary 
                            text-accent-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-primary/10 transition-all">
                                <Play className="w-5 h-5" />
                                View Demo
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-accent-primary/30 shadow-2xl shadow-accent-primary/20">
                            <div className="absolute inset-0 bg-linear-to-br from-accent-primary/20 to-transparent"></div>
                            <div className="bg-surface-highlight p-8 flex justify-center items-center aspect-video">
                                <div className="text-center">
                                    <Sparkles className="w-16 h-16 text-accent-primary mb-4 mx-auto" />
                                    <p className="text-gray-400">Dashboard Preview</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 inset-0 bg-linear-to-r from-accent-primary to-accent-secondary blur-3xl opacity-20 scale-90"></div>
                    </motion.div>
                </div>
            </section>

            {/* feature section */}
            <section id="feature" className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything You Need To Perfect Your Build</h2>
                    <p className="text-xl text-gray-400">Powerful tools designed for serious Genshin players</p>
                </motion.div>
                <div className="flex flex-col gap-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-accent-primary/20 to-transparent rounded-2xl 
                            blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative bg-linear-to-br from-surface-highlight to-surface-elevated p-8 rounded-2xl border 
                            border-white/10 hover:border-accent-primary/50 transition-all h-full">
                                    <div className="w-16 h-16 bg-linear-to-br from-accent-primary to-accent-secondary rounded-xl flex 
                                items-center justify-center text-surface-base mb-6 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
                        {bonusFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-accent-primary/20 to-transparent rounded-2xl 
                            blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative bg-linear-to-br from-surface-highlight to-surface-elevated p-8 rounded-2xl border 
                            border-white/10 hover:border-accent-primary/50 transition-all h-full">
                                    <div className="w-16 h-16 bg-linear-to-br from-accent-primary to-accent-secondary rounded-xl flex 
                                items-center justify-center text-surface-base mb-6 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-20 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-accent-primary to-accent-secondary opacity-10"></div>
                    <div className="relative border border-accent-primary/30 bg-linear-to-br from-surface-highlight 
                    to-surface-elevated p-12 md:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to be Strongest Player Ever?</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands players who've already optimized their builds
                        </p>
                        <button className="px-12 py-5 bg-linear-to-r from-accent-primary to-accent-secondary 
                        text-surface-base font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-accent-primary/50 transition-all 
                        hover:scale-105">Create Your Account</button>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
