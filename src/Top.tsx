import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import todaiImage from "../public/todai.jpg";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ddd;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #00205b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
`;
const HeaderContentWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  font-size: 24px;
`;
const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderLink = styled(Link)`
  text-decoration: none;
  margin-right: 16px;
  font-size: 16px;
  font-weight: bold;

  &:visited {
    color: #ddd;
  }
`;
const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 72px;
`;
const HeroImage = styled.img`
  width: 90%;
  height: 500px;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const DescriptionContentWrapper = styled.div`
  width: 80%;
`;
const DescriptionTitle = styled.div`
  font-size: 80px;
  margin-bottom: 72px;
`;
const DescriptionContent = styled.div`
  margin-bottom: 96px;
`;
const RankingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const RankingContentWrapper = styled.div`
  width: 80%;
  margin-bottom: 72px;
`;
const RankingContentTitle = styled.div`
  font-size: 80px;
  margin-bottom: 72px;
`;
const RankingOl = styled.div``;
const RankingLi = styled.li`
  font-size: 24px;
  margin-bottom: 8px;
  display: flex;
`;
const StyledRank = styled.div`
  margin-right: 16px;
`;
const RankingLink = styled(Link)``;
const RankingDescription = styled.div``;

const Top: React.FC = () => {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <HeaderContentWrapper>
          <HeaderTitle>掲示板</HeaderTitle>
          <HeaderLinks>
            <HeaderLink to="/sign_up">新規登録</HeaderLink>
            <HeaderLink to="/sign_in">ログイン</HeaderLink>
            <HeaderLink to="/counter">カウンター</HeaderLink>
          </HeaderLinks>
        </HeaderContentWrapper>
      </HeaderWrapper>
      <HeroImageWrapper>
        <HeroImage src={todaiImage} />
      </HeroImageWrapper>
      <DescriptionWrapper>
        <DescriptionContentWrapper>
          <DescriptionTitle>掲示板とは？</DescriptionTitle>
          <DescriptionContent>僕が趣味で作ったサイトです。</DescriptionContent>
        </DescriptionContentWrapper>
      </DescriptionWrapper>
      <RankingWrapper>
        <RankingContentWrapper>
          <RankingContentTitle>人気スレッド</RankingContentTitle>
          <RankingOl>
            <RankingLi>
              <StyledRank>1.</StyledRank>
              <RankingLink to="counter">test</RankingLink>
              <RankingDescription>（3 comments）</RankingDescription>
            </RankingLi>
            <RankingLi>
              <StyledRank>2.</StyledRank>
              <RankingLink to="counter">test</RankingLink>
              <RankingDescription>（3 comments）</RankingDescription>
            </RankingLi>
            <RankingLi>
              <StyledRank>3.</StyledRank>
              <RankingLink to="counter">test</RankingLink>
              <RankingDescription>（3 comments）</RankingDescription>
            </RankingLi>
            <RankingLi>
              <StyledRank>4.</StyledRank>
              <RankingLink to="counter">test</RankingLink>
              <RankingDescription>（3 comments）</RankingDescription>
            </RankingLi>
            <RankingLi>
              <StyledRank>5.</StyledRank>
              <RankingLink to="counter">test</RankingLink>
              <RankingDescription>（3 comments）</RankingDescription>
            </RankingLi>
          </RankingOl>
        </RankingContentWrapper>
      </RankingWrapper>
    </MainWrapper>
  );
};

export default Top;
