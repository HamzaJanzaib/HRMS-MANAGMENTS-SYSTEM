import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
    }
    return (
        <>
            <div className={cn("flex max-w-lg w-full items-center justify-center min-h-screen ")}>
                <div className={cn("w-full  space-y-8")}>
                    <div onClick={() => {
                        navigate('/login')
                    }} className={cn("flex cursor-pointer items-center mb-4 text-[16px]")}>
                        <ChevronLeft size={18} /> Back
                    </div>
                    {/* Welcome Text */}
                    <div>
                        <h5 className={cn("text-2xl font-bold flex items-center gap-2")}>
                            Forgot Password <span role="img" aria-label="wave">🔑</span>
                        </h5>
                        <p className={cn("text-gray-400 text-sm mt-1")}>Enter your registered email address. we’ll send you a code to reset your password.</p>
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
                            />
                        </div>

                        <Button
                            type="submit"
                            className={cn("w-full cursor-pointer font-semibold")}
                        >
                            {
                                loading ? <>loading...</> : <>Send</>
                            }
                        </Button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default ForgotPassword