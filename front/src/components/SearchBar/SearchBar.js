import styled from 'styled-components'

export const ContainerSearchBar = styled.div`
    background-color: none;
    width: 300px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
`

export const Container = styled.div`
    width: 250px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
`

export const InputSearch = styled.input`
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px 0 0 8px;
    padding-left: 5px;
    &:focus,
    &:focus-visible {
        outline: none;
    }
`

export const SearchButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    background-color: none;
    border-radius: 0 8px 8px 0;
    font-size: 12px;
    border-left: solid 1px black;
    padding: 0 10px;
    cursor: pointer;
    &:focus,
    &:focus-visible {
        outline: none;
    }
`

// export default {
//     SearchButton,
//     InputSearch,
//     ContainerSearchBar
// }
