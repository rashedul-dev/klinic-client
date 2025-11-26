import LoginForm from "@/components/login-form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowLeft } from "lucide-react";
import Link from "next/link";

const LoginPage = async ({ searchParams }: { searchParams?: Promise<{ redirect?: string }> }) => {
  const params = (await searchParams) || {};
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden p-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Link
        href="/"
        className="absolute top-8 left-8 text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <Card className="w-full max-w-md border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl shadow-primary/5">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <LoginForm redirect={params.redirect} />
      </Card>
    </div>
  );
};
export default LoginPage;
