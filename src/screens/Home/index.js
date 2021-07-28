import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeView} from './view';
import {getProducts} from '../../controller/products';

export function Home() {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  function handleHomeClick() {
    navigation.navigate('Cart');
  }

  function handleFilterSelect(filterId) {
    return filterId === filter ? setFilter('') : setFilter(filterId);
  }

  async function fetchProducts() {
    const productsList = await getProducts();

    setProducts(productsList);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <HomeView
      filter={filter}
      products={products}
      handleHomeClick={handleHomeClick}
      handleFilterSelect={handleFilterSelect}
    />
  );
}
