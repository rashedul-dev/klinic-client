import Footer from "@/components/modules/shared/navbars/public/PublicFooter";
import Navbar from "@/components/modules/shared/navbars/public/PublicNavbar";
import { ThemeProvider } from "@/components/themeProvider";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="klinic-theme">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default CommonLayout;
