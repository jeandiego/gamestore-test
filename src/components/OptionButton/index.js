import React from 'react';
import PlusSvg from '../../assets/plus.svg';
import DecreaseSvg from '../../assets/minus.svg';
import RemoveSvg from '../../assets/trash.svg';

import {Container} from './styles';

const AddButton = props => {
  return (
    <Container {...props}>
      <PlusSvg width={18} height={18} />
    </Container>
  );
};

const DecreaseButton = props => {
  return (
    <Container {...props}>
      <DecreaseSvg width={18} height={18} />
    </Container>
  );
};

const RemoveButton = ({remove, ...props}) => {
  return (
    <Container remove {...props}>
      <RemoveSvg width={18} height={18} />
    </Container>
  );
};

const DefaultButton = ({children, ...props}) => {
  return <Container {...props}>{children}</Container>;
};

const OptionButton = props => {
  const {type} = props;

  switch (type) {
    case 'add':
      return <AddButton {...props} />;
    case 'decrease':
      return <DecreaseButton {...props} />;
    case 'remove':
      return <RemoveButton {...props} />;
    default:
      return <DefaultButton {...props} />;
  }
};

export default OptionButton;
