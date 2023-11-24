import React from "react"
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import Head from "./Components/Head";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/utils/store";
import Sidebar from "./Components/Sidebar"

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Render the Header component and test if the relevant features within the Component are loaded",()=>{
it("should load the searchBar feature in header component",()=>{
   render(<BrowserRouter><Provider store={store}><Head/></Provider></BrowserRouter>)
  
  
  const searchBar=screen.getByPlaceholderText("Search here")
  expect(searchBar).toBeInTheDocument()
   

})
it("should render the search Button",()=>{
  render(<BrowserRouter><Provider store={store}><Head/></Provider></BrowserRouter>)

  const searchButton=screen.getByTestId("searchButton")
  expect(searchButton).toBeInTheDocument()

})

it("should load the Toggle SideMenu Button",()=>{
  render(<BrowserRouter><Provider store={store}><Head/></Provider></BrowserRouter>)

  const toggleSideButton=screen.getByTestId("toggleSideButton")
  expect(toggleSideButton).toBeInTheDocument()

})

})

it("should toggle the sideBar off while clicking toggleSideBar Button",()=>{
  render(<BrowserRouter><Provider store={store}><><Sidebar/><Head/></></Provider></BrowserRouter>)

  const toggleSideButton=screen.getByTestId("toggleSideButton")
  expect(toggleSideButton).toBeInTheDocument()
  
  const sideBar=screen.getByTestId("sidebar")
  expect(sideBar).toBeInTheDocument()
  
  
  fireEvent.click(toggleSideButton)

  const sideBarAfterClick=screen.getByTestId("sidebar")
  expect(sideBarAfterClick).not.toBeInTheDocument()


})