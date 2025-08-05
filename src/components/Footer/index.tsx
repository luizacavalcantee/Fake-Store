export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 lg:py-16 px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-end">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:max-w-sm">
            <h2 className="text-3xl font-bold">SHOP.CO</h2>
            <p className="text-zinc-500">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>
          <p className="text-sm text-zinc-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
      </div>
    </footer>
  );
}