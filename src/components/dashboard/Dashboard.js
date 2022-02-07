import React from "react";
import { Container } from "../Container";
import { MainCard } from "../maincard/MainCard";
import { Profile } from "../profile/Profile";
import { Row } from "../Row";
import { Sidebar } from "../sidebar/Sidebar";
import { SubTitle } from "../SubTitle";
import { GreyMediumText } from "./greymediumtext";
import { MediumText } from "./mediumtext";
import { OrangeSquare } from "./OrangeSquare";
import { RoundedSquare } from "./roundedsquare";
import { SearchBar } from "./SearchBar";
import { Square } from "./Square";
import { StyleContainerDB } from "./StyleContainerDB";
import { TableRow } from "./tablerow";
import { TinyText } from "./tinytext";

export const Dashboard = () => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <StyleContainerDB>
        <SearchBar>
          <Square />
          Search
        </SearchBar>
        <SubTitle>Recently Used</SubTitle>
        <Row>
          <MainCard>
            <OrangeSquare />
            <MediumText>App Project</MediumText>
            <TinyText>Created 20.02.2020</TinyText>
          </MainCard>
          <MainCard>
            <OrangeSquare />
            <MediumText>App Project</MediumText>
            <TinyText>Created 20.02.2020</TinyText>
          </MainCard>
          <MainCard>
            <OrangeSquare />
            <MediumText>App Project</MediumText>
            <TinyText>Created 20.02.2020</TinyText>
          </MainCard>
        </Row>
        <SubTitle>Recent Files</SubTitle>
        <TableRow>
          <RoundedSquare />
          <MediumText>Travel Landing Page</MediumText>
          <GreyMediumText>5 members</GreyMediumText>
          <GreyMediumText>Mar 8, 2020</GreyMediumText>
        </TableRow>
        <TableRow>
          <RoundedSquare />
          <MediumText>True Photos</MediumText>
          <GreyMediumText>12 members</GreyMediumText>
          <GreyMediumText>Mar 8, 2020</GreyMediumText>
        </TableRow>
        <TableRow>
          <RoundedSquare />
          <MediumText>Dashboard Structure</MediumText>
          <GreyMediumText>10 members</GreyMediumText>
          <GreyMediumText>Mar 9, 2020</GreyMediumText>
        </TableRow>
        <TableRow>
          <RoundedSquare />
          <MediumText>Character Illustration</MediumText>
          <GreyMediumText>3 members</GreyMediumText>
          <GreyMediumText>Mar 10, 2020</GreyMediumText>
        </TableRow>
        <SubTitle>Share with me</SubTitle>
      </StyleContainerDB>
      <Profile></Profile>
    </Container>
  );
};
