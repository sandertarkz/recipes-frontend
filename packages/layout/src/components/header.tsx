import Link from "next/link";

export const Header = ({
  navLinks,
}: {
  navLinks: {
    name: string;
    url: string;
  }[];
}) => {
  return (
    <header>
      <nav className="flex justify-center w-full p-4">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
