import Image from "next/image"
import { Typography } from "../Typography"

export interface PressCardProps {
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

export const PressCard = ({
  body,
  img,
  title,
  linkText,
  linkHref,
  linkText2,
  linkHref2,
}: PressCardProps) => (
  <div className={`rounded-xl w-full shadow overflow-hidden text-black bg-white`}>
    <div className="w-full h-48 relative">
      {img}
    </div>
    <div className="px-6 py-8 w-full relative">
      <div className="space-y-8">
        <div className="space-y-4">
          <div>
            <Typography.Title className=''>
              {title}
            </Typography.Title>
          </div>
          <Typography.Body2>
            {body}
          </Typography.Body2>
        </div>
        <div className="space-y-2.5">
          <div>
            <Typography.Link href={linkHref}>
              {linkText}
            </Typography.Link>
          </div>
          <div>
            <Typography.Link href={linkHref2}>
              {linkText2}
            </Typography.Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)