import * as React from "react";

import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-20 w-full  bg-transparent border-b-2 border-gray-400 px-3 py-2  text-2xl file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  placeholder:text-3xl focus-visible:outline-none focus-visible:border focus-visible:rounded-[12px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
