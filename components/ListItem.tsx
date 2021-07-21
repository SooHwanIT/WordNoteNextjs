import React from 'react'
import Link from 'next/link'

import { note } from '../interfaces'

type Props = {
  data: note
}

const ListItem = ({ data }: Props) => (
  <Link href="/note/" as={`/users/${data.id}`}>
  {/* <Link href="/users/[id]" as={`/users/${data.id}`}> */}
    <a>
      {data.id}: {data.mainname}
    </a>
  </Link>
)

export default ListItem
