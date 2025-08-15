import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input border-border flex h-10 w-full min-w-0 rounded-lg border px-3 py-2 text-sm transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-background",
        "hover:border-border/60 hover:bg-background/50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
