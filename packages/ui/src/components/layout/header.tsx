import Link from "next/link";
import { Container } from "@workspace/ui/components/layout/container";

export const Header = ({
  navLinks,
}: {
  navLinks: {
    name: string;
    url: string;
  }[];
}) => {
  return (
    <header className="bg-blue-100">
      <Container>
        <nav className="flex justify-center w-full p-4">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
