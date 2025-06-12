/**
 * Footer 社交链接类型定义
 * icon 字段需与 SocialIcons 支持的 key 保持一致
 */
export interface SocialLink {
  icon: 'Facebook' | 'Twitter'; // 可根据 SocialIcons 支持的 icon 扩展
  href: string;
  label: string;
} 