import Image from 'next/image'
import { Typography } from '../Typography'

export interface CardProps {
  /**
   * Web property that will change card base styling
   */
  webProperty: 'originprotocol' | 'ousd' | 'story' | 'launchpad' | 'press'
  /**
   * String at the top of the text portion of the card
   */
  title: string
  /**
   * String used as body/subtitle below title
   */
  body?: string
  /**
   * String that is used as link text, optional
   */
  linkText?: string
  /**
   * String that is used as link href, optional
   */
  linkHref?: string
  /**
   * Image component to fill in top of card
   */
  img: React.ReactNode
  /**
   * Image component for thumbnail at top of card, only for story cards
   */
  thumbnail?: React.ReactNode
  /**
   * Target for links. Defaults to _blank.
   */
  target?: '_blank' | '_parent' | '_self' | '_top'
}

export const Card = ({
  body,
  img,
  thumbnail,
  title,
  linkText,
  linkHref,
  webProperty,
  target = '_blank'
}: CardProps) => {
  return (
    <a
      href={linkHref}
      download={webProperty === 'press'}
      target={target}
      className={`rounded-xl w-full flex ${
        webProperty === 'ousd'
          ? 'group bg-gradient-to-r from-[#8c66fc] to-[#0274f1]'
          : ''
      }`}
    >
      <div
        className={`flex ${
          webProperty === 'ousd'
            ? 'w-full h-full rounded-xl transition duration-300 bg-[#00000080] group-hover:bg-[#00000000] shadow-black group-hover:drop-shadow-2xl'
            : ''
        }`}
      >
        <div
          className={`m-[1px] rounded-xl w-full shadow overflow-hidden flex flex-col ${
            webProperty === 'ousd'
              ? 'bg-[#1e1f25] text-[#fafbfb]'
              : 'bg-white text-black'
          }`}
        >
          <div className="w-full relative overflow-hidden">{img}</div>
          <div className="px-6 py-8 w-full flex grow relative">
            <div className="space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className={`${webProperty === 'story' ? 'w-3/4' : ''}`}>
                  <Typography.H7
                    className={`!text-base lg:!text-2xl ${
                      webProperty === 'launchpad' ? 'mt-3' : 'mt-2'
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    {title}
                  </Typography.H7>
                </div>
                <Typography.Body3
                  className={`${
                    webProperty === 'ousd' ? 'text-[#b5beca]' : 'text-slate-600'
                  }`}
                >
                  {body}
                </Typography.Body3>
              </div>
              <div className="font-sansInter font-bold text-base text-link-blue mr-1.5">
                {linkText}
                {(webProperty === 'story' || webProperty === 'launchpad') && (
                  <>
                    {' '}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline"
                    >
                      <path
                        d="M12.9628 14.6C13.4058 14.6 13.791 14.4363 14.1088 14.1088C14.4266 13.7814 14.6 13.4058 14.6 12.9628V7.3H12.9628V12.9628H1.6372V1.6372H7.3V0H1.6372C1.18456 0 0.79934 0.16372 0.48153 0.491161C0.16372 0.808971 0 1.1942 0 1.6372V12.9628C0 13.4058 0.16372 13.791 0.48153 14.1088C0.79934 14.4266 1.18456 14.6 1.6372 14.6H12.9628ZM5.01755 10.7285L12.9628 2.78325V5.6628H14.6V0H8.9372V1.6372H11.8168L3.8715 9.57282L5.01755 10.7285Z"
                        fill="#0074F0"
                      />
                    </svg>
                  </>
                )}
              </div>
            </div>
            {thumbnail &&
              (webProperty === 'story' || webProperty === 'launchpad') && (
                <div
                  className={`absolute top-0 mt-0 transform overflow-hidden ${
                    webProperty === 'story'
                      ? 'right-6 -translate-y-1/2 rounded-full border-4 border-white'
                      : 'left-6 -translate-y-2/3 rounded-xl'
                  }`}
                >
                  <div className="w-24 h-24 relative">{thumbnail}</div>
                </div>
              )}
          </div>
        </div>
      </div>
    </a>
  )
}
