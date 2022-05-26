import { useState } from 'react';
import type { NextPage } from 'next'
import { Box, Heading, Text } from '@upstart/patina-design-system';

const Home: NextPage = () => {
  const [ count, setCount ] = useState(0)
  return (
    <>
      <Box atoms={{
        paddingY: 'l'
      }}>
        <Heading component='h1' size='xl' color='brand'>Hello, Patina!</Heading>
      </Box>
      <Box
        component='button'
        aria-controls='current-count'
        atoms={{
          padding: 'xs',
          marginBottom: 'xs',
          backgroundColor: 'brand',
          color: 'onBrand',
          borderRadius: 'button',
          fontFamily: 'heading'
        }}
        onClick={()=>{ setCount((c)=>c+1) }}
      >Increment</Box>
      <Text id='current-count' role='status'>Current count: {count}</Text>
    </>
  )
}

export default Home
