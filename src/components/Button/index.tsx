import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps {
  /**
   * What type of button is this?
   */
  type?: 'primary' | 'secondary' | 'header'
  /**
   * What property is this button for?
   */
  webProperty?: 'originprotocol' | 'ousd' | 'oeth' | 'defi' | 'story'
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'nav' | 'border'
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional children to use instead of a label
   */
  children?: React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional href
   */
  href?: string
  /**
   * Optional target
   */
  target?: string
  /**
   * Optional rel
   */
  rel?: string
  /**
   * What additional classes should be used?
   * Will add onto classes derived from other props.
   */
  className?: string
  /**
   * What additional styles should be used?
   * Will override background colors/gradients derived from other props.
   */
  style?: object
  /**
   * Disables the button
   */
  disabled?: boolean
  /**
   * Tailwind background color class
   */
  background?: string
  /**
   * Whether button looks like button
   */
  isButton?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  webProperty = 'originprotocol',
  size = 'medium',
  label,
  children,
  href,
  target,
  rel,
  className = '',
  style = {},
  disabled,
  background: bg,
  isButton,
  onClick,
  ...props
}: ButtonProps) => {
  let background
  let textColor
  let hoverStyles

  switch (webProperty) {
    case 'originprotocol':
      background =
        type === 'primary'
          ? 'bg-gradient-to-r from-origin-protocol-button-start to-origin-protocol-button-end'
          : ''
      textColor =
        type === 'primary'
          ? 'text-white'
          : type === 'header'
          ? 'text-slate-800'
          : 'text-black'
      hoverStyles =
        type === 'primary' ? 'hover:text-gray-100' : 'hover:text-slate-600'
      break

    case 'ousd':
      background =
        type === 'primary'
          ? 'bg-gradient-to-r from-ousd-button-start to-ousd-button-end'
          : type === 'secondary'
          ? 'bg-gradient-to-r from-ousd-button-dark-start to-ousd-button-dark-end'
          : ''
      textColor = 'text-white'
      hoverStyles = type === 'header' ? '' : 'hover:text-gray-300'
      break

    case 'oeth':
      background =
        type === 'primary'
          ? 'bg-gradient-to-r from-oeth-button-start to-oeth-button-end'
          : type === 'secondary'
          ? 'bg-gradient-to-r from-oeth-button-dark-start to-oethx  -button-dark-end'
          : ''
      textColor = 'text-white'
      hoverStyles = type === 'header' ? '' : 'hover:text-gray-300'
      break

    case 'defi':
      background =
        type === 'primary'
          ? 'bg-gradient-to-r from-oeth-button-start to-oeth-button-end'
          : type === 'secondary'
          ? 'bg-gradient-to-r from-oeth-button-dark-start to-oethx  -button-dark-end'
          : ''
      textColor = 'text-white'
      hoverStyles = type === 'header' ? '' : 'hover:text-gray-300'
      break

    case 'story':
      background =
        type === 'primary'
          ? 'bg-gradient-to-r from-story-button-start to-story-button-end'
          : type === 'header'
          ? ''
          : 'bg-white'
      textColor =
        type === 'primary'
          ? 'text-white'
          : type === 'header'
          ? 'text-black'
          : 'text-story-blue'
      hoverStyles =
        type === 'primary'
          ? 'hover:bg-gray-50 hover:text-gray-100'
          : 'hover:bg-gray-50'
      break

    default:
      break
  }

  let textSize
  let padding
  switch (size) {
    case 'border':
      textSize = 'text-base font-normal'
      padding = 'px-0.5 py-0.5'
      break

    case 'nav':
      textSize = 'text-base font-normal'
      padding = 'px-7 py-1'
      break

    case 'small':
      textSize = 'text-base'
      padding = 'px-7 py-1'
      break

    case 'medium':
      textSize = 'text-base'
      padding = 'px-12 py-4'
      break

    case 'large':
      textSize = 'text-2xl'
      padding = 'px-12 py-6'
      break

    default:
      break
  }

  let fontWeight
  let shadow
  let rounding
  switch (type) {
    case 'header':
      fontWeight = 'font-normal'
      shadow = ''
      rounding = ''
      padding = 'px-4 py-1'
      break

    default:
      fontWeight = 'font-medium'
      shadow = 'shadow'
      rounding = 'rounded-full'
      break
  }

  const handleClick = (e: React.SyntheticEvent) => {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (onClick) {
      onClick()
    }
  }

  const Component = target === '_self' && href?.startsWith('/') ? Link : 'span'

  return (
    <a
      href={href || ''}
      target={target}
      rel={rel}
      className={`
        ${background}
        ${textColor}
        ${textSize}
        ${padding}
        ${fontWeight}
        ${shadow}
        ${rounding}
        ${hoverStyles}
        leading-7
        font-sans
        animate-gradient
        background-gradient-oversized
        cursor-pointer
        whitespace-nowrap
        ${className}
      `}
      style={style}
      onClick={handleClick}
      {...props}
    >
      <Component href={href || ''} target={target}>
        {webProperty === 'ousd' ||
        webProperty === 'oeth' ||
        webProperty === 'defi' ? (
          <div
            className={`relative rounded-[100px] w-full md:w-fit h-fit ${
              isButton ? 'hover:opacity-90' : ''
            }`}
          >
            <button
              onClick={onClick}
              className={twMerge(
                `relative rounded-[100px] w-full md:w-auto ${
                  isButton ? 'px-4 lg:px-6 hover:bg-[#1b1a1abb]' : ''
                } py-1 text-origin-white`,
                bg
              )}
            >
              {label}
              {children}
            </button>
          </div>
        ) : (
          <>
            {label}
            {children}
          </>
        )}
      </Component>
    </a>
  )
}
