import React from "react";
import { Container } from "../Container";
import { GreenRoundSquare } from "../maincard/GreenRoundSquare";
import { MainCard } from "../maincard/MainCard";
import { OrangeRoundSquare } from "../maincard/OrangeRoundSquare";
import { RedRoundSquare } from "../maincard/RedRoundSquare";
import { Profile } from "../profile/Profile";
import { Row } from "../Row";
import { Sidebar } from "../sidebar/Sidebar";
import { SubTitle } from "../SubTitle";
import { GreyMediumText } from "./GreyMediumText";
import { MediumText } from "../MediumText"
import { OrangeSquare } from "./OrangeSquare";
import { SearchBar } from "./SearchBar";
import { Square } from "./Square";
import { StyleContainerDB } from "./StyleContainerDB";
import { TableRow } from "./TableRow";
import { TinyText } from "./TinyText";

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
          <OrangeRoundSquare />
          <MediumText>Travel Landing Page</MediumText>
          <GreyMediumText>5 members</GreyMediumText>
          <GreyMediumText>Mar 8, 2020</GreyMediumText>
        </TableRow>
        <TableRow>
          <GreenRoundSquare />
          <MediumText>True Photos</MediumText>
          <GreyMediumText>12 members</GreyMediumText>
          <GreyMediumText>Mar 8, 2020</GreyMediumText>
        </TableRow>
        <TableRow>
          <RedRoundSquare />
          <MediumText>Dashboard Structure</MediumText>
          <GreyMediumText>10 members</GreyMediumText>
          <GreyMediumText>Mar 9, 2020</GreyMediumText>
        </TableRow>
        <TableRow>
          <OrangeRoundSquare />
          <MediumText>Character Illustration</MediumText>
          <GreyMediumText>3 members</GreyMediumText>
          <GreyMediumText>Mar 10, 2020</GreyMediumText>
        </TableRow>
        <SubTitle>Share with me</SubTitle>
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
      </StyleContainerDB>
      <Profile></Profile>
    </Container>
  );
};
