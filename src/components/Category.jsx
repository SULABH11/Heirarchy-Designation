import React from 'react'
import { styled } from 'styled-components'
import { categories} from '../data'
import CategoryList from './CategoryList'

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
flex-wrap: wrap;
`

const Category = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryList item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Category