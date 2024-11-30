export type TextPropsElement =
  | 'dt'
  | 'dd'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong'
  | 'legend'

export type TextPropsVariant =
  | 'display'
  | 'heading2xl'
  | 'headingXl'
  | 'headingLg'
  | 'headingMd'
  | 'headingSm'
  | 'bodyLg'
  | 'bodyMd'
  | 'bodySm'
  | 'caption'

export type TextPropsAlignment = 'start' | 'center' | 'end' | 'justify'

export type TextPropsWeight = 'regular' | 'medium' | 'bold'

export type TextPropsTone =
  | 'accent'
  | 'critical'
  | 'caution'
  | 'muted'
  | 'subtle'
  | 'content'
  | 'other'

export type TextPropsDecoration = 'line-through' | 'underline'

export interface TextProps {
  alignment?: TextPropsAlignment
  as: TextPropsElement
  breakWord?: boolean
  tone?: TextPropsTone
  truncate?: boolean
  uppercase?: boolean
  variant?: TextPropsVariant
  textDecoration?: TextPropsDecoration
  weight?: TextPropsWeight
}
