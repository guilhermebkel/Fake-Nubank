import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: { alignItems: 'center' },
})`
    margin: 0 30px;
`

export const Code = styled.Image`
    background-color: #FFF;
    padding: 10px;
    width: 150px;
    height: 150px;
`