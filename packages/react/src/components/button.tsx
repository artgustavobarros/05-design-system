import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$md',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',
  '&:disabled': { background: '$gray200', cursor: 'not-allowed' },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',
        '&:not(:disabled):hover': { background: '$ignite300' },
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',
        '&:not(:disabled):hover': { background: '$ignite500', color: '#fff' },
        '&:disabled': { color: '$gray200', borderColor: '$gray200' },
      },
      tertiary: {
        color: '$gray100',
        '&:not(:disabled):hover': { color: '#fff' },
        '&:disabled': { color: '$gray600' },
      },
    },
    size: {
      sm: { height: 38 },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
