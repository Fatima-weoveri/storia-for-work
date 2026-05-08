import * as React from "react";

type ButtonComponentProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export const ButtonComponent = ({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
}: ButtonComponentProps) => {
  const baseClassName =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] transition-colors";
  const variantClassName =
    variant === "primary"
      ? "bg-(--storia-black) text-(--storia-white)"
      : "border border-(--storia-black15) text-(--storia-black)";

  return (
    <a
      href={href}
      className={`${baseClassName} ${variantClassName} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
};
