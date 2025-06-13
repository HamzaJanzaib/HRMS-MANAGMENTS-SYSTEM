import { Logo } from "@/assets/assest"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememerMe, setRememerMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  }

  return (
    <>
      <div className={cn("flex max-w-lg w-full items-center justify-center min-h-screen ")}>
        <div className={cn("w-full  space-y-8")}>
          <div className={cn("flex items-center gap-3 mb-6")}>
            <div className={cn("w-10 h-10  rounded-full flex items-center justify-center")}>
              <img src={Logo} alt="Logo" className={cn("w-full h-full")} />
            </div>
            <h4 className={cn("text-2xl font-bold text-foreground")}>HRMS</h4>
          </div>
          {/* Welcome Text */}
          <div>
            <h5 className={cn("text-2xl font-bold flex items-center gap-2")}>
              Welcome <span role="img" aria-label="wave">👋</span>
            </h5>
            <p className={cn("text-gray-400 text-sm mt-1")}>Please login here</p>
          </div>
          {/* Login Form */}
          <form onSubmit={onSubmit} className={cn("space-y-5  mt-6")}>
            <div>
              <Label className={cn("block text-xs text-primary mb-1")} htmlFor="email">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="HamzaJanzaib@gmail.com"
                onChange={({ target }) => setEmail(target.value)}
                className={cn("w-full")}
                autoComplete="email"
              />
            </div>
            <div>
              <Label className={cn("block text-xs text-primary mb-1")} htmlFor="password">
                Password
              </Label>
              <div className={cn("relative")}>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Min 6 Chracters"
                  onChange={({ target }) => setPassword(target.value)}
                  className={cn("w-full pr-10")}
                  autoComplete="current-password"
                />
                <Button
                  type="button"
                  tabIndex={-1}
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                  className={cn("absolute inset-y-0 right-2 flex items-center text-gray-400")}
                >
                  {
                    showPassword ? <Eye /> : <EyeClosed />
                  }
                </Button>
              </div>
            </div>
            <div className={cn("flex items-center justify-between")}>
              <Label className={cn("flex items-center gap-2 text-sm font-medium text-gray-700")}>
                <Checkbox
                  className={cn("accent-primary w-4 h-4 rounded border-gray-300")}
                  checked={rememerMe}
                  onCheckedChange={() => setRememerMe(!rememerMe)}
                />
                Remember Me
              </Label>
              <Link to="/forget-password" className={cn("text-primary text-xs hover:underline")}>
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              className={cn("w-full cursor-pointer font-semibold")}
            >
              {
                loading ? <>loading...</> : <>Login</>
              }
            </Button>
          </form>
          <p className="font-extralight text-[14px] text-gray-400">don't have an account?<span onClick={() => {
            navigate('/register')
          }} className="text-primary underline-offset-2 hover:underline ml-2">Register</span></p>

        </div>
      </div >
    </>
  )
}

export default Login