"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Headset, ExternalLink } from 'lucide-react'

const Nav = () => {
    const pathname = usePathname()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const mobileMenuRef = useRef(null)

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsDropdownOpen(false)
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && !e.target.closest('.mobile-menu-button')) setIsMobileMenuOpen(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        if (isMobileMenuOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
        return () => { document.removeEventListener('mousedown', handleClickOutside); document.body.style.overflow = 'auto' }
    }, [isMobileMenuOpen])

    useEffect(() => { setTimeout(() => setIsMobileMenuOpen(false), 100) }, [pathname])

    const active = (href) => pathname === href || (href !== '/' && pathname.startsWith(href))

    const navLinks = [
        { href: '/about', label: 'Who We Are' },
        { href: null, label: 'Study', hasDropdown: true },
        { href: '/services', label: 'Our Services' },
        { href: '/events', label: 'Events' },
        { href: '/blog', label: 'Blogs' },
        { href: 'https://www.sports.britishauc.com', label: 'Sports', external: true },
        { href: 'https://www.britishaucunipathway.com/', label: 'Colleges', external: true },
    ]

    const studyLinks = [
        { href: '/study/study-in-uk', label: 'Study in UK' },
        { href: '/study/study-in-usa', label: 'Study in USA' },
        { href: '/study/study-in-canada', label: 'Study in Canada' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* White nav */}
            <div className="bg-white border-b border-[#e8ecf0]">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <nav className="flex items-center justify-between h-14 lg:h-16">
                        {/* Logo: grid + text */}
                        <Link href="/" className="flex-shrink-0 relative z-50">
                            <Image src="/logo.png" alt="British AUC" width={160} height={48} className="h-10 w-auto" priority />
                        </Link>

                        {/* Nav links */}
                        <div className="hidden lg:flex items-center justify-end flex-1 gap-1">
                            <ul className="flex items-center gap-0.5">
                                {navLinks.map((item) => {
                                const { href, label, hasDropdown } = item
                                return (
                                    <li key={label} className={hasDropdown ? 'relative' : ''} ref={hasDropdown ? dropdownRef : null}>
                                        {hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setIsDropdownOpen(prev => !prev)}
                                                    className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium text-[#4A5A72] hover:text-[#0A1628] transition-colors ${
                                                        active('/study') ? 'text-[#0A1628]' : ''
                                                    }`}
                                                >
                                                    Study
                                                    <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-white border border-[#e8ecf0] shadow-lg py-2 min-w-[170px] z-30">
                                                        {studyLinks.map(({ href, label }) => (
                                                            <Link key={href} href={href} className="block px-5 py-2.5 text-sm font-medium text-[#4A5A72] hover:text-[#0A1628] hover:bg-gray-50 transition-colors">
                                                                {label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={href}
                                                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                className={`inline-flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors ${
                                                    active(href)
                                                        ? 'text-[#1a56ff]'
                                                        : 'text-[#4A5A72] hover:text-[#0A1628]'
                                                }`}
                                            >
                                                {label}
                                                {item.external && <ExternalLink size={12} className="opacity-50" />}
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                            </ul>
                        </div>

                        {/* Right actions */}
                        <div className="hidden lg:flex items-center gap-2.5 ml-6">
                            <Link href="/contact">
                                <button className="px-5 py-2 text-[14px] font-semibold text-white bg-[#1a56ff] hover:bg-[#1447d1] transition-colors flex items-center gap-2">
                                    <Headset size={16} />
                                    Contact
                                </button>
                            </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button className={`lg:hidden mobile-menu-button relative z-50 ${isMobileMenuOpen ? 'pointer-events-none opacity-0' : ''}`} onClick={() => { setIsMobileMenuOpen(prev => !prev); setIsMobileDropdownOpen(false) }} aria-label="Toggle menu">
                            <Menu size={22} className="text-[#0A1628]" />
                        </button>
                    </nav>
                </div>
            </div>

            {/* Mobile menu - full screen */}
            <div ref={mobileMenuRef} className={`fixed inset-0 w-full h-full bg-white z-[60] transform transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full overflow-y-auto">
                    {/* Top bar: logo + close button */}
                    <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#e8ecf0]">
                        <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image src="/logo.png" alt="British AUC" width={160} height={48} className="h-10 w-auto" />
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2" aria-label="Close menu">
                            <X size={22} className="text-[#0A1628]" />
                        </button>
                    </div>

                    {/* Nav links */}
                    <div className="flex-1 px-5 py-6">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((item) => {
                                const { href, label, hasDropdown, external } = item
                                return (
                                <li key={label}>
                                    {hasDropdown ? (
                                        <>
                                            <button onClick={() => setIsMobileDropdownOpen(prev => !prev)} className={`flex items-center gap-1.5 w-full py-3 text-[15px] font-medium text-[#4A5A72] ${active('/study') ? 'text-[#1a56ff]' : ''}`}>
                                                Study
                                                <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isMobileDropdownOpen && (
                                                <ul className="ml-4 space-y-1 pb-2">
                                                    {studyLinks.map(({ href, label }) => (
                                                        <li key={href}><Link href={href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 text-[14px] text-[#4A5A72] hover:text-[#1a56ff] transition-colors">{label}</Link></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : external ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-3 text-[15px] font-medium text-[#4A5A72] hover:text-[#0A1628] transition-colors">
                                            {label}
                                            <ExternalLink size={13} className="opacity-50" />
                                        </a>
                                    ) : (
                                        <Link href={href} onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 text-[15px] font-medium ${active(href) ? 'text-[#1a56ff]' : 'text-[#4A5A72] hover:text-[#0A1628] transition-colors'}`}>
                                            {label}
                                        </Link>
                                    )}
                                </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Reach out section + buttons */}
                    <div className="px-5 pb-8">
                        <div className="bg-[#0A1628] px-5 py-5 mb-6">
                            <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.08em] mb-3">Reach Out to Us</p>
                            <p className="text-[12px] text-white/70 leading-relaxed mb-4">
                                Are you or your child considering studying abroad? Give us a call or send an email — we&apos;re here to help.
                            </p>
                            <div className="space-y-2 text-[12px]">
                                <a href="tel:+447375654996" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-[#0066FF]" />
                                    +44 7375 654996 <span className="text-white/50">(International)</span>
                                </a>
                                <a href="tel:+2348059000097" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-[#0066FF]" />
                                    +234 (0) 805 900 0097 <span className="text-white/50">(Africa)</span>
                                </a>
                                <a href="mailto:admin@britishauc.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-[#0066FF]" />
                                    admin@britishauc.com
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full py-3.5 text-sm font-semibold text-white bg-[#1a56ff] hover:bg-[#1447d1] transition-colors flex items-center justify-center gap-2"><Headset size={16} />Contact</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setIsMobileMenuOpen(false)} />}
        </header>
    )
}

export default Nav