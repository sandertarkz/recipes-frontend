import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";

export const Container = ({
  children,
  asChild,
  className,
}: {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn("container mx-auto px-4", className)}>{children}</Comp>
  );
};
