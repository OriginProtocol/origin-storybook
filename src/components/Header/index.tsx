import { useState } from 'react'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import { OriginDollarLogo, OriginLogo, OriginStoryLogo } from '../Icons'
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
  webProperty: 'originprotocol' | 'ousd' | 'story'
  /**
   * Currently displayed page of navigation bar
   */
  active?: string
  /**
   * Is this being used on a mobile hamburger drawer? Used to enlarge text if so.
   */
  isMobile?: boolean
}

const NavLinks = ({
  mappedLinks,
  webProperty,
  active,
  isMobile
}: NavLinksProps) => (
  <div
    className={`flex flex-col md:flex-row space-y-4 md:space-y-0 ${
      webProperty === 'ousd' && isMobile
        ? 'px-8'
        : 'items-center justify-center'
    }`}
  >
    {mappedLinks.map((mappedLink) => {
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
                webProperty === 'ousd' && isMobile
                  ? '-ml-4 mr-auto'
                  : webProperty === 'ousd'
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
                className={`${
                  mappedLink.isHighlight ? 'text-story-pink' : ''
                } ${
                  webProperty === 'ousd' && isMobile
                    ? 'text-base'
                    : isMobile
                    ? 'text-2xl'
                    : ''
                }`}
                {...relProps}
              />
              {webProperty === 'ousd' && (
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
      className={`flex flex-col md:flex-row md:space-x-5 md:pl-4 items-center justify-center space-y-4 md:space-y-0`}
    >
      {mappedLinks.map((mappedLink) => {
        const relProps = getRelProps(mappedLink.nofollow)

        if (mappedLink.isButton) {
          return (
            <Button
              size="small"
              label={mappedLink.label}
              key={mappedLink.label}
              href={mappedLink.href}
              target={mappedLink.target}
              className={`${
                webProperty === 'ousd' && isMobile
                  ? 'absolute left-8 right-8 bottom-8 text-center'
                  : ''
              }`}
              webProperty={webProperty}
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
  webProperty: 'originprotocol' | 'ousd' | 'story'
}) => (
  <div className="space-y-2 cursor-pointer" onClick={() => setOpen(!open)}>
    <span
      className={`block w-8 h-0.5 ${
        webProperty === 'ousd' ? 'bg-white' : 'bg-gray-600'
      } transform transition-transform ${
        open ? 'rotate-45 translate-y-1.5' : ''
      }`}
    ></span>
    <span
      className={`block w-8 h-0.5 ${
        webProperty === 'ousd' ? 'bg-white' : 'bg-gray-600'
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
  webProperty: 'originprotocol' | 'ousd' | 'story'
  /**
   * Array of link objects the header will use to create dropdowns and buttons
   */
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[]
  /**
   * Currently displayed page of navigation bar
   */
  active?: string
  /**
   * Language option for i18n
   */
  language?: string
}

export const Header = ({
  webProperty,
  mappedLinks,
  active,
  language
}: HeaderProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`${
        webProperty === 'ousd' ? 'px-8 md:px-16 lg:px-[8.375rem]' : ''
      }`}
    >
      <div
        className={`py-9 md:py-16 w-full flex justify-between items-center mx-auto ${
          webProperty === 'ousd' ? 'max-w-[89.5rem]' : 'max-w-screen-xl px-9'
        }`}
      >
        <div className="flex h-4 md:h-6">
          <a href="/">
            {webProperty === 'originprotocol' && <OriginLogo />}
            {webProperty === 'ousd' && <OriginDollarLogo theme="dark" />}
            {webProperty === 'story' && <OriginStoryLogo />}
          </a>
        </div>
        <div className="hidden md:block">
          <NavLinks
            mappedLinks={mappedLinks}
            webProperty={webProperty}
            active={active}
          />
        </div>
        <div className="block md:hidden">
          <Hamburger open={open} setOpen={setOpen} webProperty={webProperty} />
        </div>
        <div
          className={`
            ${open ? 'translate-y-0' : 'translate-y-full'}
            ${webProperty === 'ousd' ? 'bg-black' : 'bg-white'}
            transform md:hidden fixed top-0 bottom-0 right-0 left-0 transition-transform shadow z-50
          `}
        >
          <div className="relative h-full">
            <div className="flex flex-col justify-center align-middle h-full">
              <div className="absolute left-8 top-9 h-4">
                <a href="/">
                  {webProperty === 'ousd' && <OriginDollarLogo theme="dark" />}
                </a>
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
