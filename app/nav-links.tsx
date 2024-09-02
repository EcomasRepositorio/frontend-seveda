import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Inicio",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Diplomados",
    href: "/diplomados",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Certificados",
    href: "/certs",
    icon: UserGroupIcon,
  },
  {
    name: "Contáctanos",
    href: "/#contacto",
    icon: UserGroupIcon,
  },
  {
    name: "Nuestras Redes",
    href: "/#footer",
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
                const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-lg text-blackblue  hover:underline hover:text-primaryblue dark:hover:text-blue-100 ${
              isActive ? "underline text-primaryblue dark:text-blue-100 " : "dark:text-white"
            }`}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
