import styled from "styled-components";
import { flexMixin, fontMixin, gray, tagColor } from "../styled/styled";


const ContentStyled = styled.div`
  ${flexMixin({direction: 'column', align: "center", gap: '5px'})}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${fontMixin({size: '12px'})}
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${fontMixin({size: '18px', weight: '600'})}
  }
  p {

    ${fontMixin({size: '12px'})}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <ContentStyled>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentStyled>
  );
}
