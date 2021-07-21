import * as React from 'react'
import ListItem from './ListItem'
import { note } from '../interfaces'

type Props = {
  items: note[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        {/* {item.id}: {item.mainname} */}
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List