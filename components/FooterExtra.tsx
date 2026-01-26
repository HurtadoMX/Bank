import { Github } from "lucide-react";

const FooterExtra = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-2 text-center text-xs text-gray-500">
      © {year} · Developed by{" "}
      <span className="font-medium text-gray-900">HurtadoMX</span>{" "}
      <span className="mx-1">·</span>
      <a
        href="https://github.com/HurtadoMX/BankTransfer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-gray-700 underline underline-offset-4 transition-colors hover:text-black"
      >
        <Github className="h-4 w-4" />
        Source code
      </a>
    </footer>
  );
};

export default FooterExtra;
