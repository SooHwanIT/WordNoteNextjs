import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'
import { WordData } from '../../utils/word_data'
interface Container {
  index: number;
  after: string;
  before: string;
}

function InputWord() {

  const [index, setIndex] = useState<number>(1)
  const [wordContainer, setWordContainer] = useState<Container[]>([{ index: 0, after: '', before: '' }]);

  const DeleteWord = (i: number) => {
    console.log(wordContainer)
    const result = wordContainer.filter(container => container.index !== i);
    setWordContainer(result)
  }
  const AddWord = () => {
    setIndex(index + 1)
    setWordContainer([...wordContainer, { index: index, after: '', before: '' }])
  }
  const returnWord = wordContainer.map((container, i) =>
  (
    <div className="word_item" key={container.index}>
      {i + 1}
      <input className="input" type="text" />
      <input className="input" type="text" />
      <button onClick={e => DeleteWord(container.index)}>x</button>
    </div>
  )
  )
  return (
    <div className="note">
      <p>제목</p>
      <input className="note_main_name"/>
      <p>소제목</p>
      <input className="note_sub_name"/>

      <div className="add_word">
        <button onClick={AddWord}>단어 추가하기</button>
      </div>
      <div className="word_list">
        {returnWord}
      </div>
    </div>
  );
}

export default InputWord;



export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = WordData.map((user) => ({
      params: { id: user.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
      const id = params?.id
      const item = WordData.find((data) => data.id === Number(id))
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { item } }
    } catch (err) {
      return { props: { errors: err.message } }
    }
  }
  