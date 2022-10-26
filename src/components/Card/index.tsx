import Image from "next/image"
import { linkIcon } from "../Icons"
import { Typography } from "../Typography"

export interface CardProps {
  /**
   * Web property that will change card base styling
   */
  webProperty: 'originprotocol' | 'ousd' | 'story' | 'launchpad'
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
   * String that is used as link text, only for press cards
   */
   linkText2?: string
   /**
    * String that is used as link href, only for press cards
    */
   linkHref2?: string
  /**
   * Image component to fill in top of card
   */
  img: React.ReactNode
  /**
   * Image component for thumbnail at top of card, only for story cards
   */
  thumbnail?: React.ReactNode
}

export const Card = ({
  body,
  img,
  thumbnail,
  title,
  linkText,
  linkHref,
  linkText2,
  linkHref2,
  webProperty,
}: CardProps) => (
  <div className={`rounded-xl w-full shadow overflow-hidden ${webProperty === 'ousd' ? 'text-white border-white border-2' : 'text-black'} bg-white`}>
    <div className="w-full h-48 relative">
      {img}
    </div>
    <div className="p-6 w-full relative">
      <div className="space-y-3.5">
        <div className={`${webProperty === 'story' ? 'w-3/4' : ''}`}>
          <Typography.Title className={`${webProperty === 'launchpad' ? 'mt-3' : 'mt-2'}`}>
            {title}
          </Typography.Title>
        </div>
        <Typography.Body2>
          {body}
        </Typography.Body2>
        <div>
          <a href={linkHref} className='font-sansInter font-bold text-base text-link-blue mr-1.5'>
            {linkText}
          </a>
          {
            (webProperty === 'story' || webProperty ==='launchpad') && (
              <Image src='/linkIcon.svg' alt='link' height='15' width='15' />
            )
          }
          {linkText2 && (
            <Typography.Link href={linkHref2} className="mt-1 space-x-4 flex items-center">
              {linkText2}
            </Typography.Link>
          )}
        </div>
      </div>
      { thumbnail && (webProperty === 'story' || webProperty === 'launchpad') && (
        <div className={`absolute top-0 mt-0 transform overflow-hidden ${webProperty === 'story' ? 'right-6 -translate-y-1/2 rounded-full border-4 border-white' : 'left-6 -translate-y-2/3 rounded-xl'}`}>
          <div className="w-24 h-24 relative">
            {thumbnail}
          </div>
        </div>
      )}
    </div>
  </div>
)