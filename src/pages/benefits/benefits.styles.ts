import { Container } from "react-bootstrap";
import styled from "styled-components";

export const ContainerStyled = styled(Container)`
    h2{
        color: #0B344E;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 36px;
    }
`;

export const BenefitsPageStyled = styled.div`
    padding-bottom:90px;
`;

export const WrapperButtonStyled = styled.div`
    width: 100%;
    margin-top:30px;
`;

export const MoreBenefitsStyled = styled.div`
    padding: 1rem 0;
`;
export const CardStyled = styled.div`
    max-width: 300px;
    height: 335px;
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid #C5DFE8;
    color: #0B344E;
    margin: 10px;

    &:nth-child(4n + 1) {
        margin-left: 0;
    }
    img {
        width: 50px;
    }

    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        padding: .5rem 0;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const BenefitStyled = styled.div`
    padding: .5rem 0;
    margin: 0;

    .texto div {
        width: 100%;
    }


    .imagem {
        padding: 0;
    }
    img{
        border-radius: 20px;
    }
`;

export const ContainerButtonStyled = styled.div`
    max-width: 462px;
    width: 100%;

    @media (max-width: 1000px) {
        .button-benefits{
            margin-bottom: 30px;   
        }
    }
`;

export const InfosStyled = styled.div`
    margin: 0 auto;

    img {
        max-width: 100%;
        border-radius: 20px;
    }
    p.type-material:first-of-type {
        color: #36C5F3;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        margin: 5px auto;

        width: 100%;
    }
    p {
        max-width: 462px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
        color: #0B344E;
    }
    h3 {
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        max-width: 462px;
        color: #0B344E;
        font-size: calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)));
    }
`;