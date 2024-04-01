import styled from 'styled-components';



type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  border?: string;
  backgroundcolor?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "start"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => props.gap || "0"};
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  border: ${props => props.border || "none"};
  background-color: ${props => props.color || "transparent"};
`