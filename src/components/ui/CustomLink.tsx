import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  showIcon?: boolean;
  children: React.ReactNode;
}

/**
 * Accessible Link primitive enforcing external security headers (rel="noopener noreferrer")
 * and focus rings.
 */
export function CustomLink({
  href,
  external = false,
  showIcon = false,
  children,
  className,
  ...props
}: CustomLinkProps) {
  const isExternal = external || href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-1 text-[#00E5FF] hover:underline transition-colors font-mono text-xs",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {isExternal && showIcon && <ExternalLink className="w-3.5 h-3.5 shrink-0" />}
    </a>
  );
}
