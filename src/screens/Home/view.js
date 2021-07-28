import React from 'react';
import {FlatList, View} from 'react-native';
import GlobalContainer from '../../components/Common';
import {Empty} from '../../components/Empty';
import {FilterSelect} from '../../components/FilterSelect';
import {HeaderHome} from '../../components/Header';
import {ProductCard} from '../../components/ProductCard';
import {Title, Header, FiltersMenu} from './styles';

export function HomeView(props) {
  const {filter, products, handleFilterSelect, handleHomeClick} = props;

  return (
    <GlobalContainer>
      <Header>
        <HeaderHome handleHomeClick={handleHomeClick} />
      </Header>
      <Title>Encontre seu jogo</Title>
      <FiltersMenu>
        <FilterSelect filterSelected={filter} setFilter={handleFilterSelect} />
      </FiltersMenu>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        renderItem={({item}) => {
          return <ProductCard products={item} />;
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
      />
    </GlobalContainer>
  );
}
