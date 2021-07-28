import React from 'react';
import {AvatarBg, AvatarImage, Border} from './styles';

export function Avatar({urlImage}) {
  return (
    <AvatarBg>
      <Border>
        <AvatarImage source={{uri: urlImage}} />
      </Border>
    </AvatarBg>
  );
}
