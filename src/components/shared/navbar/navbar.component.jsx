// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Link } from "react-router-dom";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

// Data
import { NAVBAR_ITEMS as navbarItems } from "../../../data";

// Styles
import "./navbar.styles.css";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navbar Navigate Funtion
  const handleNavigate = (fullPath, e) => {
    e.preventDefault();
    const [to, id] = fullPath.split("#");

    setActiveLink(fullPath);
    if (!id) navigate(to);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Rendered Navbar Items
  const renderedNavbarItems = navbarItems.map(({ label, to }, i) => (
    <NavbarItem
      key={i}
      className="navbar-item data-[active=true]:font-normal"
      data-active={activeLink === to}
    >
      <Link
        className="text-white p-4 px-5 border-b-2 border-transparent text-sm uppercase transition-colors navbar-link font-inter font-medium"
        to={to}
        onClick={handleNavigate.bind(null, to)}
      >
        {label}
      </Link>
    </NavbarItem>
  ));

  // Rendered Navbar Menu Items
  const renderedNavbarMenuItems = navbarItems.map(({ label, to }, i) => (
    <NavbarMenuItem
      key={i}
      className="navbar-menu-item data-[active=true]:font-normal"
      data-active={activeLink === to}
    >
      <Link
        key={i}
        className="text-white border-transparent text-sm uppercase transition-colors font-inter font-medium navbar-link"
        to={to}
        onClick={handleNavigate.bind(null, to)}
      >
        {label}
      </Link>
    </NavbarMenuItem>
  ));

  return (
    <NextNavbar
      className="bg-primary/70"
      classNames={{ wrapper: "lg:p-6 max-w-[1308px]" }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link
          className="text-blue hover:text-blue/80 text-base font-semibold transition-colors uppercase font-inter"
          to="/"
        >
          Home
        </Link>
      </NavbarBrand>

      {/* Mobile Screen Toggle */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          className="text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Large Screen Items*/}
      <NavbarContent className="hidden sm:flex sm:gap-4 lg:gap-7" justify="end">
        {renderedNavbarItems}
      </NavbarContent>

      <NavbarMenu className="gap-7">{renderedNavbarMenuItems}</NavbarMenu>
    </NextNavbar>
  );
};
