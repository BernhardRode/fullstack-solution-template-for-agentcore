import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { TopNavigation } from '@cloudscape-design/components';
import { Mode } from '@cloudscape-design/global-styles';
import StorageHelper from '../common/helpers/storage-helper';
import { APP_NAME } from '../common/constants';

const GlobalHeader = () => {
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  return (
    <div style={{ zIndex: 1002, top: 0, left: 0, right: 0, position: 'fixed' }}>
      <TopNavigation
        identity={{
          href: '/',
          title: APP_NAME,
        }}
        utilities={[
          {
            type: 'button',
            iconName: 'settings',
            title: 'Theme',
            ariaLabel: 'Theme',
            onItemClick: () => {
              const currentTheme = StorageHelper.getTheme();
              const newTheme = currentTheme === Mode.Dark ? Mode.Light : Mode.Dark;
              StorageHelper.setTheme(newTheme);
            },
          },
          {
            type: 'menu-dropdown',
            text: user?.signInDetails?.loginId || 'User',
            description: user?.signInDetails?.loginId,
            iconName: 'user-profile',
            items: [
              {
                id: 'signout',
                text: 'Sign out',
              },
            ],
            onItemClick: ({ detail }) => {
              if (detail.id === 'signout') {
                signOut();
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default GlobalHeader;
