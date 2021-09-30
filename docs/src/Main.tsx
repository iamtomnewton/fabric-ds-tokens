import * as React from 'react';
import { render } from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import {
  BrowserRouter as Router,
  Switch as ReactSwitch,
  Route,
} from 'react-router-dom';

import Code from './components/Code';
import PropTable from './components/PropTable';

import Home from '../pages/index.mdx';
import GettingStarted from '../pages/getting-started.mdx';
import Modal from '../../packages/modal/docs/Modal.mdx';
import Breadcrumbs from '../../packages/breadcrumbs/docs/Breadcrumbs.mdx';

import Tabs from '../../packages/tabs/docs/Tabs.mdx';
import TextField from '../../packages/textfield/docs/TextField.mdx';
import Select from '../../packages/select/docs/Select.mdx';
import TextArea from '../../packages/textarea/docs/TextArea.mdx';
import Combobox from '../../packages/combobox/docs/Combobox.mdx';
import Button from '../../packages/button/docs/Button.mdx';
import Slider from '../../packages/slider/docs/Slider.mdx';
import Box from '../../packages/box/docs/Box.mdx';
import Expandable from '../../packages/expandable/docs/Expandable.mdx';
import Switch from '../../packages/switch/docs/Switch.mdx';
import Toggle from '../../packages/toggle/docs/Toggle.mdx';
import Steps from '../../packages/steps/docs/Steps.mdx';
import Card from '../../packages/card/docs/Card.mdx';

const components = {
  code: Code,
  PropTable,
  pre: (props) => <div {...props} />,
  img: ({ style, ...props }) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img {...props} style={{ maxWidth: '100%', ...style }} />
  ),
  h1: (props) => <h1 className="mb-20" {...props} />,
  h2: (props) => <h2 className="mt-48 mb-20" {...props} />,
  h3: (props) => <h3 className="mt-20 mb-20" {...props} />,
};

const App = () => {
  return (
    <MDXProvider components={components}>
      <Router>
        <ReactSwitch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/getting-started">
            <GettingStarted />
          </Route>

          <Route path="/modal">
            <Modal />
          </Route>

          <Route path="/breadcrumbs">
            <Breadcrumbs />
          </Route>

          <Route path="/textfield">
            <TextField />
          </Route>

          <Route path="/select">
            <Select />
          </Route>

          <Route path="/tabs">
            <Tabs />
          </Route>

          <Route path="/textarea">
            <TextArea />
          </Route>

          <Route path="/slider">
            <Slider />
          </Route>

          <Route path="/combobox">
            <Combobox />
          </Route>

          <Route path="/button">
            <Button />
          </Route>

          <Route path="/box">
            <Box />
          </Route>

          <Route path="/expandable">
            <Expandable />
          </Route>

          <Route path="/switch">
            <Switch />
          </Route>

          <Route path="/toggle">
            <Toggle />
          </Route>

          <Route path="/steps">
            <Steps />
          </Route>

          <Route path="/Card">
            <Card />
          </Route>
        </ReactSwitch>
      </Router>
    </MDXProvider>
  );
};

render(App(), document.querySelector('#root'));
