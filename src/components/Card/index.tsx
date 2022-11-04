import Image from "next/image"
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
}: CardProps) => {
  const Wrapper = linkHref2 ? 'div' : 'a'; // You can't wrap a <a> within an <a>, and if there are 2 links anyway we're going to not want to wrap the entire card in an anchor tag.
  const Link1Tag = linkHref2 ? 'a' : 'p'

  return (
    <Wrapper href={linkHref} className={`rounded-xl inline-block w-full shadow overflow-hidden ${webProperty === 'ousd' ? 'text-white border-white border-2' : 'text-black'} bg-white`}>
      <div className="w-full h-48 relative overflow-hidden">
        {img}
      </div>
      <div className="px-6 py-8 w-full relative">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className={`${webProperty === 'story' ? 'w-3/4' : ''}`}>
              <Typography.Title className={`${webProperty === 'launchpad' ? 'mt-3' : 'mt-2'}`}>
                {title}
              </Typography.Title>
            </div>
            <Typography.Body2>
              {body}
            </Typography.Body2>
          </div>
          <div className="space-y-2.5">
            <Link1Tag href={linkHref} className='font-sansInter font-bold text-base text-link-blue mr-1.5'>
              {linkText}
              {
                (webProperty === 'story' || webProperty ==='launchpad') && (
                  <>
                    {' '}
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                      <path d="M12.9628 14.6C13.4058 14.6 13.791 14.4363 14.1088 14.1088C14.4266 13.7814 14.6 13.4058 14.6 12.9628V7.3H12.9628V12.9628H1.6372V1.6372H7.3V0H1.6372C1.18456 0 0.79934 0.16372 0.48153 0.491161C0.16372 0.808971 0 1.1942 0 1.6372V12.9628C0 13.4058 0.16372 13.791 0.48153 14.1088C0.79934 14.4266 1.18456 14.6 1.6372 14.6H12.9628ZM5.01755 10.7285L12.9628 2.78325V5.6628H14.6V0H8.9372V1.6372H11.8168L3.8715 9.57282L5.01755 10.7285Z" fill="#0074F0"/>
                    </svg>
                  </>
                )
              }
            </Link1Tag>
            {linkText2 && (
              <Typography.Link href={linkHref2} className="space-x-4 flex items-center" as='p'>
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
    </Wrapper>
  )
}