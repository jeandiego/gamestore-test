import React from 'react';
import GlobalContainer from '../../components/Common';
import {FilterSelect} from '../../components/FilterSelect';
import {HeaderHome} from '../../components/Header';
import {Loading} from '../../components/Loading';
import {PrimaryCard} from '../../components/PrimaryCard';
import {Title, Header, FiltersMenu, ProductsList} from './styles';

export function HomeView(props) {
  const {
    filter,
    products,
    quantity,
    loading,
    handleFilterSelect,
    handleHomeClick,
  } = props;

  return (
    <GlobalContainer>
      <Header>
        <HeaderHome handleHomeClick={handleHomeClick} quantity={quantity} />
      </Header>
      <Title>Encontre seu jogo</Title>
      <FiltersMenu>
        <FilterSelect filterSelected={filter} setFilter={handleFilterSelect} />
      </FiltersMenu>
      {loading ? (
        <Loading />
      ) : (
        <ProductsList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <PrimaryCard product={item} />;
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
        />
      )}
    </GlobalContainer>
  );
}
