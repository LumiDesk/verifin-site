import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { buttonStyles, type ButtonSize, type ButtonVariant } from './button-styles'

interface ButtonStyles {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyles

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size, className })} {...props} />
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonStyles

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonStyles({ variant, size, className })} {...props} />
}
