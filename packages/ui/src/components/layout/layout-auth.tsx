import { Container } from "@workspace/ui/components/layout/container";

export const Layout = ({
  header,
  children,
  footer,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <div className="min-h-svh flex flex-col">
      <div>{header}</div>
      <Container className="flex-1 py-10 flex items-center" asChild>
        <main>{children}</main>
      </Container>
      <div>{footer}</div>
    </div>
  );
};
