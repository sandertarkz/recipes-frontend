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
    <Container>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </Container>
  );
};
