import { Typography } from '../Typography'

export interface AltCardProps {
  /**
   * String at the top of the text portion of the card
   */
  title: string
  /**
   * String used as body/subtitle below title
   */
  body?: string
  /**
   * Src for image at top of card
   */
  imgSrc: string
  /**
   * Src for alt at top of card
   */
  imgAlt: string
  /**
   * String that is used as link href, optional
   */
  linkHref?: string
  /**
   * Toggle smaller font
   */
  narrow: boolean
  /**
   * Src for image in thumbnail at top of card, only for narrow cards
   */
  thumbnailSrc?: string
  /**
   * Alt for image in thumbnail at top of card, only for narrow cards
   */
  thumbnailAlt?: string
}

export const AltCard = ({
  body,
  imgSrc,
  imgAlt,
  title,
  linkHref,
  narrow,
  thumbnailSrc,
  thumbnailAlt
}: AltCardProps) => (
  <a href={linkHref} target="_blank" rel="noopener noreferrer nofollow">
    <div className="p-6 rounded-xl w-full border-gray-100 border-2 shadow-lg overflow-hidden text-black">
      <div className="relative justify-self-start mb-3">
        <img src={imgSrc} alt={imgAlt} className="h-10" />
        {thumbnailSrc && (
          <div className="absolute left-4 bottom-1 transform translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-2 border-white">
            <img
              src={thumbnailSrc}
              alt={thumbnailAlt}
              className="w-5 h-5 object-cover"
            />
          </div>
        )}
      </div>
      <div className="clear-both">
        <Typography.Caption2 className="text-blue-500 font-bold mb-1">
          {title}
        </Typography.Caption2>
        {narrow ? (
          <Typography.Title2>{body}</Typography.Title2>
        ) : (
          <Typography.Title>{body}</Typography.Title>
        )}
      </div>
    </div>
  </a>
)
