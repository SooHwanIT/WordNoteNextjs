
import { WordData } from '../../utils/word_data'
import { GetStaticProps } from 'next'
import List from '../../components/List'
import Link from 'next/link'
const ListIndexPage = ({ items }) => (
  <div>
    <List items={items} />
          <div>list</div>
    <Link href="/note/">
      <a>note</a>
    </Link>
  </div> 
)

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items = WordData
    return { props: { items } }
  }
export default ListIndexPage
