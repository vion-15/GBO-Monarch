import Header from "../components/Header";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage() {
    return (
        <div className='min-h-screen bg-linear-to-b from-[#0a0e27] via-[#0f1433] to-[#1a1f4a]'>
            {/* Header */}
            <Header />

            {/* section: Awal */}
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
                            bg-linear-to-r from-[#FFD700] to-[#FFA500]">Start Hiting Harder.</span>
                        </h1>
                        <p className="text-gray-300 text-xl mb-8 leading-relaxed">The ultimate artifact management and damage calculation engine for Genshin Impact.
                            Maximize your character's potential with math, not luck.</p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="px-8 py-4 bg-linear-to-r 
                            from-[#FFD700] to-[#FFA500] text-[#0a0e27] rounded-lg font-bold flex items-center justify-center gap-2
                            hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all group">
                                Get Started - It's Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center gap-2 border-2 border-[#FFD700] 
                            text-[#FFD700] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/10 transition-all">
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
                        <div className="relative rounded-2xl overflow-hidden border border-[#FFD700]/30 shadow-2xl shadow-[#FFD700]/20">
                            <div className="absolute inset-0 bg-linear-to-br from-[#FFD700]/20 to-transparent"></div>
                            <div className="bg-[#1a1f4a] p-8 flex justify-center items-center aspect-video">
                                <div className="text-center">
                                    <Sparkles className="w-16 h-16 text-[#FFD700] mb-4 mx-auto" />
                                    <p className="text-gray-400">Dashboard Preview</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 inset-0 bg-linear-to-r from-[#FFD700] to-[#FFA500] blur-3xl opacity-20 scale-90"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
