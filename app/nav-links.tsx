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
            className={`font-light text-xl text-gray-100 lg:mb-0 md:mb-0 mb-6 py-1 px-3 text-center border border-transparent hover:border-testCian hover:bg-white/15 rounded transition-transform transform hover:scale-125
            }`}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
