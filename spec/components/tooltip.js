import React from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import Tooltip from '../../components/tooltip';

const TooltipButton = Tooltip(Button);
const TooltipInput = Tooltip(Input);
const TooltipStrong = Tooltip(({children, ...other}) => {
  delete other.theme;
  return <strong {...other}>{children}</strong>;
});

const TooltipTest = () => (
  <section>
    <h5>Tooltip</h5>
    <p>Give information on :hover</p>
    <TooltipButton label='Bookmark' icon='bookmark' raised primary tooltip='Bookmark Tooltip' tooltipDelay={1000} />
    <TooltipButton icon='add' floating accent tooltip='Floating Tooltip' />
    <TooltipButton icon='add' floating disabled tooltip='Floating can not be shown' />
    <TooltipInput tooltip='lorem ipsum...' />
    <p>Lorem ipsum dolor sit amet, <TooltipStrong tooltip='This is a auto show tooltip'>consectetur</TooltipStrong> adipiscing elit.</p>
  </section>
);

export default TooltipTest;
