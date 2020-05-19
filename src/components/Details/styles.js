import styled from 'styled-components';


export const Header = styled.header`
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background: ${props => props.theme.header};
    /* box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 1); */

    h1 {
        color: ${props => props.theme.color};
        font-size: 25px;
        margin-left: 50px;
    }

    h3 {
        color: ${props => props.theme.color};
        font-weight: 300;
        font-size: 14px;
        margin-right: 55px;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        svg {
            margin-right: 10px;
        }
    }
`;
export const Link = styled.button`
h3 {

    margin: 30px 0 0 200px;
    background: ${props => props.theme.background};
    padding: 10px;
    border: 0;
    color: ${props => props.theme.color};
    svg {
        margin-right: 5px;
    }
    text-decoration: none;
}

`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.background};
    max-width: 1440px;
    margin: auto;
    margin-bottom: 300px;
    height: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    text-decoration: none;
    overflow: hidden;

    &:nth-child(3){
        margin-top: 50px;
        display: block;
    }

    h3 {
    margin: 30px 0 0 200px;
    background: ${props => props.theme.header};
    padding: 8px;
    border-radius: 4px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: ${props => props.theme.color};
    font-weight: 300;

    svg {
        margin-right: 8px;
    }
    text-decoration: none;
    }
    img {
        display: flex;
        justify-content: center;

        width: 400px;
        margin: 50px 0 125px 200px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 0px 80px;

    div {
        margin-right: 130px;
    }
    h1 {
        color: ${props => props.theme.color};
        margin-bottom: 20px;
    }
    strong {
        display: flex;
        margin: 0px 5px 4px 0;
        font-weight: 300;
        color: ${props => props.theme.color};

        &:nth-child(1) {
            margin-left: 3px;
            color: ${props => props.theme.subcolor};
        }
    }
    p {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        /* font-size: 12px; */
        color: ${props => props.theme.color};


        &:nth-last-child(1) {
            margin-left: 5px;
            color: ${props => props.theme.subcolor};
            margin-bottom: 0;
        }
    }
    span {
        color: ${props => props.theme.color};
        display: flex;
        /* width: 30px; */
        margin-bottom: 4px;

        &:nth-child(1) {
            margin-left: 3px;
            color: ${props => props.theme.subcolor};
        }

    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 20px 0 0;
        color: ${props => props.theme.color};


       &:nth-child(1){
        background: ${props => props.theme.subcolor};


        /* width: 100px; */
       }

    }
    div {
        &:nth-last-child(1){
            margin-bottom: 20px;
            width: 280px;
        }

    }
`;
export const Footer = styled.footer`
        /* display: flex; */
        /* align-items: center;
        justify-content: center; */

        /* width: 100px; */
        /* height: 20px; */
`;
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: ${props => props.theme.color};
    margin: auto;

`;
