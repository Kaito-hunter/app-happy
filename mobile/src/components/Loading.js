import React from 'react';
import { Container, Spinner } from 'native-base';

const Loading = ({ visible }) => {
  if (visible)
    return (
      <Container style={{ justifyContent: 'center' }}>
        <Spinner color="#F00" />
      </Container>
    );
  else return null;
};
export default Loading;
