import Link from 'next/link';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import logoImg from '@/assets/icon.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
        <header className={classes.header}>
        <Link className = {classes.logo} href="/05-onwards-foodies-starting-project/public">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        My.News 
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href = "/meals"> Browse News</NavLink>
                </li>
                <li>
                   <NavLink href = "/community">Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
    )
}