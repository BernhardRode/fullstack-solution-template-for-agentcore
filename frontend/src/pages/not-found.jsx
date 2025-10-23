import React from 'react';
import { AppLayout, ContentLayout, Header, Container, Button, SpaceBetween } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <ContentLayout header={<Header variant="h1">Page not found</Header>}>
          <Container>
            <SpaceBetween direction="vertical" size="m">
              <div>
                <p>The page you are looking for does not exist.</p>
              </div>
              <div>
                <Button variant="primary" onClick={() => navigate('/')}>
                  Go to home page
                </Button>
              </div>
            </SpaceBetween>
          </Container>
        </ContentLayout>
      }
    />
  );
};

export default NotFound;
