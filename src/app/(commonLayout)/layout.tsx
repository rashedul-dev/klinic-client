import Footer from "@/components/modules/shared/navbars/public/PublicFooter";
import Navbar from "@/components/modules/shared/navbars/public/PublicNavbar";
import { ThemeProvider } from "@/components/themeProvider";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="klinic-theme">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default CommonLayout;
