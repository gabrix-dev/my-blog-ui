import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  LINKEDIN_URL as myLinkedinUrl,
  MAIL_URL as myMailUrl,
  TWITTER_URL as myTwitterUrl,
  GOODREADS_URL as myGoodReadsUrl,
} from "../app/constants";
import { LinkedInIcon, TwitterIcon, GoodreadsIcon, MyBlogLogo } from "./Icons";
import Layout from "./Layout";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <div>
      <Layout className="!px-0 !pb-10">
        <footer className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur py-6 md:py-10 shadow-xl shadow-orange-100">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 flex items-center gap-6">
              <MyBlogLogo className="h-20 sm:h-28 md:h-36 w-auto" />
              <div className="space-y-3">
                <h2 className="font-semibold text-xl md:text-2xl text-dark">Thanks for visiting!</h2>
                <p className="text-gray-600 max-w-md text-sm md:text-base">
                  Your presence is appreciated. Feel free to reach out anytime, I'd love to connect!
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={myTwitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="p-2 rounded-lg ring-1 ring-gray-200 hover:ring-secondary/60 hover:-translate-y-0.5 transition"
                  >
                    <TwitterIcon className="w-5 h-auto" />
                  </a>
                  <a
                    href={myLinkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg ring-1 ring-gray-200 hover:ring-secondary/60 hover:-translate-y-0.5 transition"
                  >
                    <LinkedInIcon className="w-5 h-auto" />
                  </a>
                  <a
                    href={myGoodReadsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goodreads"
                    className="p-2 rounded-lg ring-1 ring-gray-200 hover:ring-secondary/60 hover:-translate-y-0.5 transition"
                  >
                    <GoodreadsIcon className="w-5 h-auto" />
                  </a>
                  <a
                    href={myMailUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Email"
                    className="p-2 rounded-lg ring-1 ring-gray-200 hover:ring-secondary/60 hover:-translate-y-0.5 transition"
                  >
                    <EnvelopeIcon className="w-5 h-auto text-blue-600" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex md:justify-end">
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <CustomLink
                  route={myLinkedinUrl}
                  className="border-2 border-secondary text-secondary !px-4 md:!px-6 !text-sm md:!text-base w-full sm:w-auto"
                  iconClassname="!w-5"
                  title="Connect"
                  icon={LinkedInIcon}
                />
                <CustomLink
                  route={myMailUrl}
                  className="border-2 border-secondary text-secondary !px-4 md:!px-6 !text-sm md:!text-base w-full sm:w-auto"
                  iconClassname="!w-5"
                  title="Email"
                  icon={EnvelopeIcon}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base text-gray-700">
              <Link href="/" className="hover:text-secondary transition">Home</Link>
              <Link href="/about" className="hover:text-secondary transition">About</Link>
              <Link href="/articles" className="hover:text-secondary transition">Articles</Link>
              <Link href="/subscribe" className="hover:text-secondary transition">Subscribe</Link>
            </nav>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-2 text-xs md:text-sm text-gray-700">
              <div>&copy; {new Date().getFullYear()}. All Rights Reserved.</div>
              <div className="hidden md:block">•</div>
              <div className="text-center">Built with &#10084; by Gabriel Fortià</div>
            </div>
          </div>
        </footer>
      </Layout>
    </div>
  );
};

export default Footer;
