import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-navy-950 text-white hover:bg-navy-800",
        green: "bg-green-400 text-navy-950 hover:bg-green-300 shadow-[0_0_0_0_rgba(53,208,127,0.4)] hover:shadow-[0_0_0_8px_rgba(53,208,127,0.15)]",
        outline: "border border-navy-950/15 bg-transparent hover:bg-navy-950/5",
        ghost: "hover:bg-navy-950/5",
        gold: "bg-gold-400 text-navy-950 hover:bg-gold-200",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";
