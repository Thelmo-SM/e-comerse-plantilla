"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import ModalForm from "@/components/UI/Modals/ModalForm";
import { useModalForm } from "@/hooks/useModalForm";
import AuthSwitcher from "@/features/auth/components/AuthSwitcher";
import { Search, User, User2Icon, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { router } = useAppContext();
  const { isOpen, openModal, closeModal } = useModalForm();
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? 'text-blue-900 font-semibold relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-2/3 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300'
      : 'text-gray-700 hover:text-blue-900 relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-900 hover:after:w-2/3 after:transition-all after:duration-300';

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50 shadow-md px-6 md:px-16 lg:px-32 py-3 flex items-center justify-between text-gray-800">
        {/* Logo */}
        <h1 className="font-bold text-lg text-blue-900">E-COMMERCE</h1>

        {/* Links de navegación */}
        <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
          <Link href="/" className={`${isActive("/")} transition`}>
            Home
          </Link>
          <Link
            href="/products"
            className={`${isActive("/products")} transition`}
          >
            Productos
          </Link>
          <Link href="/about" className={`${isActive("/about")} transition`}>
            About Us
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")} transition`}
          >
            Contact
          </Link>
          <Link
            href="/cart"
            className={`flex pl-0.5 ${isActive("/cart")} transition`}
          >
            <ShoppingCart className="mr-1" /> Carrito
          </Link>
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-md hover:bg-blue-100 transition cursor-pointer"
          >
            Seller Dashboard
          </button>
        </div>

        {/* Buscador + botón de cuenta (desktop) */}
        <ul className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="pl-10 pr-4 py-1.5 rounded-md bg-blue-50 border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900 shadow-sm"
            />
          </div>

          <button
            onClick={openModal}
            className="flex items-center gap-2 hover:text-gray-900 transition text-sm cursor-pointer"
          >
            <User className="w-5 h-5" />
            Account
          </button>
        </ul>

        {/* Mobile */}
        <div className="flex items-center md:hidden gap-3">
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
          >
            Seller Dashboard
          </button>
          <button
            onClick={openModal}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <User2Icon />
            Account
          </button>
        </div>
      </nav>

      {/* Modal de autenticación */}
      <ModalForm isOpens={isOpen} closeModal={closeModal}>
        <AuthSwitcher />
      </ModalForm>
    </>
  );
};

export default Navbar;
