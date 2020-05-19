import styled from 'styled-components';

export const Header = styled.header`
    border: 1px solid ${props => props.theme.border};
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background:${props => props.theme.header};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

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

export const Container = styled.div`
    border: 1px solid ${props => props.theme.border};

    background: ${props => props.theme.background};
    max-width: 1300px;
    margin: auto;
    position: relative;
    /* max-height: 1000px; */
    /* height: 600px; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /* div {
        display: flex;
        justify-content: space-between;
    } */
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.header};
        height: 45px;
        margin: 35px 0px 20px 50px;
        border-radius: 4px;
        border: 0.5px solid ${props => props.error ? ('1px', 'solid', 'hsl(0, 100%, 65%)') : '0'};
    }
    input {
        background: ${props => props.theme.input};

        border: 0;
        padding: 0 180px 0px 10px;
        border-radius: 4px;
        color: ${props => props.theme.color};
        &::placeholder {
            color: ${props => props.theme.color};
        }
    }
    svg {
        margin-left: 25px;
        align-items: center;
        background: ${props => props.theme.header};
        color: ${props=> props.theme.color};

        cursor: pointer;
    }

    p {
        margin: 15px 30px 0 0;
        font-size: 13px;
        color:  ${props => props.theme.color};
        padding: 14px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        background: ${props => props.theme.header};
        /* background: #939; */
        cursor: pointer;
        svg {
            cursor: pointer;
            margin-left: 15px;
        }
    }
    header {
        position: relative;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: grid;
    /* grid-column-gap: 5px; */
    grid-gap: 35px;
    grid-template-columns: auto auto auto auto;
    position: relative;

    margin: 35px 50px 25px 50px;

    li {
        background: ${props => props.theme.header};
        /* display: inline; */
        /* align-items: center;
        justify-content: center; */
        margin: 0 5px 25px 0;
        width: 225px;
        height: 300px;
        color: ${props => props.theme.color};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        cursor: pointer;
        position: relative;

        img {
            /* border-radius: 4px; */
            max-width: 100%;
            /* max-width: 200px; */
            max-height: 60%;
            /* height: 54%; */
        }
    }
    h1 {
        font-size: 13px;
        margin: 18px 0px 15px 20px;
    }
    strong {
        /* display: flex; */
        margin: 15px 0px 0px 20px;
        font-weight: 300;

        &:nth-child(1) {
            margin-left: 3px;
            color: ${props => props.theme.subcolor};
        }
    }
    p {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin: 2px 0px 2px 20px;

        &:nth-last-child(1) {
            margin-left: 5px;
            color: ${props => props.theme.subcolor};
        }
        /* p{
            position: absolute;
        } */
    }
    span {
        margin: 2px 0px 5px 20px;

        &:nth-child(1) {
            margin-left: 3px;
            color: ${props => props.theme.subcolor};
        }
    }
`;
export const Link = styled.a`
    text-decoration: none;
`;

export const RegionModal = styled.div`

`;
export const RegionToogle = styled.div``;
export const Footer = styled.footer`
     color: ${props => props.theme.colorfooter};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin-top: 180px;

`;
