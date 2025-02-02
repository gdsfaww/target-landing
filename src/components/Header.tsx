"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Блог', href: '#blog' },
    { title: 'Кейсы', href: '#cases' },
    { title: 'Тарифы', href: '#pricing' },
    { title: 'Контакты', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link href="/" className="relative z-50">
            <span className="text-xl font-semibold">
              VK<span className="text-[var(--primary)]">Target</span>
            </span>
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <button className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-lg
                           hover:bg-[var(--primary)]/90 transition-all text-sm font-medium">
              Получить консультацию
            </button>
          </div>

          {/* Мобильная кнопка */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden w-10 h-10 flex items-center justify-center"
          >
            <div className={`hamburger ${isOpen ? 'active' : ''}`}>
              <span className={`line ${isOpen ? 'rotate-45 translate-y-1.5' : ''} 
                block w-6 h-0.5 bg-current transition-all`} />
              <span className={`line ${isOpen ? 'opacity-0' : 'opacity-100'} 
                block w-6 h-0.5 bg-current my-1 transition-all`} />
              <span className={`line ${isOpen ? '-rotate-45 -translate-y-1.5' : ''} 
                block w-6 h-0.5 bg-current transition-all`} />
            </div>
          </button>

          {/* Мобильное меню */}
          <div className={`
            fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="container-custom pt-24">
              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg
                               hover:bg-[var(--primary)]/90 transition-all text-sm font-medium mt-4">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
