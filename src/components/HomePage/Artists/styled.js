import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  ${device.md} {
    margin-top: 20px;
  }
`;

export const ArtistsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 116px;
`;

export const ArtistSkeletonWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: 100%;
`;

export const ArtistLoaderWrapper = styled.div``;
