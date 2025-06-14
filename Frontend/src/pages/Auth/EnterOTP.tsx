import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppContext } from "@/context/AppContext"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import { useRef, useState } from "react"

const OTP_LENGTH = 6;

const EnterOTP = () => {
    const [loading, setLoading] = useState(false);
    const { navigate } = useAppContext();

    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (!value) return;
        const newOtp = [...otp];
        newOtp[idx] = value[0];
        setOtp(newOtp);
        if (idx < OTP_LENGTH - 1 && inputsRef.current[idx + 1]) {
            inputsRef.current[idx + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
        if (e.key === "Backspace" && !otp[idx] && idx > 0 && inputsRef.current[idx - 1]) {
            inputsRef.current[idx - 1]?.focus();
        }
    };

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
                            Enter OTP
                        </h5>
                        <p className={cn("text-gray-400 text-sm mt-1")}>We have share a code of your registered email address
                            robertallen@example.com</p>
                    </div>
                    {/* Login Form */}
                    <form onSubmit={onSubmit} className={cn("flex flex-col gap-6")}>
                        <div className={cn("flex gap-3")}>
                            {otp.map((digit, idx) => (
                                <Input
                                    key={idx}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    ref={(el: HTMLInputElement | null) => { inputsRef.current[idx] = el; }}
                                    onChange={e => handleChange(e, idx)}
                                    onKeyDown={e => handleKeyDown(e, idx)}
                                    className={cn(
                                        "w-14 h-14 text-center text-xl font-semibold border-2 rounded-lg",
                                        digit
                                            ? "border-primary bg-white"
                                            : "border-gray-200 bg-white"
                                    )}
                                />
                            ))}
                        </div>

                        <Button
                            type="submit"
                            className={cn("w-full cursor-pointer font-semibold")}
                        >
                            {
                                loading ? <>loading...</> : <>Verify</>
                            }
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EnterOTP