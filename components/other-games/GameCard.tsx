// "use client"; // No longer strictly needed if useRouter is removed and Card/subcomponents are server components.
// However, shadcn/ui components can sometimes pull in client-side dependencies implicitly.
// For now, let's try removing it. If issues arise, it can be re-added.

// 引入 Next.js 的 Link 组件，用于页面跳转
import Link from 'next/link';
// 引入全局主题配置
import { theme } from "@/config/theme";
// import { useRouter } from "next/navigation"; // Removed
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 定义 GameCard 组件的 props 类型
interface GameCardProps {
  id: string; // 游戏唯一标识
  title: string; // 游戏标题
  description: string; // 游戏描述（本组件未显示）
  image: string; // 游戏图片
  url: string; // 跳转链接
}

// 导出单个游戏卡片组件
export function GameCard({ id, title, description, image, url }: GameCardProps) {
  // const router = useRouter(); // Removed
  // const handleClick = () => { router.push(url); }; // Removed

  return (
    // 外层 Link，点击跳转到游戏详情页
    <Link
      href={url}
      aria-label={`Play ${title}`} // 无障碍描述
      className="block h-full no-underline text-inherit rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {/* 卡片容器，纵向排列 */}
      <Card
        // Removed interactive props (onClick, role, tabIndex, onKeyDown) as Link handles them.
        // className adjusted: original theme.otherGames.layout.card was "overflow-hidden hover:shadow-lg transition-shadow"
        // Hover effects are now on the Link.
        className="overflow-hidden h-full flex flex-col" // h-full to fill Link, flex flex-col for content alignment
      >
        {/* 卡片头部，显示游戏图片 */}
        <CardHeader className="p-0">
          <img
            src={image}
            alt={`${title} preview`} // 图片无障碍描述
            className={theme.otherGames.layout.image} // 图片样式
            loading="lazy" // 懒加载
          />
        </CardHeader>
        {/* 卡片内容，显示游戏标题 */}
        <CardContent className="p-4 flex-grow flex flex-col justify-center"> {/* flex-grow to push title down if card is taller, justify-center for title vertical centering if needed */}
          <CardTitle className={`${theme.otherGames.typography.cardTitle} ${theme.otherGames.spacing.cardTitle}`}>
            {title}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
