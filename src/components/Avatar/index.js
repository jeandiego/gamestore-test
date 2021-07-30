import React from 'react';
import {AvatarBg, AvatarImage, Border} from './styles';

export function Avatar({urlImage, ...props}) {
  return (
    <AvatarBg {...props}>
      <Border>
        <AvatarImage source={{uri: urlImage}} />
      </Border>
    </AvatarBg>
  );
}
