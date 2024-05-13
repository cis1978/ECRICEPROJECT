// RiceDAOCards.tsx

import Link from 'next/link';
import ActionAreaCard from './Article';

// RiceDAO オブジェクトの型定義
interface RiceDAO {
  id: string;
  title: string;
  image: string;  // 画像のURLを示す文字列と仮定します
}

// RiceDAOCards コンポーネントのProps型定義
interface RiceDAOCardsProps {
  ricedao: RiceDAO[];  // RiceDAOオブジェクトの配列を指定
}

const RiceDAOCards: React.FC<RiceDAOCardsProps> = ({ ricedao }) => {
  return (
    <div>
      {ricedao.map((item) => (
        <li key={item.id}>
          <Link href={`/ricedao/${item.id}`}>
            {item.title}
          </Link>
          <ActionAreaCard image={item.image} title={item.title} />
        </li>
      ))}
    </div>
  );
};

export default RiceDAOCards;
