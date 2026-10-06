import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenEnquire, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(currentPage === 'about' ? 'about' : 'home');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (currentPage === 'about') {
        setActiveTab('about');
        return;
      }

      // Determine active section based on scroll position
      const sections = ['contact', 'projects', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sec);
          return;
        }
      }
      setActiveTab('home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (e, tabId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (tabId === 'about') {
      if (currentPage !== 'about') {
        if (onNavigate) onNavigate('about');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (tabId === 'home') {
      if (currentPage !== 'home') {
        if (onNavigate) onNavigate('home');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (tabId === 'projects') {
      if (currentPage !== 'home') {
        if (onNavigate) onNavigate('home', 'projects');
      } else {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPage === 'home') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onOpenEnquire) {
      onOpenEnquire();
    }
  };

  return (
    <header
      ref={headerRef}
      className="navbar-root"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: 0,
        background: isScrolled
          ? 'rgba(0, 34, 40, 0.97)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        backdropFilter: isScrolled ? 'blur(20px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(1.4)' : 'none',
        boxShadow: 'none',
        border: 'none',
        borderBottom: 'none',
        outline: 'none',
      }}
    >
      {/* Main Navbar Row */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isScrolled ? '14px 48px' : '22px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            transition: 'opacity 0.2s',
          }}
        >
          <img
            src="/assets/logo/nexus-logo-white.png"
            alt="Nexus Pune"
            style={{
              height: isScrolled ? '40px' : '48px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="navbar-desktop-nav"
        >
          {navLinks.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleNavClick(e, tab.id)}
                className="navbar-link"
                style={{
                  position: 'relative',
                  padding: '8px 20px',
                  fontSize: '13.5px',
                  fontWeight: isActive ? '600' : '500',
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  opacity: isActive ? 1 : 0.8,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  borderRadius: '8px',
                  background: isActive
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'transparent',
                }}
              >
                {tab.label}
                {/* Active indicator dot */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: '#00e5ff',
                      boxShadow: '0 0 8px rgba(0, 229, 255, 0.6)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Contact Button + Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {/* Contact Us Button — Desktop */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="navbar-contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 28px',
              borderRadius: '100px',
              fontSize: '13.5px',
              fontWeight: '600',
              letterSpacing: '0.02em',
              color: isScrolled ? '#002228' : '#ffffff',
              background: isScrolled
                ? '#ffffff'
                : 'rgba(255, 255, 255, 0.12)',
              border: isScrolled
                ? 'none'
                : '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: isScrolled ? 'none' : 'blur(8px)',
              WebkitBackdropFilter: isScrolled ? 'none' : 'blur(8px)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              textDecoration: 'none',
              boxShadow: isScrolled
                ? '0 2px 12px rgba(0,0,0,0.15)'
                : '0 2px 12px rgba(0,0,0,0.1)',
            }}
          >
            Contact Us
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="navbar-mobile-toggle"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {mobileMenuOpen ? (
              <X style={{ width: '20px', height: '20px', strokeWidth: 2.2 }} />
            ) : (
              <Menu style={{ width: '20px', height: '20px', strokeWidth: 2.2 }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className="navbar-mobile-dropdown"
        style={{
          maxHeight: mobileMenuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
          opacity: mobileMenuOpen ? 1 : 0,
          background: 'rgba(0, 30, 36, 0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: mobileMenuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            padding: '12px 24px 16px',
          }}
        >
          {navLinks.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => {
                  handleNavClick(e, tab.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontWeight: isActive ? '600' : '500',
                  fontSize: '14px',
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  transition: 'background 0.2s ease',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#00e5ff',
                        boxShadow: '0 0 8px rgba(0,229,255,0.5)',
                      }}
                    />
                  )}
                  {tab.label}
                </span>
                <ChevronRight style={{ width: '16px', height: '16px', opacity: 0.4 }} />
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={handleContactClick}
            style={{
              marginTop: '8px',
              padding: '13px 0',
              borderRadius: '100px',
              background: '#ffffff',
              color: '#002228',
              fontWeight: '600',
              fontSize: '13.5px',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
