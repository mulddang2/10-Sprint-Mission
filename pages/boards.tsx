import BoardList from '@/components/BoardList';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

export default function Boards() {
  const [boards, SetBoards] = useState([]);
  const [order, setOrder] = useState('recent');

  const handleNewestClick = () => {
    setOrder('recent');
  };

  const handleLikeClick = () => {
    setOrder('like');
  };

  async function getBoards(order = 'recent') {
    const query = `orderBy=${order}`;
    const res = await axios.get(`/articles?${query}`);
    const nextBoards = res.data.list;
    return nextBoards;
  }

  async function handleLoad(order: string) {
    const sortList = await getBoards(order);
    SetBoards(sortList);
  }

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <h2>게시글</h2>
      <div>
        <button onClick={handleNewestClick}>최신 순</button>
        <button onClick={handleLikeClick}>좋아요 순</button>
      </div>
      <BoardList boards={boards} />
    </div>
  );
}
