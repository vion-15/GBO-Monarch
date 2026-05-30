import { Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export default function Header() {

    const [hamburger, setHamburger] = useState(false);

    return (
        <header className='border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-surface-base/80'>
            <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
                <div className='flex items-center gap-12'>
                    {/* Logo + Nama */}
                    <Link to="/">
                        <div className='flex gap-2 items-center'>
                            <div className='bg-linear-to-br from-accent-primary to-accent-secondary w-8 h-8 flex items-center rounded-lg 
                            justify-center'>
                                <Sparkles className='w-5 h-5 text-surface-base' />
                            </div>
                            <span className='text-xl font-bold text-white'>GBO</span>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className='hidden md:flex items-center gap-5'>
                        <a href="#feature" className='text-gray-300 hover:text-white transition-colors'>Features</a>
                        <Link to="/how-it-works" className='text-gray-300 hover:text-white transition-colors'>How It Works</Link>
                        <Link to="/faq" className='text-gray-300 hover:text-white transition-colors'>FAQ</Link>
                    </nav>
                </div>

                {/* Login + Register */}
                <div className='hidden md:flex items-center gap-4'>
                    <Link to="/login">
                        <button className='text-white hover:text-accent-primary px-5 py-2 transition-colors'>
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className='px-6 py-2 bg-linear-to-br from-accent-primary to-accent-secondary rounded-lg 
                        hover:shadow-lg hover:shadow-accent-primary/50 transition-all font-semibold'>
                            Sign Up for Free
                        </button>
                    </Link>
                </div>

                {/* Burger Button */}
                <div className='md:hidden'>
                    <button className='bg-linear-to-br from-accent-primary to-accent-secondary p-2 rounded-md hover:shadow-lg 
                    hover:shadow-accent-primary/50 transition-all'
                        onClick={() => setHamburger(prev => !prev)}
                    >
                        <GiHamburgerMenu className='w-5 h-5' />
                    </button>
                </div>
            </div>

            {/* hamburger menu */}
            {hamburger && (
                <div className='absolute top-full w-full left-0 md:hidden backdrop-blur-xl bg-surface-base p-4'>
                    <nav className='flex flex-col items-center gap-2 mb-2'>
                        <a href="#features" className='text-gray-300 hover:text-white transition-colors'>Feature</a>
                        <Link to="/how-it-works" className='text-gray-300 hover:text-white transition-colors'>How It Works</Link>
                        <Link to="/faq" className='text-gray-300 hover:text-white transition-colors'>FAQ</Link>
                    </nav>
                    <hr className='text-white' />
                    <div className='flex flex-col items-center'>
                        <Link to="/login">
                            <button className='text-white hover:text-accent-primary px-5 py-2 transition-colors'>
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className='px-6 py-2 bg-linear-to-br from-accent-primary to-accent-secondary rounded-lg 
                        hover:shadow-lg hover:shadow-accent-primary/50 transition-all font-semibold'>
                                Sign Up for Free
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
