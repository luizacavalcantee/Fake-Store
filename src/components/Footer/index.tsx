interface LinkColumnProps {
  title: string;
  links: { name: string; href: string }[];
}

export default function Footer() {
  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Works", href: "#" },
    { name: "Career", href: "#" },
  ];

  const helpLinks = [
    { name: "Customer Support", href: "#" },
    { name: "Delivery Details", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const faqLinks = [
    { name: "Account", href: "#" },
    { name: "Manage Deliveries", href: "#" },
    { name: "Orders", href: "#" },
    { name: "Payments", href: "#" },
  ];

  const resourcesLinks = [
    { name: "Free eBooks", href: "#" },
    { name: "Development Tutorial", href: "#" },
    { name: "How to - Blog", href: "#" },
    { name: "Youtube Playlist", href: "#" },
  ];

  const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
    <div className="flex flex-col space-y-4">
      <h3 className="font-semibold uppercase tracking-wider text-gray-800">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-100 text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold">SHOP.CO</h2>
            <p className="text-gray-500">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Help" links={helpLinks} />
          <LinkColumn title="FAQ" links={faqLinks} />
          <LinkColumn title="Resources" links={resourcesLinks} />
        </div>
      </div>
    </footer>
  );
}
