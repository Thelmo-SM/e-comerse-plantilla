// ProductCard.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { useAppContext } from "@/context/AppContext";

// Mock para useAppContext
jest.mock("@/context/AppContext", () => ({
  useAppContext: jest.fn(),
}));

const mockProduct = {
  id: "1",
  image: ["https://example.com/image1.jpg"],
  name: "Camiseta Cool",
  description: "Una camiseta muy fresca",
  offerPrice: 25,
};

describe("ProductCard", () => {
  beforeEach(() => {
    // Mock del contexto para que devuelva moneda
    (useAppContext as jest.Mock).mockReturnValue({
      currency: "$",
    });
  });

  it("muestra el nombre, descripción y precio correctamente", () => {
    render(<ProductCard product={mockProduct} />);

    // Validar que el nombre esté en el documento
    expect(screen.getByText("Camiseta Cool")).toBeInTheDocument();

    // Validar que la descripción aparezca
    expect(screen.getByText("Una camiseta muy fresca")).toBeInTheDocument();

    // Validar que el precio con la moneda se muestre
    expect(screen.getByText("$25")).toBeInTheDocument();
  });

  it("renderiza la imagen principal con alt correcto", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("Imagen de Camiseta Cool");

    expect(image).toBeInTheDocument();

    // Opcionalmente validar que el src contenga parte de la URL original
    expect(image.getAttribute("src")).toContain("example.com/image1.jpg");
  });

  it("renderiza el enlace al detalle del producto", () => {
    render(<ProductCard product={mockProduct} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${mockProduct.id}`);
  });
});
