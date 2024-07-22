import { CaretRight, Clock, MapPinLine, Medal } from "@phosphor-icons/react";
import { Container, Stack } from "react-bootstrap";
import {
  CourseDescription,
  CourseDescriptionFooter,
  CourseDescriptionWrapper,
  CourseImage,
  CourseSpecs,
  CourseText,
  CourseTitle,
  CourseType,
  CourseWrapper,
  CoursesHeader,
  CoursesWrapper,
} from "./courses.styles";

const CoursesSection = () => {
  return (
    <>
      <CoursesWrapper>
        <Container>
          <CoursesHeader>Cursos</CoursesHeader>
          <CourseWrapper>
            <CourseDescriptionWrapper>
              <CourseDescription>
                <CourseType>Graduação</CourseType>
                <CourseTitle>Gestão Hospitalar</CourseTitle>
                <CourseSpecs>
                  <Stack direction="horizontal" gap={3}>
                    <div className="item">
                      <Clock className="icon" size={20} weight="bold" />4 Anos
                    </div>
                    <div className="item">
                      <MapPinLine className="icon" size={20} weight="bold" />
                      Presencial
                    </div>
                    <div className="item">
                      <Medal className="icon" size={20} weight="bold" />
                      Bacharelado
                    </div>
                  </Stack>
                </CourseSpecs>
                <CourseText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sodales urna ac purus volutpat, eget luctus odio pretium. Duis
                  facilisis commodo dolor nec luctus.
                </CourseText>
              </CourseDescription>
              <CourseDescriptionFooter>
                <Stack direction="horizontal" gap={1}>
                  Saiba Mais <CaretRight weight="bold" />
                </Stack>
              </CourseDescriptionFooter>
            </CourseDescriptionWrapper>

            <CourseImage></CourseImage>
          </CourseWrapper>
        </Container>
      </CoursesWrapper>
    </>
  );
};

export default CoursesSection;
