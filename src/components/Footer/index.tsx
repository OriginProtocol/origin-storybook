import {
  Discord,
  Facebook,
  FTXIcon,
  Medium,
  OriginLogo,
  Reddit,
  RedditIcon,
  Telegram,
  Twitter,
  YouTube,
} from "../Icons";
import { Typography } from "../Typography";

export const Footer = () => (
  <div className="w-full bg-gradient-to-r from-black to-footer-end py-10 md:py-20 text-white">
    <div
      className="border-b flex flex-col md:flex-row space-y-12 md:space-y-0 pb-12 md:pb-7 max-w-screen-xl mx-9"
      style={{ borderBottomColor: "rgba(255,255,25,0.2)" }}
    >
      <div className="flex flex-col md:justify-between space-y-6 md:space-y-0 flex-6">
        <OriginLogo theme="dark" />
        <div className="flex space-x-6 items-center md:pt-40">
          <a href="https://twitter.com/OriginProtocol" target="_blank">
            <Twitter />
          </a>
          <a href="https://www.facebook.com/originprotocol/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.youtube.com/c/originprotocol" target="_blank">
            <YouTube />
          </a>
          <a href="https://blog.originprotocol.com/" target="_blank">
            <Medium />
          </a>
          <a href="https://t.me/originprotocol" target="_blank">
            <Telegram />
          </a>
          <a href="https://discord.com/invite/ogn" target="_blank">
            <Discord />
          </a>
          <a href="https://www.reddit.com/r/originprotocol/" target="_blank">
            <RedditIcon />
          </a>
          <a href="https://blockfolio.com/coin/OGN" target="_blank">
            <FTXIcon />
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-2 space-y-4">
        <Typography.Body3 className="font-semibold">Organization</Typography.Body3>
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
          <a
            href="/community"
            target="_blank"
          >
            <Typography.Caption className="opacity-75">
              Team
            </Typography.Caption>
          </a>
          <div className="flex items-center">
            <a
              href="https://angel.co/company/originprotocol/jobs"
              target="_blank"
            >
              <Typography.Caption
                className="opacity-75"
              >
                Careers
              </Typography.Caption>
            </a>
            <a
              href="https://angel.co/company/originprotocol/jobs"
              target="_blank"
            >
              <div className="opacity-100 text-sm ml-2 bg-gray-700 py-1 px-3 rounded-xl font-medium">
                Hiring!
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-2 space-y-4">
        <Typography.Body3 className="font-bold">Products</Typography.Body3>
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 opacity-75">
          <a
            href="https://story.xyz"
            target="_blank"
          >
            <Typography.Caption>
              Origin Story
            </Typography.Caption>
          </a>
          <a
            href="https://ousd.com"
            target="_blank"
          >
            <Typography.Caption>
              Origin Dollar
            </Typography.Caption>
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-2 space-y-4">
        <Typography.Body3 className="font-bold">Resources</Typography.Body3>
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 opacity-75">
          <a
            href="https://github.com/originprotocol"
            target="_blank"
          >
            <Typography.Caption>
              GitHub
            </Typography.Caption>
          </a>
        </div>
      </div>
    </div>
    <div className="pt-10 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between opacity-75 px-9 max-w-screen-xl mx-auto">
      <Typography.Caption2>
        © 2022 Origin Protocol Inc. All rights reserved.
      </Typography.Caption2>
      <div className="flex space-x-6">
        <a
          href="/privacy"
          target="_blank"
        >
          <Typography.Caption2>Privacy Policy</Typography.Caption2>
        </a>
        <a
          href="/tos"
          target="_blank"
        >
          <Typography.Caption2>Terms of Service</Typography.Caption2>
        </a>
      </div>
    </div>
  </div>
);
