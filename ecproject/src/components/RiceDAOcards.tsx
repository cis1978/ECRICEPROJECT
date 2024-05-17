import Link from 'next/link';
import ActionAreaCard from './Article';

interface RiceDAO {
  id: string;
  title: string;
  image: string;  // 画像のURLを示す文字列と仮定します
  body: string;
}

// RiceDAOCards コンポーネントのProps型定義
interface RiceDAOCardsProps {
  ricedao: RiceDAO;  // RiceDAOオブジェクトを指定
}

const RiceDAOCards: React.FC<RiceDAOCardsProps> = ({ ricedao }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Link href={`/ricedao/${ricedao.id}`}>
        
          <ActionAreaCard body={ricedao.body} title={ricedao.title} subtitle={undefined} />
        
      </Link>
    </div>
  );
};

export default RiceDAOCards;
