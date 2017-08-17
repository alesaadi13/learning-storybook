import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import '../App.css';

/*import { Button, Welcome } from '@storybook/react/demo';*/
import {Welcome} from '@storybook/react/demo';
import Button from '../components/Button'
import Label from '../components/Label'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);
storiesOf('Label', module).add('label', () => <Label className="labelStyle" text="hello"/>);

storiesOf('Button', module)
    .add('with text', () => <Button className="btnStyle" onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);