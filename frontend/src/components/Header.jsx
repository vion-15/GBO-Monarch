import { Sparkles } from 'lucide-react';

export default function Header() {
    return (
        <>
            <div className='border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0e27]/80'>
                <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
                    <div className='flex items-center gap-12'>
                        {/* Logo + Nama */}
                        <div className='flex gap-2 items-center'>
                            <div className='bg-linear-to-br from-[#FFD700] to-[#FFA500] w-8 h-8 flex items-center rounded-lg justify-center'>
                                <Sparkles className='w-5 h-5 text-[#0a0e27]' />
                            </div>
                            <span className='text-xl font-bold text-white'>GBO</span>
                        </div>

                        {/* Navigasi */}
                        <nav className='hidden md:flex items-center gap-5'>
                            <a href="" className='text-gray-300 hover:text-white transition-colors'>Features</a>
                            <a href="" className='text-gray-300 hover:text-white transition-colors'>How It Works</a>
                            <a href="" className='text-gray-300 hover:text-white transition-colors'>FAQ</a>
                        </nav>
                    </div>

                    {/* Login + Register */}
                    <div className='flex items-center gap-4'>
                        <button className='text-white hover:text-[#FFD700] px-5 py-2 transition-colors'>
                            Login
                        </button>
                        <button className='px-6 py-2 bg-linear-to-br from-[#FFD700] to-[#FFA500] rounded-lg 
                        hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all font-semibold'>
                            Sign Up for Free
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
