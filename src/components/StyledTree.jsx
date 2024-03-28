import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import { categories } from './../data';
import Basic from './CategoryList';
import "../styles/card.css"

const StyledNode = styled.div`
  padding: 0px;
  border-radius: 10px;
  display: inline-block;
  border: 1px solid black;
`;

const StyledTree = () => (
  <Tree
    lineWidth={'1.5px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<StyledNode><Basic item = {categories[0]} /></StyledNode>}
  >
    <TreeNode label={<StyledNode><Basic item = {categories[1]} /></StyledNode>}>
      <TreeNode label={<StyledNode><Basic item = {categories[5]} /></StyledNode>} />
      <TreeNode label={<StyledNode><Basic item = {categories[6]} /></StyledNode>} />
      <TreeNode label={<StyledNode><Basic item = {categories[7]} /></StyledNode>} />
    </TreeNode>

    <TreeNode label={<StyledNode><Basic item = {categories[2]} /></StyledNode>}>
      <TreeNode label={<StyledNode><Basic item = {categories[3]} /></StyledNode>} />
      <TreeNode label={<StyledNode><Basic item = {categories[4]} /></StyledNode>} />
      <TreeNode label={<StyledNode><Basic item = {categories[8]} /></StyledNode>} />
      <TreeNode label={<StyledNode><Basic item = {categories[9]} /></StyledNode>} />
    </TreeNode>
  </Tree>
);

export default StyledTree