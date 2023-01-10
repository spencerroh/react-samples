import React from 'react';
import PropTypes from 'prop-types';
import IMG_LOG_ICON from '../assets/free-icon-log-document-1465600.png';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const PrimaryMenu = styled.li`
  box-sizing: block;
  margin: 8px;
  

  & > .PrimaryMenuTitle {
    display: flex;
    width: 100%;
    padding: 8px;
    background-color: #F5F5DC;
    border-radius: 16px;

    & > span.PrimaryMenuName {
      flex-grow: 1;
    }

    & > span.PrimaryMenuCount {
      width: 50px;
      color: white;
      background-color: #ECA869;
      text-align: center;
      border-radius: 16px;
    }
  }

  & > ul {
    margin-left: 4px;
    padding: 8px 4px 8px 8px;
    user-select: none;

    & > li {
      display: flex;
      padding: 4px 4px 4px 8px;
      border-radius: 8px;
      cursor: pointer;

      & > .SubMenuName {
        flex-grow: 1;
      }

      & > .SubMenuCount {
        width: 50px;
        color: white;
        background-color: #ECA869;
        text-align: center;
        border-radius: 16px;
      }

      &:hover {
        background-color: #B5D5C5;
      }
    }
  }
`;

const SideMenu = ({ onMenuClicked }) => {
  const menus = {
    GWP: [
      { version: "9.0", count: 20, },
      { version: "9.1", count: 30, },
      { version: "9.2", count: 10, },
      { version: "9.3", count: 50, },
      { version: "9.4", count: 42, },
    ],
    GQM: [
      { version: "9.0", count: 20, },
      { version: "9.1", count: 30, },
      { version: "9.2", count: 10, },
      { version: "9.3", count: 50, },
      { version: "9.4", count: 42, },
    ],
    GUM: [
      { version: "9.0", count: 20, },
      { version: "9.1", count: 30, },
      { version: "9.2", count: 10, },
      { version: "9.3", count: 50, },
      { version: "9.4", count: 42, },
    ],
    GIM: [
      { version: "9.0", count: 20, },
      { version: "9.1", count: 30, },
      { version: "9.2", count: 10, },
      { version: "9.3", count: 50, },
      { version: "9.4", count: 42, },
    ],
    GOP: [
      { version: "9.0", count: 20, },
      { version: "9.1", count: 30, },
      { version: "9.2", count: 10, },
      { version: "9.3", count: 50, },
      { version: "9.4", count: 42, },
    ]
  };

  return (
    <div className="h-full flex flex-col">
      <div className='flex w-full justify-center'>
        <img src={IMG_LOG_ICON} alt="" className='my-20 w-9/12'/>
      </div>
      <ul className='overflow-y-auto flex-grow-[1]'>
        {Object.keys(menus).map((key, i) => {
          return (
          <PrimaryMenu key={i}>
            <div className="PrimaryMenuTitle">
              <span className="PrimaryMenuName">{key}</span>
              <span className="PrimaryMenuCount">{menus[key].reduce((accm, current) => accm + current.count, 0)}</span>
            </div>
            <ul>
              {menus[key].map((item, i) => {
                return (
                  <li key={i} className='SubMenu'>
                    <span className="SubMenuName">{item.version}</span>
                    <span className="SubMenuCount">{item.count}</span>
                  </li>
                )
              })}
            </ul>
          </PrimaryMenu>)
        })}
      </ul>
    </div>
  );
};

SideMenu.propTypes = {
  
};

export default SideMenu;