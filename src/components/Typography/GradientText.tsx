export interface GradientTextProps {
  /**
   * What property is this button for?
   */
  webProperty: 'originprotocol' | 'ousd' | 'story'
  /**
   * Children to wrap with Gradient styling
   */
  children?: React.ReactNode
  /**
   * Text to use with Gradient styling, comes before children if both are used
   */
  text?: string
  /**
   * Optional tuple of hex strings to use as gradients, beginning then middle then end
   */
  gradients?: [string, string, string]
}

const gradientsSets = {
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
  children,
  text,
  gradients,
}: {
  webProperty: 'originprotocol' | 'ousd' | 'story'
  children?: React.ReactNode
  text?: string
  gradients?: string[]
}) => {
  const gradientStyling = gradients
    ? `${gradients[0]}, ${gradients[1]}, ${gradients[2]}`
    : `${gradientsSets[`${webProperty}-gradient-start`]}, ${gradientsSets[`${webProperty}-gradient-middle`]}, ${gradientsSets[`${webProperty}-gradient-end`]}`

  return (
    <span
      style={{
        background: `-webkit-linear-gradient(0deg, ${gradientStyling})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      className="font-black"
    >
      {text}
      {children}
    </span>
  )
}