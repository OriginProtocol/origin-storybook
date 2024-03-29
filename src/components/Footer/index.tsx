import {
  Discord,
  Facebook,
  Medium,
  OriginLogo,
  RedditIcon,
  Telegram,
  Twitter,
  YouTube
} from '../Icons'
import { Typography } from '../Typography'

export interface FooterProps {
  /**
   * Web property that will which links will show and make some links switch between relative and absolute
   */
  webProperty: 'originprotocol' | 'ousd' | 'story'
}

export const Footer = ({ webProperty }: FooterProps) => (
  <div className="w-full bg-gradient-to-r from-black to-footer-end py-10 md:py-20 text-white">
    <div className="max-w-screen-xl mx-auto">
      <div
        className="border-b flex flex-col md:flex-row space-y-12 md:space-y-0 pb-12 md:pb-7 mx-9"
        style={{ borderBottomColor: 'rgba(255,255,25,0.2)' }}
      >
        <div className="flex flex-col md:justify-between space-y-6 md:space-y-0 flex-6">
          <OriginLogo theme="dark" />
          <div className="flex space-x-6 items-center md:pt-40">
            <a
              href="https://twitter.com/OriginProtocol"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/originprotocol/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.youtube.com/c/originprotocol"
              target="_blank"
              rel="noreferrer"
            >
              <YouTube />
            </a>
            <a
              href="https://blog.originprotocol.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Medium />
            </a>
            <a
              href="https://t.me/originprotocol"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram />
            </a>
            <a
              href="https://discord.com/invite/ogn"
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </a>
            <a
              href="https://www.reddit.com/r/originprotocol/"
              target="_blank"
              rel="noreferrer"
            >
              <RedditIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-2 space-y-4">
          <Typography.Body3 className="font-semibold">
            Organization
          </Typography.Body3>
          <div className="flex flex-row md:flex-col md:space-x-0 md:space-y-4 items-center md:items-start">
            <a
              href={
                webProperty === 'originprotocol'
                  ? '/community'
                  : 'https://originprotocol.com/community'
              }
              target={webProperty === 'originprotocol' ? '_self' : '_blank'}
              rel="noreferrer"
            >
              <Typography.Caption className="opacity-75">
                Community
              </Typography.Caption>
            </a>
            <div className="flex items-center ml-4 md:ml-0 relative md:-top-1">
              <a
                href="https://angel.co/company/originprotocol/jobs"
                target="_blank"
                rel="noreferrer"
              >
                <Typography.Caption className="opacity-75">
                  Careers
                </Typography.Caption>
              </a>
              <a
                href="https://angel.co/company/originprotocol/jobs"
                target="_blank"
                rel="noreferrer"
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
          <div className="flex flex-row md:flex-col md:space-x-0 md:space-y-4 items-center md:items-start opacity-75">
            <a
              href={
                webProperty !== 'story'
                  ? 'https://story.xyz'
                  : 'https://originprotocol.com'
              }
              target="_blank"
              rel="noreferrer"
            >
              <Typography.Caption>
                {webProperty !== 'story' ? 'Origin Story' : 'Origin Protocol'}
              </Typography.Caption>
            </a>
            <a
              href={
                webProperty !== 'ousd'
                  ? 'https://ousd.com'
                  : 'https://originprotocol.com'
              }
              target="_blank"
              rel="noreferrer"
            >
              <Typography.Caption>
                {webProperty !== 'ousd' ? 'Origin Dollar' : 'Origin Protocol'}
              </Typography.Caption>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-2 space-y-4">
          <Typography.Body3 className="font-bold">Resources</Typography.Body3>
          <div className="flex flex-row md:flex-col md:space-x-0 md:space-y-4 items-center md:items-start opacity-75">
            <a
              href="https://github.com/originprotocol"
              target="_blank"
              rel="noreferrer"
            >
              <Typography.Caption>GitHub</Typography.Caption>
            </a>
            <a href="https://originprotocol.com/blog#press" target="_self">
              <Typography.Caption>Press</Typography.Caption>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between opacity-75 px-9 max-w-screen-xl mx-auto">
        <Typography.Caption2>
          © {new Date().getFullYear()} Origin Protocol Inc. All rights reserved.
        </Typography.Caption2>
        <div className="flex space-x-6">
          <a href="/privacy" target="_blank">
            <Typography.Caption2>Privacy Policy</Typography.Caption2>
          </a>
          <a href="/tos" target="_blank">
            <Typography.Caption2>Terms of Service</Typography.Caption2>
          </a>
        </div>
      </div>
    </div>
  </div>
)
