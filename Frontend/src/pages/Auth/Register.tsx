import { Logo } from "@/assets/assest"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppContext } from "@/context/AppContext"
import { cn } from "@/lib/utils"
import { register } from "@/services/Auth/Register"
import type { Response } from "@/types/Types"
import { Label } from "@radix-ui/react-label"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const { navigate, toast } = useAppContext();


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const registerDetails = {
      username,
      email,
      password
    };

    try {
      const res = await register(registerDetails) as Response;
      if (res.success === true) {
        navigate('/login');
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={cn("flex max-w-lg w-full items-center justify-center min-h-screen ")}>
        <div className={cn("w-full  space-y-8")}>
          <div className={cn("flex items-center gap-3 mb-6")}>
            <div className={cn("w-10 h-10  rounded-full flex items-center justify-center")}>
              <img src={Logo} alt="Logo" className={cn("w-full h-full")} />
            </div>
            <h4 className={cn("text-2xl font-bold text-gray-900")}>HRMS</h4>
          </div>
          {/* Welcome Text */}
          <div>
            <h5 className={cn("text-2xl font-bold flex items-center gap-2")}>
              Create Account <span role="img" aria-label="wave">👋</span>
            </h5>
            <p className={cn("text-gray-400 text-sm mt-1")}>Please register to continue</p>
          </div>
          {/* Login Form */}
          <form onSubmit={onSubmit} className={cn("space-y-5  mt-6")}>
            <div>
              <Label className={cn("block text-xs text-primary mb-1")} htmlFor="email">
                User Name
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                placeholder="Hamza janzaib"
                onChange={({ target }) => setUsername(target.value)}
                className={cn("w-full")}
              />
            </div>
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

            <Button
              type="submit"
              className={cn("w-full cursor-pointer font-semibold")}
            >
              {
                loading ? <>loading...</> : <>Register</>
              }
            </Button>
          </form>
          <p className="font-extralight text-[14px] text-gray-400">Alrady have an account?<span onClick={() => {
            navigate('/login')
          }} className="text-primary underline-offset-2 hover:underline ml-2">Login</span></p>

        </div>
      </div >
    </>
  )
}

export default Register