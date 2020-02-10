import React from 'react';
import { JSDOM } from 'jsdom';

global.window = new JSDOM('').window;
global.document = global.window.document;

global.React = React;
global.externalLibrary = {
  logError: err => {
    console.log(err);
  },
};

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
