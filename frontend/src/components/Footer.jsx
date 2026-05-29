import { Sparkles } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-[#060914] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-12 gap-12 mb-12">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-linear-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-[#0a0e27]"/>
                            </div>
                            <span className="text-xl font-bold text-white">GBO</span>
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed">The ultimate artifact management and damage calculation engine.</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Not affiliated with or endorsed by HoYoverse. Genshin Impact and all related assets are trademarks of Cognosphere PTE. LTD.</p>
                    </div>

                    {/* Column Products */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#feature" className="text-gray-400 hover:text-white transition-colors">Features</a>
                            </li>
                            <li>
                                <a href="optimizerEngine" className="text-gray-400 hover:text-white transition-colors">Optimizer Engine</a>
                            </li>
                            <li>
                                <a href="#artifactImport" className="text-gray-400 hover:text-white transition-colors">Artifact Import</a>
                            </li>
                            <li>
                                <a href="#autoImport" className="text-gray-400 hover:text-white transition-colors">Auto Import</a>
                            </li>
                            <li>
                                <a href="#export" className="text-gray-400 hover:text-white transition-colors">Export</a>
                            </li>
                            <li>
                                <a href="#FAQ" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect & Legal Column */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#discord" className="text-gray-400 hover:text-white transition-colors">Join Discord</a>
                            </li>
                            <li>
                                <a href="#githubRepo" className="text-gray-400 hover:text-white transition-colors">Github Repository</a>
                            </li>
                            <li>
                                <a href="#privacyPolicy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Term of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">© 2026 Genshin Build Optimizer. Built for the community.</p>
                        <div className="flex items-center gap-4">
                            <a href="#github" className="text-gray-500
                            hover:text-white transition-colors" aria-label="github"><FaGithub  className="w-5 h-5"/></a>
                            <a href="#instagram" className="text-gray-500
                            hover:text-white transition-colors" aria-label="instagram"><FaInstagram className="w-5 h-5"/></a>
                            <a href="#x" className="text-gray-500
                            hover:text-white transition-colors" aria-label="x/twitter"><FaSquareXTwitter className="w-5 h-5"/></a>
                            <a href="#threads" className="text-gray-500
                            hover:text-white transition-colors" aria-label="threads"><FaSquareThreads className="w-5 h-5"/></a>
                            <a href="#facebook" className="text-gray-500
                            hover:text-white transition-colors" aria-label="facebook"><FaFacebook className="w-5 h-5"/></a>
                            <a href="#gmail" className="text-gray-500 
                            hover:text-white transition-colors" aria-label="gmail"><SiGmail className="w-5 h-5"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
