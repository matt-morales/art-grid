import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};
export default function Button({
  className,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-2xl px-4 py-2 text-sm font-medium transition border",
        variant === "primary" &&
          "bg-primary text-[color:var(--color-on-primary)] border-transparent shadow-soft hover:opacity-95",
        variant === "ghost" &&
          "bg-surface text-[color:var(--color-on-surface)] border-surface-border hover:bg-surface/70",
        className,
      )}
    />
  );
}
