import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ModalInputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: string | null;
}

const ModalInputPassword = ({
  title,
  error,
  ...rest
}: ModalInputPasswordProps) => {
  return (
    <div className="mb-2">
      {title && (
        <label
          htmlFor={rest.id}
          className="block text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-bold mb-0 sm:mb-1 ml-1"
        >
          {title}
        </label>
      )}
      <input
        {...rest}
        type="password"
        className={twMerge(
          "w-full rounded-md bg-zinc-300 focus:bg-zinc-400/60 dark:bg-zinc-800 dark:focus:bg-zinc-900/80 dark:text-zinc-100 py-1 px-2 text-xs sm:text-sm leading-tight focus:shadow-outline focus:outline-none",
          rest.className,
        )}
      />
      {error && <p className="text-red-500 text-xs ml-2">{error}</p>}
    </div>
  );
};

export default ModalInputPassword;
