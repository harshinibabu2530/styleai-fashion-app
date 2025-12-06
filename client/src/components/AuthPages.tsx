import { useState } from "react";
import { Sparkles, Mail, Lock, User, Eye, EyeOff, ArrowRight, Chrome } from "lucide-react";
import { SiGoogle, SiApple, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import heroImage from "@assets/generated_images/stylish_woman_in_trendy_outfit.png";

interface AuthPagesProps {
  onLogin: () => void;
  onSignUp: () => void;
  onSwitchToSignUp: () => void;
  onSwitchToLogin: () => void;
  isLogin: boolean;
}

export function AuthPages({
  onLogin,
  onSignUp,
  onSwitchToSignUp,
  onSwitchToLogin,
  isLogin,
}: AuthPagesProps) {
  return isLogin ? (
    <LoginPage onLogin={onLogin} onSwitchToSignUp={onSwitchToSignUp} />
  ) : (
    <SignUpPage onSignUp={onSignUp} onSwitchToLogin={onSwitchToLogin} />
  );
}

interface LoginPageProps {
  onLogin: () => void;
  onSwitchToSignUp: () => void;
}

export function LoginPage({ onLogin, onSwitchToSignUp }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, rememberMe });
    onLogin();
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <img
          src={heroImage}
          alt="Fashion inspiration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Discover Your Perfect Style
          </h2>
          <p className="text-lg text-white/80">
            AI-powered fashion recommendations tailored just for you
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">StyleAI</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to continue your style journey
            </p>
          </div>

          <div className="grid gap-3">
            <Button variant="outline" className="w-full" data-testid="button-google-login">
              <SiGoogle className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full" data-testid="button-apple-login">
              <SiApple className="mr-2 h-4 w-4" />
              Continue with Apple
            </Button>
            <Button variant="outline" className="w-full" data-testid="button-github-login">
              <SiGithub className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
              or continue with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto p-0 text-sm text-primary"
                  data-testid="button-forgot-password"
                >
                  Forgot password?
                </Button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  data-testid="input-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="button-toggle-password"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                data-testid="checkbox-remember"
              />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me for 30 days
              </Label>
            </div>

            <Button type="submit" className="w-full" data-testid="button-login">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Button
              variant="ghost"
              className="h-auto p-0 text-primary"
              onClick={onSwitchToSignUp}
              data-testid="button-switch-to-signup"
            >
              Sign up for free
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

interface SignUpPageProps {
  onSignUp: () => void;
  onSwitchToLogin: () => void;
}

export function SignUpPage({ onSignUp, onSwitchToLogin }: SignUpPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt:", { name, email });
    onSignUp();
  };

  const getPasswordStrength = (pass: string) => {
    if (pass.length === 0) return { strength: 0, label: "" };
    if (pass.length < 6) return { strength: 25, label: "Weak" };
    if (pass.length < 10) return { strength: 50, label: "Fair" };
    if (pass.length < 14 && /[A-Z]/.test(pass) && /[0-9]/.test(pass))
      return { strength: 75, label: "Good" };
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass))
      return { strength: 100, label: "Strong" };
    return { strength: 50, label: "Fair" };
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <img
          src={heroImage}
          alt="Fashion inspiration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Join 10,000+ Fashion Enthusiasts
          </h2>
          <p className="text-lg text-white/80">
            Get personalized outfit recommendations powered by AI
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">StyleAI</span>
            </div>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-muted-foreground mt-2">
              Start your personalized style journey today
            </p>
          </div>

          <div className="grid gap-3">
            <Button variant="outline" className="w-full" data-testid="button-google-signup">
              <SiGoogle className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full" data-testid="button-apple-signup">
              <SiApple className="mr-2 h-4 w-4" />
              Sign up with Apple
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
              or sign up with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  data-testid="input-name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  data-testid="input-signup-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  data-testid="input-signup-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="button-toggle-signup-password"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {password && (
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        passwordStrength.strength <= 25
                          ? "bg-destructive"
                          : passwordStrength.strength <= 50
                          ? "bg-yellow-500"
                          : passwordStrength.strength <= 75
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${passwordStrength.strength}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Password strength: {passwordStrength.label}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="mt-0.5"
                data-testid="checkbox-terms"
              />
              <Label htmlFor="terms" className="text-sm font-normal leading-snug">
                I agree to the{" "}
                <Button variant="ghost" className="h-auto p-0 text-sm text-primary">
                  Terms of Service
                </Button>{" "}
                and{" "}
                <Button variant="ghost" className="h-auto p-0 text-sm text-primary">
                  Privacy Policy
                </Button>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!agreeTerms}
              data-testid="button-signup"
            >
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button
              variant="ghost"
              className="h-auto p-0 text-primary"
              onClick={onSwitchToLogin}
              data-testid="button-switch-to-login"
            >
              Sign in
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
