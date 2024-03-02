import { CustomLink } from "@/pages";
import {
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { LINKEDIN_URL as myLinkedinUrl, MAIL_URL as myMailUrl } from '../app/constants';
import { LinkedinOutlineIcon, MyBlogLogo } from "./Icons";
import Layout from "./Layout";

const Footer = () => {
  return (
    <div>
      <Layout className=" w-full !px-0 !pb-8 !min">
        {/* <footer className="border-t-2 border-solid border-gray-200 mt-20 flex justify-center"> */}
        <footer className="justify-center bg-gray-200 mx-8 px-4 lg:mx-48 rounded-2xl p-1 shadow-xl pb-5">
          <div className="mt-10 flex-col flex gap-5 items-center ">
            <h2 className="font-medium text-2xl">Thanks for visitting!</h2>
            <h3 className="text-lg text-center">Your presence is appreciated. Feel free to reach out anytime, I'd love to connect!</h3>
            <div className="flex md:flex-row flex-col gap-4">
              <CustomLink
                route={myLinkedinUrl}
                className="border-solid border-2  border-secondary text-secondary"
                title="Connect"
                icon={LinkedinOutlineIcon}
              />
              <CustomLink
                route={myMailUrl}
                className="border-solid border-2 border-secondary text-secondary"
                title="Email"
                icon={EnvelopeIcon}
              />
            </div>
          </div>
          <MyBlogLogo className="mx-auto mt-6 lg:h-64 h-40 shrink flex" />
          <div className=" text-sm text-gray-800 text-center mt-3">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </div>
        </footer>
      </Layout>
    </div>
  );
};

export default Footer;
