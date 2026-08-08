"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <nav className="header-nav">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="header-logo"
          >
            <span className="logo-orange">🍊 진제준 밀감농장</span>
          </a>

          {/* PC Menu */}
          <div className="desktop-menu">
            <a href="#home">홈</a>
            <a href="#about">농장소개</a>
            <a href="#products">노지감귤 10kg</a>
            <a href="#contact">문의하기</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={closeMenu}>
              홈
            </a>

            <a href="#about" onClick={closeMenu}>
              농장소개
            </a>

            <a href="#products" onClick={closeMenu}>
              노지감귤 10kg
            </a>

            <a href="#contact" onClick={closeMenu}>
              문의하기
            </a>
          </div>
        )}
      </header>

      <style jsx>{`
        .header-nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-logo {
          text-decoration: none;
          display: block;
        }

        .logo-orange {
          color: #f57c00;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 35px;
          font-size: 18px;
          font-weight: 600;
        }

        .desktop-menu a {
          text-decoration: none;
          color: #333;
          white-space: nowrap;
        }

        .mobile-menu-button {
          display: none;
          border: none;
          background: transparent;
          font-size: 30px;
          cursor: pointer;
          color: #333;
          padding: 4px;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .header-nav {
            padding: 14px 18px;
          }

          .logo-orange {
            font-size: 23px;
            letter-spacing: -1px;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.98);
            border-top: 1px solid #eeeeee;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
          }

          .mobile-menu a {
            padding: 18px 24px;
            text-decoration: none;
            color: #333;
            font-size: 18px;
            font-weight: 600;
            border-bottom: 1px solid #eeeeee;
          }

          .mobile-menu a:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}