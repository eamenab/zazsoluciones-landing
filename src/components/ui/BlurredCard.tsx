
import React from "react";
import { cn } from "@/lib/utils";

interface BlurredCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const BlurredCard = ({ 
  children, 
  className, 
  hoverEffect = false,
  ...props 
}: BlurredCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300",
        hoverEffect && "hover:translate-y-[-5px] hover:shadow-soft",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurredCard;
