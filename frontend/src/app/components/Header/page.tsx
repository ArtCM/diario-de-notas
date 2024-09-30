'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../../../../public/assets/logo.webp"
import Link from 'next/link';

import "./style.css"

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const hambMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
      <>
        <header>
            <Link href="/">
                <Image src={Logo} alt="Logo" />
            </Link>

            <div className="hamburger-icon" onClick={hambMenu}>
                <div className={`hamburger-icon__icon-1 ${isOpen ? "a" : ""}`} id="a"></div>
                <div className={`hamburger-icon__icon-2 ${isOpen ? "c" : ""}`} id="b"></div>
                <div className={`hamburger-icon__icon-3 ${isOpen ? "b" : ""}`} id="c"></div>
                <div className="clear"></div>
            </div>
        
            <nav className={isOpen ? "show" : ""}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/alunos">Alunos</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>

            <div className={`shadow ${isOpen ? "slide" : ""}`}></div>
        </header>
      </>
    );
}
