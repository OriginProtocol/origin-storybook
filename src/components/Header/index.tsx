import React, { useState } from 'react'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import {
  OriginDollarLogo,
  OriginEtherLogo,
  OriginLogo,
  OriginStoryLogo
} from '../Icons'
import { twMerge } from 'tailwind-merge'
import { getRelProps } from '../utils'

export type MappedLink<Link> = {
  href?: string
  label: string
  isButton: boolean
  highlightText?: string
  order: number
  target?: string
  links?: Link[]
  isHighlight?: boolean
  nofollow?: boolean
}

export type LinkFormatted<IconFormatted> = {
  label: string
  href: string
  highlight?: boolean
  target: string
  icon?: IconFormatted
  nofollow?: boolean
}

export type IconFormatted = {
  alternativeText: string
  caption: string
  url: string
}

export interface NavLinksProps {
  /**
   * Array of link objects the header will use to create dropdowns and buttons
   */
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[]
  /**
   * webProperty that header will be used on, changes logo on left side
   */
  webProperty: 'originprotocol' | 'ousd' | 'oeth' | 'story'
  /**
   * Currently displayed page of navigation bar
   */
  active?: string
  /**
   * Is this being used on a mobile hamburger drawer? Used to enlarge text if so.
   */
  isMobile?: boolean
  /**
   * Tailwind background color class of the header
   */
  background?: string
}

const NavLinks = ({
  mappedLinks,
  webProperty,
  active,
  isMobile,
  background
}: NavLinksProps) => (
  <div
    className={`flex flex-col md:!flex-row space-y-4 md:space-y-0 ${
      (webProperty === 'ousd' || webProperty === 'oeth') && isMobile
        ? 'px-8'
        : 'items-center justify-center'
    }`}
  >
    {mappedLinks.map((mappedLink) => {
      {
        console.log(isMobile)
      }
      const relProps = getRelProps(mappedLink.nofollow)

      if (!mappedLink.isButton && mappedLink.links) {
        if (mappedLink.links.length > 0) {
          return (
            <Dropdown
              label={mappedLink.label}
              highlightText={mappedLink.highlightText}
              options={mappedLink.links}
              key={mappedLink.label}
              bolding="none"
              classes={`${isMobile ? 'text-2xl' : ''}`}
            />
          )
        } else {
          return (
            <div
              className={`group flex flex-col ${
                (webProperty === 'ousd' || webProperty === 'oeth') && isMobile
                  ? '-ml-4 mr-auto'
                  : webProperty === 'ousd' || webProperty === 'oeth'
                  ? 'pt-2'
                  : ''
              }`}
              key={mappedLink.label}
            >
              <Button
                label={mappedLink.label}
                type="header"
                size="nav"
                href={mappedLink.href}
                webProperty={webProperty}
                target={mappedLink.target}
                background={background}
                className={`${
                  mappedLink.isHighlight ? 'text-story-pink' : ''
                } ${
                  (webProperty === 'ousd' || webProperty === 'oeth') && isMobile
                    ? 'text-base'
                    : isMobile
                    ? 'text-2xl'
                    : ''
                }`}
                {...relProps}
              />
              {(webProperty === 'ousd' || webProperty === 'oeth') && (
                <div
                  className={`h-1 mx-4 mt-0.5 bg-gradient-to-r group-hover:from-ousd-purple group-hover:to-ousd-blue rounded-full ${
                    active === mappedLink.label
                      ? 'from-ousd-purple to-ousd-blue'
                      : ''
                  }`}
                ></div>
              )}
            </div>
          )
        }
      }
    })}
    <div
      className={`flex flex-col md:!flex-row md:!space-x-5 md:!pl-4 items-center justify-center space-y-4 md:!space-y-0`}
    >
      {mappedLinks.map((mappedLink) => {
        const relProps = getRelProps(mappedLink.nofollow)

        if (mappedLink.isButton) {
          return (
            <Button
              size={
                webProperty === 'ousd' || webProperty === 'oeth'
                  ? 'border'
                  : 'small'
              }
              label={mappedLink.label}
              key={mappedLink.label}
              href={mappedLink.href}
              target={mappedLink.target}
              className={`${
                (webProperty === 'ousd' || webProperty === 'oeth') && isMobile
                  ? 'absolute left-8 right-8 bottom-8 text-center'
                  : ''
              }`}
              background={background}
              webProperty={webProperty}
              isButton
              {...relProps}
            />
          )
        }
      })}
    </div>
  </div>
)

const Hamburger = ({
  setOpen,
  open,
  webProperty
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  webProperty: 'originprotocol' | 'ousd' | 'oeth' | 'story'
}) => (
  <div className="space-y-2 cursor-pointer" onClick={() => setOpen(!open)}>
    <span
      className={`block w-8 h-0.5 ${
        webProperty === 'ousd' || webProperty === 'oeth'
          ? 'bg-white'
          : 'bg-gray-600'
      } transform transition-transform ${
        open ? 'rotate-45 translate-y-1.5' : ''
      }`}
    ></span>
    <span
      className={`block w-8 h-0.5 ${
        webProperty === 'ousd' || webProperty === 'oeth'
          ? 'bg-white'
          : 'bg-gray-600'
      } transform transition-transform ${
        open ? '-rotate-45 -translate-y-1' : ''
      }`}
    ></span>
  </div>
)

export interface HeaderProps {
  /**
   * webProperty that header will be used on, changes logo on left side
   */
  webProperty: 'originprotocol' | 'ousd' | 'oeth' | 'story'
  /**
   * Array of link objects the header will use to create dropdowns and buttons
   */
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[]
  /**
   * Currently displayed page of navigation bar
   */
  active?: string

  className?: string
  /**
   * Tailwind background color class of the header
   */
  background?: string
}

export const Header = ({
  webProperty,
  mappedLinks,
  background,
  active,
  className
}: HeaderProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={twMerge(
        `${
          webProperty === 'ousd' || webProperty === 'oeth'
            ? 'px-8 md:!px-16 lg:!px-[8.375rem]'
            : ''
        }`,
        background,
        className
      )}
    >
      <div
        className={`py-9 md:!py-16 w-full flex justify-between items-center mx-auto ${
          webProperty === 'ousd' || webProperty === 'oeth'
            ? 'max-w-[89.5rem]'
            : 'max-w-screen-xl px-9'
        }`}
      >
        <div className="flex h-4 md:!h-6">
          <a href="/">
            {webProperty === 'originprotocol' && <OriginLogo />}
            {webProperty === 'ousd' && <OriginDollarLogo />}
            {webProperty === 'oeth' && <OriginEtherLogo />}
            {webProperty === 'story' && <OriginStoryLogo />}
          </a>
        </div>
        <div className="hidden md:!block">
          <NavLinks
            background={background}
            mappedLinks={mappedLinks}
            webProperty={webProperty}
            active={active}
          />
        </div>
        <div className="block md:!hidden">
          <Hamburger open={open} setOpen={setOpen} webProperty={webProperty} />
        </div>
        <div
          className={`
            ${open ? 'translate-y-0' : 'translate-y-full'}
            ${
              webProperty === 'ousd' || webProperty === 'oeth'
                ? 'bg-black'
                : 'bg-white'
            }
            transform md:!hidden fixed top-0 bottom-0 right-0 left-0 transition-transform shadow z-50
          `}
        >
          <div className="relative h-full">
            <div className="flex flex-col justify-center align-middle h-full">
              <div className="absolute left-8 top-9 h-4">
                <a href="/">{webProperty === 'ousd' && <OriginDollarLogo />}</a>
              </div>
              <div className="absolute right-8 top-9">
                <Hamburger
                  open={open}
                  setOpen={setOpen}
                  webProperty={webProperty}
                />
              </div>
              <NavLinks
                mappedLinks={mappedLinks}
                webProperty={webProperty}
                isMobile
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
