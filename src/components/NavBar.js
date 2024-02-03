import { useRouter } from "next/router";
import Link from "next/link";
import { LinkedInIcon, MoonIcon, TwitterIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group text-gray-600 font-medium`}
    >
      {title}
      <span
        className={`h-[1px]  inline-block bg-amber-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
          dark:bg-light ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-36 py-16 flex items-center justify-between relative z-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-2xl text-amber-600  ">
          Gabriel Fortià
        </h1>
        <nav className="flex gap-5">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/articles" title="Articles" />
          <CustomLink href="/subscribe" title="Subscribe" />
          <LinkedInIcon />
          <TwitterIcon />
          <MoonIcon />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
