import { Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
    return (
        <header className='border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-header-primary/80'>
            <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
                <div className='flex items-center gap-12'>
                    {/* Logo + Nama */}
                    <Link to="/">
                        <div className='flex gap-2 items-center'>
                            <div className='bg-linear-to-br from-bg-yellow to-bg-orange w-8 h-8 flex items-center rounded-lg 
                            justify-center'>
                                <Sparkles className='w-5 h-5 text-header-text-primary' />
                            </div>
                            <span className='text-xl font-bold text-white'>GBO</span>
                        </div>
                    </Link>

                    {/* Navigasi */}
                    <nav className='hidden md:flex items-center gap-5'>
                        <a href="#feature" className='text-gray-300 hover:text-white transition-colors'>Features</a>
                        <Link to="/howitworks" className='text-gray-300 hover:text-white transition-colors'>How It Works</Link>
                        <Link to="/faq" className='text-gray-300 hover:text-white transition-colors'>FAQ</Link>
                    </nav>
                </div>

                {/* Login + Register */}
                <div className='flex items-center gap-4'>
                    <Link to="/login">
                        <button className='text-white hover:text-bg-yellow px-5 py-2 transition-colors'>
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className='px-6 py-2 bg-linear-to-br from-bg-yellow to-bg-orange rounded-lg 
                        hover:shadow-lg hover:shadow-bg-yellow/50 transition-all font-semibold'>
                            Sign Up for Free
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
