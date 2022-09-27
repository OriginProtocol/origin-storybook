import React, { Component } from 'react'

export interface TypographyProps {
  /**
   * Children to wrap with typography styling
   */
  children: React.ReactNode
  /**
   * Additional className to add onto ones supplied by typography componnent
   */
  className?: string
  /**
   * Additional styling to add onto typography component
   */
  style?: object
  /**
   * Tag type to use
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'q' | 'code' | 'a' | 'div'
  /**
   * Tag type to default to if not tag type supplied
   */
  defaultAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'q' | 'code' | 'a' | 'div'
  /**
   * Href for links
   */
  href?: string
}

const GenericTypography = ({
  children,
  className,
  style,
  defaultAs,
  as,
  href,
}: TypographyProps) => {
  const Tag = `${as || defaultAs || 'span'}` as keyof JSX.IntrinsicElements

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        className={`${className}`}
        style={{...(style || {})}}
      >
        <Tag
        >
          {children}
        </Tag>
      </a>
    )
  } else {
    return (
      <Tag
        className={`${className}`}
        style={{...(style || {})}}
      >
        {children}
      </Tag>
    )
  }
}

const gradients = {
  'originprotocol-gradient-start': '#8C66FC',
  'originprotocol-gradient-middle': '#5C2EFF',
  'originprotocol-gradient-end': '#0274F1',
  'ousd-gradient-start': '#8C66FC',
  'ousd-gradient-middle': '#0274F1',
  'ousd-gradient-end': '#0274F1',
  'story-gradient-start': '#CB6FDE',
  'story-gradient-middle': '#5C2EFF',
  'story-gradient-end': '#0074F0',
}

export const GradientText = ({
  webProperty,
  text
}: {
  webProperty: 'originprotocol' | 'ousd' | 'story',
  text: string,
}) => {
  return (
    <span
      style={{
        background: `-webkit-linear-gradient(0deg, ${gradients[`${webProperty}-gradient-start`]}, ${gradients[`${webProperty}-gradient-middle`]}, ${gradients[`${webProperty}-gradient-end`]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      className="font-black"
    >
      {text}
    </span>
  )
}

export class Typography extends Component<TypographyProps> {
  static H1 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-bold text-5xl md:text-8xl ${className}`} style={style} as={as} defaultAs='h1'>
        {children}
      </GenericTypography>
    )
  }

  static H2 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-medium text-4xl md:text-7xl ${className}`} style={style} as={as} defaultAs='h2'>
        {children}
      </GenericTypography>
    )
  }

  static H3 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-medium text-3xl md:text-6xl ${className}`} style={style} as={as} defaultAs='h3'>
        {children}
      </GenericTypography>
    )
  }

  static H4 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-medium text-2xl md:text-5xl ${className}`} style={style} as={as} defaultAs='h4'>
        {children}
      </GenericTypography>
    )
  }

  static H5 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-medium text-xl md:text-4xl ${className}`} style={style} as={as} defaultAs='h5'>
        {children}
      </GenericTypography>
    )
  }

  static H6 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-medium text-lg md:text-3xl ${className}`} style={style} as={as} defaultAs='h6'>
        {children}
      </GenericTypography>
    )
  }

  static H7 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansSailec font-medium text-base md:text-2xl ${className}`} style={style} as={as} defaultAs='h6'>
        {children}
      </GenericTypography>
    )
  }

  static Body = ({
    children,
    className = '',
    style,
    href,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-normal text-base md:text-xl ${className}`} style={style} as={as} defaultAs='p' href={href}>
        {children}
      </GenericTypography>
    )
  }

  static Body2 = ({
    children,
    className = '',
    style,
    href,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-normal text-base ${className}`} style={style} as={as} defaultAs='p' href={href}>
        {children}
      </GenericTypography>
    )
  }

  static Title = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-bold text-base ${className}`} style={style} as={as} defaultAs='p'>
        {children}
      </GenericTypography>
    )
  }

  static Title2 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-bold text-xs ${className}`} style={style} as={as} defaultAs='p'>
        {children}
      </GenericTypography>
    )
  }

  static Caption = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-normal text-sm ${className}`} style={style} as={as} defaultAs='p'>
        {children}
      </GenericTypography>
    )
  }

  static Caption2 = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-normal text-xs ${className}`} style={style} as={as} defaultAs='p'>
        {children}
      </GenericTypography>
    )
  }

  static Label = ({
    children,
    className = '',
    style,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-bold text-sm uppercase ${className}`} style={style} as={as} defaultAs='span'>
        {children}
      </GenericTypography>
    )
  }

  static Link = ({
    children,
    className = '',
    style,
    as,
    href,
  }: TypographyProps) => {
    return (
      <GenericTypography className={`font-sansInter font-bold text-base text-link-blue ${className}`} style={style} as={as} defaultAs='p' href={href}>
        {children}
      </GenericTypography>
    )
  }

  render () {
    return (
      <Typography.Body {...this.props} />
    )
  }
}