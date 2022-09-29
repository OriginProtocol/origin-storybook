import { Discord, Facebook, Medium, OriginLogo, Telegram, Twitter, YouTube } from "../Icons"
import { Typography } from "../Typography"

export const Footer = () => (
  <div className="w-full bg-gradient-to-r from-black to-footer-end py-10 md:py-20 text-white">
    <div className="border-b flex flex-col md:flex-row space-y-12 md:space-y-0 pb-12 md:pb-7 px-9 max-w-screen-xl mx-auto" style={{borderBottomColor: 'rgba(255,255,25,0.2)'}}>
      <div className="flex flex-col md:justify-between space-y-6 md:space-y-0 flex-6">
        <OriginLogo webProperty="originprotocol" theme="dark" />
        <div className="flex space-x-4 items-center">
          <Twitter />
          <Facebook />
          <YouTube />
          <Medium />
          <Telegram />
          <Discord />
        </div>
      </div>
      <div className="flex flex-col flex-2 space-y-4">
        <Typography.Body2 className="font-bold">
          Organization
        </Typography.Body2>
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
          <Typography.Body2 className="opacity-75" href='https://google.com'>
            Team
          </Typography.Body2>
          <Typography.Body2 className="opacity-75" href='https://google.com'>
            Products
          </Typography.Body2>
          <div className="flex items-center">
            <Typography.Body2 className="opacity-75" href='https://google.com'>
              Careers
            </Typography.Body2>
            <a href='https://google.com' target='_blank'>
              <div className="opacity-100 text-sm ml-2 bg-gray-700 py-1 px-3 rounded-xl font-medium">
                Hiring!
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-2 space-y-4">
        <Typography.Body2 className="font-bold">
          Products
        </Typography.Body2>
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 opacity-75">
          <Typography.Body2>
            Origin Story
          </Typography.Body2>
          <Typography.Body2>
            Origin Dollar
          </Typography.Body2>
        </div>
      </div>
      <div className="flex flex-col flex-2 space-y-4">
        <Typography.Body2 className="font-bold">
          Resources
        </Typography.Body2>
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 opacity-75">
          <Typography.Body2>
            Litepaper
          </Typography.Body2>
          <Typography.Body2>
            Videos
          </Typography.Body2>
          <Typography.Body2>
            GitHub
          </Typography.Body2>
          <Typography.Body2>
            Governance
          </Typography.Body2>
        </div>
      </div>
    </div>
    <div className="pt-10 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between opacity-75 px-9 max-w-screen-xl mx-auto">
      <Typography.Body2>
        © 2022 Origin Protocol Inc. All rights reserved.
      </Typography.Body2>
      <div className="flex space-x-6">
        <Typography.Body2>
          Privacy Policy
        </Typography.Body2>
        <Typography.Body2>
          Terms of Service
        </Typography.Body2>
      </div>
    </div>
  </div>
)