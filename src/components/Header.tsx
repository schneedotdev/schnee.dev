"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="mt-28 w-full lg:mt-36"></div>
      <nav className="fixed z-10 w-full max-w-xl">
        <ul className="outside-padding-cover opaque pointer-events-auto flex w-full gap-8 pb-1 pt-12 lg:pt-20">
          <li
            className={`outside-padding group hover:cursor-pointer ${
              pathname === "/" && "active"
            }`}
          >
            <Link href="/" title="home">
              <svg
                className="group-hover:stroke-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2e2e2"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </li>
          <li
            className={`outside-padding group hover:cursor-pointer ${
              pathname === "/blogs" && "active"
            }`}
          >
            <Link href="/blogs" title="blogs">
              <svg
                className="group-hover:stroke-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2e2e2"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </Link>
          </li>
          <li
            className={`outside-padding group hover:cursor-pointer ${
              pathname === "/projects" && "active"
            }`}
          >
            <Link href="/projects" title="projects">
              <svg
                className="group-hover:stroke-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2e2e2"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                <path d="M17.64 15 22 10.64" />
                <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
              </svg>
            </Link>
          </li>
          <li className="bg-tertiary z-10 h-4 w-[1px]"></li>
          <li className="outside-padding group hover:cursor-pointer">
            <a
              href="https://www.github.com/brianschnee"
              target="_blank"
              title="github"
            >
              <svg
                className="group-hover:stroke-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2e2e2"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </li>
          <li className="outside-padding group hover:cursor-pointer">
            <a
              href="https://www.linkedin.com/in/brian-schnee-dev"
              target="_blank"
              title="linkedin"
            >
              <svg
                className="group-hover:stroke-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2e2e2"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li className="outside-padding group hover:cursor-pointer">
            <a
              href="https://www.twitter.com/fullstackbrian"
              target="_blank"
              title="twitter"
            >
              <svg
                className="group-hover:stroke-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2e2e2"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </li>
        </ul>
        <div className="outside-padding-cover gradient z-[-1] h-10 w-full"></div>
      </nav>
    </>
  );
};

export default Header;
