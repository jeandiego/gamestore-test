import React from 'react';
import {Container} from './styles';
import {filters} from '../../utils/filters';
import {Filter} from '../Filter';

export function FilterSelect({filterSelected, setFilter}) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}>
      {filters.map(filter => (
        <Filter
          key={filter.id}
          title={filter.title}
          onPress={() => setFilter(filter.id)}
          checked={filter.id === filterSelected}
        />
      ))}
    </Container>
  );
}
