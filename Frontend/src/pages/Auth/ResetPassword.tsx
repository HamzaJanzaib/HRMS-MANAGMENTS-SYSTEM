import { Logo, welcomback } from "@/assets/assest"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const { Token } = useParams();
    console.log('====================================');
    console.log(Token);
    console.log('====================================');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setShowPopup(true);
        setLoading(false)
    }

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
                            Reset Password
                        </h5>
                        <p className={cn("text-gray-400 text-sm mt-1")}>Please enter your new password</p>
                    </div>
                    {/* Login Form */}
                    <form onSubmit={onSubmit} className={cn("space-y-5  mt-6")}>
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
                        <div>
                            <Label className={cn("block text-xs text-primary mb-1")} htmlFor="password">
                                Conform Password
                            </Label>
                            <div className={cn("relative")}>
                                <Input
                                    id="conformpassword"
                                    type={showConformPassword ? "text" : "password"}
                                    value={conformPassword}
                                    placeholder="Min 6 Chracters"
                                    onChange={({ target }) => setConformPassword(target.value)}
                                    className={cn("w-full pr-10")}
                                />
                                <Button
                                    type="button"
                                    tabIndex={-1}
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        setShowConformPassword(!showConformPassword)
                                    }}
                                    className={cn("absolute inset-y-0 right-2 flex items-center text-gray-400")}
                                >
                                    {
                                        showConformPassword ? <Eye /> : <EyeClosed />
                                    }
                                </Button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className={cn("w-full cursor-pointer font-semibold")}
                        >
                            {
                                loading ? <>loading...</> : <>Reset</>
                            }
                        </Button>
                    </form>
                </div>
            </div >

            {showPopup && (
                <div onClick={(e) => {
                    e.stopPropagation();
                    setShowPopup(false)
                }} className="fixed inset-0 flex items-center justify-center bg-gray-400/40 bg-opacity-30 z-50">
                    <SuccessModel />
                </div>
            )}
        </>
    )
}

export default ResetPassword


const SuccessModel = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center">
                <img
                    src={welcomback}
                    alt="Success"
                    className="w-16 h-16 mb-4"
                />
                <h5 className="text-xl font-bold mb-2 text-center">Password Update<br />Successfully</h5>
                <p className="text-gray-500 text-sm mb-6 text-center">
                    Your password has been updated successfully
                </p>
                <Button
                    className="w-full"
                    onClick={() => {
                        navigate('/login')
                    }}
                >
                    Back to Login
                </Button>
            </div>
        </>
    )
}