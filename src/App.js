import React,{useState} from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Menu from './Menu/Menu';
import Order from './Оrder/Order';
import FoodDialog from './FoodDialog/FoodDialog';
import {GlobalStyle} from './Styles/GlobalStyles';
import {useOpenFood} from './Hooks/useOpenFood';
import {useOrders} from './Hooks/useOrders';
import {useTitle} from './Hooks/useTitle';
function App() {
  const openFood=useOpenFood();
  const orders=useOrders();
  useTitle({...openFood,...orders});
  return (
    <>
    <GlobalStyle/>
    <FoodDialog {...openFood} {...orders}/>
    <Navbar/>
    <Order {...orders}/>
    <Banner/>
    <Menu {...openFood}/>
    </>
  );
}

export default App;
