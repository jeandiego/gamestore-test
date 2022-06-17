import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HomeView} from './view';
import {getProducts} from '../../controller/products';
import {filterIds} from '../../utils/filters';
import {
  setFilter,
  setDefaultProducts,
  setProducts,
} from '../../store/reducers/market';
import {sortAlphabetically} from '../../utils/sort';

export function Home() {
  const [loading, setLoading] = useState(false);
  const {
    cart: {quantity},
    market: {defaultProducts, products, filter},
  } = useSelector(store => store);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  function handleCartClick() {
    navigation.navigate('Cart');
  }

  function handleProfileClick() {
    navigation.navigate('Profile');
  }

  function handleFilterSelect(filterId) {
    return filterId === filter
      ? dispatch(setFilter(0))
      : dispatch(setFilter(filterId));
  }

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const productsList = await getProducts();
      console.tron.log(productsList);
      console.log(productsList);

      dispatch(setProducts(productsList));
      dispatch(setDefaultProducts(productsList));
      setLoading(false);
    }
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    function handleFilter(_products) {
      switch (filter) {
        case filterIds.popular:
          return _products.sort((a, b) => b.score - a.score);
        case filterIds.lowPrice:
          return _products.sort((a, b) => a.price - b.price);
        case filterIds.highPrice:
          return _products.sort((a, b) => b.price - a.price);
        case filterIds.aZ:
          return _products.sort((a, b) => sortAlphabetically(a, b));
        case filterIds.zA:
          return _products.sort((a, b) => sortAlphabetically(b, a));
        default:
          return defaultProducts;
      }
    }
    if (defaultProducts) {
      const ordernedProducts = handleFilter([...defaultProducts]);
      dispatch(setProducts(ordernedProducts));
    }
  }, [dispatch, filter, defaultProducts]);

  return (
    <HomeView
      filter={filter}
      products={products}
      loading={loading}
      quantity={quantity}
      handleCartClick={handleCartClick}
      handleProfileClick={handleProfileClick}
      handleFilterSelect={handleFilterSelect}
    />
  );
}
