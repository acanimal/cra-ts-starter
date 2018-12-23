import { configure, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

addDecorator(
  // Show components properties
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#efefef',
        padding: '0px 5px',
      },
    },
    inline: true,
    source: true,
  })
);

// Automatically import all files ending in *.tsx
const req = require.context('../src/stories', true, /.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
