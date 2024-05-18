import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

export function InputOtpCode({
  handleChange,
  value,
}: {
  handleChange: (input: string) => void;
  value: string;
}) {
  return (
    <InputOTP
      value={value}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      onChange={(e) => handleChange(e)}
      maxLength={6}
    >
      <InputOTPGroup className="border-4 rounded-xl border-black">
        <InputOTPSlot
          index={0}
          className="border-black text-black border-4"
        />
        <InputOTPSlot
          index={1}
          className="border-black text-black border-4"
        />
        <InputOTPSlot
          index={2}
          className="border-black text-black border-4"
        />
        <InputOTPSlot
          index={3}
          className="border-black text-black border-4"
        />
        <InputOTPSlot
          index={4}
          className="border-black text-black border-4"
        />
        <InputOTPSlot
          index={5}
          className="border-black text-black border-4"
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
