import React from "react";
import "./styles.scss";
import { MainTitle, Section as SectionContainer } from "./styles";
export interface Section_SCProps {
  setRef?: (
    node: HTMLElement | null | undefined
  ) => HTMLElement | null | undefined;
  subTitle?: () => JSX.Element;
  titleContainer: string;
  className?: string;
}

export const Section: React.FC<Section_SCProps> = ({
  titleContainer,

  className = "",
  subTitle = null,
  setRef = null,
  children,
}) => {
  return (
    <div ref={setRef} id="section__container" className={className}>
      <MainTitle>{titleContainer}</MainTitle>
      {subTitle && subTitle()}
      <SectionContainer>{children}</SectionContainer>
    </div>
  );
};
