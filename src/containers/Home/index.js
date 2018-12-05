import React, { useState } from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Head title="Home" />
      Hello :D <br />
      <button onClick={() => setValue(value + 1)}>+</button> {value}
      <button onClick={() => setValue(value - 1)}>-</button>
    </Container>
  );
}
