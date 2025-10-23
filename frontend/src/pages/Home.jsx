import React from 'react';
import { AppLayout, ContentLayout, Header, Container, SpaceBetween } from '@cloudscape-design/components';
import { APP_NAME } from '../common/constants';

const HomePage = () => {
  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <ContentLayout
          header={
            <Header variant="h1" description="Welcome to your starter pack">
              {APP_NAME}
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="l">
            <Container>
              <SpaceBetween direction="vertical" size="m">
                <div>
                  <h3>Getting Started</h3>
                  <p>
                    This is a minimal starter pack with Cognito authentication and Cloudscape design system. You can now
                    build your application on top of this foundation.
                  </p>
                </div>
                <div>
                  <h3>What&apos;s Included</h3>
                  <ul>
                    <li>AWS Cognito authentication</li>
                    <li>Cloudscape Design System components</li>
                    <li>React with TypeScript</li>
                    <li>Vite build system</li>
                    <li>Dark/Light theme support</li>
                  </ul>
                </div>
              </SpaceBetween>
            </Container>
          </SpaceBetween>
        </ContentLayout>
      }
    />
  );
};

export default HomePage;
