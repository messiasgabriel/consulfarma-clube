import { Modal, Row } from "react-bootstrap";
import styled from "styled-components";

export const CallToActionStyled = styled(Row)`
    padding: 90px 0;

    div:first-child{

        @media (min-width: 1000px) {
            &{
                margin-right: 20px;   
            }
        }

        h2{
            color: var(--light-blue-500);
            font-weight: 700;
            font-size: 15px;
            text-align: left;
        }
        h1{
            color: var(--dark-blue-500);
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            text-align: center;
            line-height: 36px;
            text-align: left;

            margin: 10px 0 20px;
        }

        a{
            text-decoration: underline;
            text-decoration-color: lightgray;
            font-size: 16px;
            font-weight: 300;

            transition: all .3s;

            &:hover{
                color: var(--light-blue-500);
                text-decoration-color: inherit;
            }

        }
    }
`;