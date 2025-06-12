// 引入首页模板组件
import { HomeTemplate } from "@/components/home/HomeTemplate";

// 导出首页的元信息对象
export const metadata = {
  alternates: {
    canonical: '/', // 设置 canonical 链接，指向首页根路径
  },
  // 其他首页专属 metadata 配置（可扩展）
};

// 默认导出首页组件
export default function Page() {
  // 渲染首页模板组件
  return <HomeTemplate />;
}
