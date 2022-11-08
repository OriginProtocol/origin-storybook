import { useState } from "react";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import {
  LanguageOptions,
  OgnDropdownOptions,
  ProductsOptions,
} from "./HeaderOptions";
import { OriginDollarLogo, OriginLogo, OriginStoryLogo } from "../Icons";

export type MappedLink<Link> = {
  href?: string;
  label: string;
  isButton: boolean;
  highlightText?: string;
  order: number;
  target?: string;
  links?: Link[];
};

export type LinkFormatted<IconFormatted> = {
  label: string;
  href: string;
  highlight?: boolean;
  target: string;
  icon?: IconFormatted;
};

export type IconFormatted = {
  alternativeText: string;
  caption: string;
  url: string;
};

const NavLinks = ({
  mappedLinks,
  webProperty,
}: {
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[];
  webProperty: "originprotocol" | "ousd" | "story";
}) => (
  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
    {mappedLinks.map((mappedLink) => {
      if (!mappedLink.isButton && mappedLink.links) {
        if (mappedLink.links.length > 0) {
          return (
            <Dropdown
              label={mappedLink.label}
              highlightText={mappedLink.highlightText}
              options={mappedLink.links}
              key={mappedLink.label}
              bolding="none"
            />
          );
        } else {
          return (
            <Button
              label={mappedLink.label}
              type="header"
              size="nav"
              key={mappedLink.label}
              href={mappedLink.href}
              webProperty={webProperty}
              target={mappedLink.target}
              rel="nofollow"
            />
          );
        }
      }
    })}
    <div className="flex flex-col md:flex-row md:space-x-5 md:pl-4 items-center justify-center space-y-4 md:space-y-0">
      {mappedLinks.map((mappedLink) => {
        if (mappedLink.isButton) {
          return (
            <Button
              size="small"
              label={mappedLink.label}
              href={mappedLink.href}
              target={mappedLink.target}
              webProperty="story"
            />
          );
        }
      })}
    </div>
  </div>
);

const Hamburger = ({
  setOpen,
  open,
  webProperty,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  webProperty: "originprotocol" | "ousd" | "story";
}) => (
  <div className="space-y-2 cursor-pointer" onClick={() => setOpen(!open)}>
    <span
      className={`block w-8 h-0.5 ${webProperty === 'ousd' ? 'bg-white' : 'bg-gray-600'} transform transition-transform ${
        open ? "rotate-45 translate-y-1.5" : ""
      }`}
    ></span>
    <span
      className={`block w-8 h-0.5 ${webProperty === 'ousd' ? 'bg-white' : 'bg-gray-600'} transform transition-transform ${
        open ? "-rotate-45 -translate-y-1" : ""
      }`}
    ></span>
  </div>
);

export interface HeaderProps {
  /**
   * webProperty that header will be used on, changes logo on left side
   */
  webProperty: "originprotocol" | "ousd" | "story";
  /**
   * Array of link objects the header will use to create dropdowns and buttons
   */
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[];
  /**
   * Language option for i18n
   */
  language?: string;
}

export const Header = ({ webProperty, mappedLinks, language }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="px-9 py-9 md:py-16 w-full flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex h-4 md:h-6">
          <a href="/">
            {webProperty === "originprotocol" && <OriginLogo />}
            {webProperty === "ousd" && <OriginDollarLogo theme="dark" />}
            {webProperty === "story" && <OriginStoryLogo />}
          </a>
        </div>
        <div className="hidden md:block">
          <NavLinks mappedLinks={mappedLinks} webProperty={webProperty} />
        </div>
        <div className="block md:hidden">
          <Hamburger open={open} setOpen={setOpen} webProperty={webProperty} />
        </div>
        <div
          className={`
            ${open ? "translate-y-0" : "translate-y-full"}
            ${webProperty === "ousd" ? "bg-black" : "bg-white"}
            transform md:hidden fixed top-0 bottom-0 right-0 left-0 transition-transform shadow z-50
          `}
        >
          <div className="relative h-full">
            <div className="flex flex-col justify-center align-middle h-full">
              <div className="absolute right-8 top-16">
                <Hamburger open={open} setOpen={setOpen} webProperty={webProperty} />
              </div>
              <NavLinks mappedLinks={mappedLinks} webProperty={webProperty} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
