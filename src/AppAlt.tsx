import * as React from 'react';
import 'tachyons';
import 'colors.css';
import 'animate.css';
import { HackerNews } from './components/get-data/hacker-news';
import {
  Header,
  Sidebar,
  ToggleButton,
  headerItems,
  Item
} from './components/sidebar/Sidebar';
import { User } from './components/user/user';
import { ProgressBar } from './components/progress-bar/progress-bar';
import { FunkyTooltip, Popover } from './components/progress-bar/tooltip';
import ReactMarkdown from 'react-markdown';
import { Image } from './components/user/user-styles';
import { imageURL } from './imageURL';
import { markdown } from './markdown';
import { SwitchForm } from './components/switch-form/switch-form';
import { CheckboxForm } from './components/switch-form/checkbox-form';
import { ComproContainer } from './components/compromised-data/compro-container';
import { TachyonsBootstrap } from './components/tachyons-bootstrap/tachyons-bootstrap';
import { XkcdUi } from './components/xkcd/xkcd-ui';
import './components/layout/flexbox.css';
import { Layout } from './components/layout/Layout';
import { PageContent } from './components/layout/page-content';

const AppAlt = () => {
  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <PageContent />
    </React.Fragment>
  );
};

export default AppAlt;
