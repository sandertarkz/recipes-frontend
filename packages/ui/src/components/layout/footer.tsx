import Link from "next/link";
import { Container } from "@workspace/ui/components/layout/container";

export const Footer = ({
  navLinks,
}: {
  navLinks: {
    name: string;
    url: string;
  }[];
}) => {
  return (
    <footer className="bg-blue-100">
      <Container>
        <nav className="flex justify-between w-full p-4">
          <div>
            <p>© 2025 Company Name</p>
          </div>
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
};
