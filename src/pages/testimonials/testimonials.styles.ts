import { Container } from "react-bootstrap";
import styled from "styled-components";

export const TestimonialsContainerStyled = styled(Container)`
    padding-bottom: 90px;
`;
export const TestimonialItemStyled = styled.div`
    border: #C5DFE8 2px solid;
    padding: 10px 15px;
    border-radius: 8px;

    margin: 0 10px;
    width: 400px;

    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #0B344E;
        margin: 20px 0;
    }

    @media (max-width: 1400px) {
        & + &{
            margin: 10px 0;
        }
    }
`;
export const HeaderTestimonialStyled =  styled.div`

    div{ 
        border-radius: 100%;
        background: #C5DFE8;
        width: 80px;
        height: 65px;
        overflow: hidden;

        img {
            max-width: 100%;
        }
    }
`;

export const RepresentativePersonStyled = styled.div`
    h4{
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #36C5F3;
    }
    p{
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #0B344E;
    }
`;