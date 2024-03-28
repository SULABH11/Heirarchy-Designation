import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import { categories } from './../data';
import Basic from './CategoryList';

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const StyledTree = () => (
  <Tree
    lineWidth={'2px'}
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