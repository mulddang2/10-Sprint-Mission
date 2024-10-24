export default function BoardList({ boards }) {
  return (
    <ul>
      {boards.map((board) => {
        return (
          <li key={board.id}>
            <h3>{board.title}</h3>
            <p>{board.writer.nickname}</p>
          </li>
        );
      })}
    </ul>
  );
}
