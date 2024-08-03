import { FormEvent } from "react";
import InputError from "../../utils/InputError";

interface Props {
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  autoFocus: boolean;
  disabled?: boolean;
  error?: string | undefined;
  label?: string;
  placeholder?: string;
}

export default function SecondaryInput({
  disabled,
  id,
  onChange,
  value,
  name,
  autoFocus = false,
  error,
  label,
  placeholder,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-[2px]">
      <label
        htmlFor={id}
        className="text-[13px] font-plusJakartaSans font-semibold text-black"
      >
        {label}
      </label>
      <input
        className="w-full h-[40px] bg-white px-3 border border-[#d0d5dd] outline-0 transition-all duration-500 rounded-[8px] placeholder:text-slate-500 text-black text-[14px] font-normal font-poppins"
        value={value}
        disabled={disabled}
        onChange={onChange}
        id={id}
        name={name}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
      {error && <InputError errorMessage={error} />}
    </div>
  );
}
