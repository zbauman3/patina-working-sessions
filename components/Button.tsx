import { Box, Atoms } from '@upstart/patina-design-system';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  backgroundColor?: Atoms['backgroundColor']
}

const Button = ({children, backgroundColor, ...props}: ButtonProps)=>(
  <Box
    {...props}
    component='button'
    atoms={{
      padding: 'xs',
      marginBottom: 'xs',
      backgroundColor: backgroundColor || 'brand',
      color: 'onBrand',
      borderRadius: 'button',
      fontFamily: 'heading'
    }}
  >{children}</Box>
)

export default Button