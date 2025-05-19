import React, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header id="header">
            <div className="container header-container">
                <div className="logo">Connect<span>Pro</span></div>
                <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
                <nav>
                    <ul className={menuOpen ? 'show' : ''}>
                        <li><a href="#internet">Internet</a></li>
                        <li><a href="#cable">Cable TV</a></li>
                        <li><a href="#bundles">Bundles</a></li>
                        <li><a href="#promotions">Promotions</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
