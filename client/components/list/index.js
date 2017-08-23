import { h } from "preact";
import styled, { css } from 'emotion/react'
import theme from '../../helpers/theme';

const UL = styled('ul')`
  list-style: none;
  width: 100%;
  padding: 0px;
  margin: 0;
  li {
    height: 40px;
    padding: 0px 10px;
    &:nth-child(odd) {background: rgba(44, 44, 71, 0.3)}
    display: flex;
    align-items: center;
    color: #FFF;
    span {
      display: inline-block;
      width: 20%;
    }
    .name {
      width: 40%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const List = (assets = []) =>
  <UL>
    <li>Preact</li>
  </UL>;

export default List;
