import React from 'react';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import Apple from './Apple';
import Banana from './Banana';
import Carrot from './Carrot';
import { curry, MockableAsync } from '../libs';

const Container = styled.div`
  border: 1px solid blue;
`;

let api = {
  thinq1: {},
  thinq2: {
    get: async (url) => {
      return new Promise((resolve, reject) => {
        resolve(`hello ${url}`);
      });
    }
  }
};

const getProductInfo = curry(async ({thinq2}, option) => {
  return await thinq2.get(`/product/${option.id}`);
})(api);

getProductInfo({id: 'thisisproductid'}).then((result) => {
  console.log('getProductInfo', result);
});

const Menu = styled.ul`
  margin: 0px;
  padding: 0px;
`
const MenuItem = styled.li`
  margin: 4px;  
  padding: 8px;
  width: 75px;
  border: 1px solid black;
  list-style-type: none;
  display: inline-block;
  :hover {
    background-color: grey;
    color: white;
  }
`




let Api = {
  getProductInfo: new MockableAsync(getProductInfo)
};

async function SomeFunction() {
  return Api.getProductInfo.request({id: 'hello'});
}

async function test() {
  Api.getProductInfo.fakeResult({obj: '???'});
  const result = await SomeFunction();
  console.log('test', result);
}

SomeFunction().then((result) => {
  console.log('real', result);
});

test();

SomeFunction().then((result) => {
  console.log('real', result);
});

const Workspace = props => {
  console.log("Workspace");
  return (
    <div>
      <p>This is Workspace</p>
      <div>
        <Menu>
        <Link to="./apple"><MenuItem>Apple</MenuItem></Link>
        <Link to="./banana"><MenuItem>Banana</MenuItem></Link>
        <Link to="./carrot"><MenuItem>Carrot</MenuItem></Link>
        </Menu>
      </div>
      <Container>
        <Routes>
          <Route path="apple/*" element={<Apple />}></Route>
          <Route path="banana/*" element={<Banana />}></Route>
          <Route path="carrot/*" element={<Carrot />}></Route>
          <Route path="*" element={<Apple />}></Route>
        </Routes>
      </Container>
    </div>
  );
};

Workspace.propTypes = {};

export default Workspace;