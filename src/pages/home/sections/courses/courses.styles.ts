import styled, { css } from "styled-components";

export const CoursesWrapper = styled.div`
  padding: 80px 0;
`;

export const CoursesHeader = styled.h1`
  font-weight: 800;
  color: #fd5c3f;
  text-transform: uppercase;
`;

export const CourseWrapper = styled.div`
  margin-top: 50px;
  border: 2px solid #9eb1d7;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CourseDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const CourseDescription = styled.div`
  padding: 50px;
  flex-grow: 1;
`;

export const CourseType = styled.span`
  background-color: #fd5c3f;
  color: #fff;
  padding: 5px 10px;
  font-weight: 500;
`;

export const CourseTitle = styled.h1`
  margin-top: 32px;
  font-weight: 700;
  font-size: 32px;
`;

export const CourseSpecs = styled.div`
  margin-top: 16px;
  color: #2f368a;
  font-weight: bold;
  text-transform: uppercase;

  .item {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .icon {
    color: #fd5c3f;
  }
`;

export const CourseText = styled.div`
  margin-top: 32px;
`;

export const CourseDescriptionFooter = styled.div`
  padding: 20px;
  background-color: #eeeff8;
  color: #2f368a;
  font-weight: bold;
`;

export const CourseImage = styled.div`
  background-image: url("https://c4.wallpaperflare.com/wallpaper/54/325/66/work-in-progress-wallpaper-preview.jpg");
  background-size: cover;
  width: 100%;
  min-height: 300px;
`;
