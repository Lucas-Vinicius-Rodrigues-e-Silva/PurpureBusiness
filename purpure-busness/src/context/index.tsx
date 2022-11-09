import { ReactNode } from "react";
import AuthProvider from "./AuthContext";
import ClientPovider from "./ClientContext";
import ProductPovider from "./ProductsContext";
import SalePovider from "./SalesContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <ProductPovider>
      <SalePovider>
        <ClientPovider>
          <AuthProvider>{children}</AuthProvider>
        </ClientPovider>
      </SalePovider>
    </ProductPovider>
  );
};
