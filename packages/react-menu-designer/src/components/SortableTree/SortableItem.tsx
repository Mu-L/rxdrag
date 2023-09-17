import { memo } from "react"
import { IFlattenedItem } from "../../interfaces/flattened"
import styled from "styled-components"

const Container = styled.div`
  height: 48px;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  border-radius: 8px;
  margin: 4px 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
`

export const SortableItem = memo((
  props: {
    item: IFlattenedItem
  }
) => {
  const { item } = props
  return (
    <Container>
      {
        item.title
      }
    </Container>
  )
})