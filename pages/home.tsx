import { useState } from 'react';
import type { NextPage } from 'next'
import { Box, Heading, Text } from '@upstart/patina-design-system';

import Button from '../components/Button';

const Home: NextPage = () => {
  const [ count, setCount ] = useState(0)
  return (
    <>
      <Box atoms={{
        paddingY: 'l'
      }}>
        <Heading component='h1' size='xl' color='brand'>Hello, Patina!</Heading>
      </Box>
      <Button
        aria-controls='current-count'
        onClick={()=>{ setCount((c)=>c+1) }}
      >New Increment</Button>
      <Text id='current-count' role='status'>Current count: {count}</Text>
    </>
  )
}

export default Home
