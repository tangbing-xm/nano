# Design Document

## Overview

本设计文档描述了为 nano-banana-clone 项目添加价格展示功能的技术实现方案。该功能包括创建一个新的价格组件、修改导航栏以及更新主页面布局，以在 FAQ 上方展示两个价格档位（$9.9 和 $19.9）。

## Architecture

### Component Structure
```
src/
├── components/
│   ├── pricing-section.tsx (新建)
│   ├── navigation.tsx (修改)
│   └── ui/
│       └── pricing-card.tsx (新建)
├── app/
│   └── page.tsx (修改)
```

### Integration Points
- 主页面 (`src/app/page.tsx`) - 添加 PricingSection 组件
- 导航组件 - 添加价格按钮和滚动功能
- 现有的 FadeInSection 包装器 - 保持一致的动画效果

## Components and Interfaces

### PricingSection Component
```typescript
interface PricingTier {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
}

interface PricingSectionProps {
  className?: string
}
```

### PricingCard Component
```typescript
interface PricingCardProps {
  tier: PricingTier
  className?: string
  onSelect?: (tierId: string) => void
}
```

### Navigation Updates
```typescript
interface NavigationItem {
  label: string
  href: string
  onClick?: () => void
}
```

## Data Models

### Pricing Configuration
```typescript
const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 9.9,
    currency: 'USD',
    period: 'month',
    description: '适合个人用户和小型项目',
    features: [
      '每月 100 次图像生成',
      '文本转图像功能',
      '基础图像编辑',
      '标准分辨率输出',
      '邮件支持'
    ],
    ctaText: 'Get Started',
    highlighted: false
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: 19.9,
    currency: 'USD',
    period: 'month',
    description: '适合专业用户和团队',
    features: [
      '每月 500 次图像生成',
      '文本转图像功能',
      '高级图像编辑',
      '高分辨率输出',
      '图像到图像转换',
      '批量处理',
      '优先支持',
      'API 访问'
    ],
    ctaText: 'Upgrade to Pro',
    highlighted: true
  }
]
```

## Styling and Design System

### Color Scheme (基于现有设计系统)
- Primary: `#FF4400` (橙红色主色调)
- Secondary: `#00DDFF` (青蓝色次要色)
- Background: `#0F0F0F` (近黑色背景)
- Surface: `#1A1A1A` (深灰色卡片背景)
- Border: `#333333` (边框颜色)

### Typography
- 标题: `text-4xl md:text-5xl font-bold`
- 价格: `text-5xl font-bold`
- 功能列表: `text-base`
- 描述文字: `text-muted-foreground`

### Layout Specifications
- 容器最大宽度: `max-w-7xl`
- 网格布局: `grid md:grid-cols-2 gap-8`
- 卡片内边距: `p-8`
- 区块间距: `py-20`

## Component Implementation Details

### PricingSection Layout
```
┌─────────────────────────────────────────┐
│              Section Header             │
│         (Title + Description)           │
├─────────────────┬───────────────────────┤
│   Basic Plan    │      Pro Plan         │
│     $9.9        │       $19.9           │
│   ┌─────────┐   │   ┌─────────────┐     │
│   │Features │   │   │  Features   │     │
│   │  List   │   │   │    List     │     │
│   └─────────┘   │   └─────────────┘     │
│   [Get Started] │   [Upgrade to Pro]    │
└─────────────────┴───────────────────────┘
```

### Navigation Integration
- 在现有导航项目后添加 "Pricing" 按钮
- 使用 `scrollIntoView` 实现平滑滚动
- 移动端在汉堡菜单中显示

### Responsive Design
- 桌面端: 两列网格布局
- 平板端: 两列网格，调整间距
- 移动端: 单列堆叠布局

## Error Handling

### Scroll Navigation
- 检查目标元素是否存在
- 提供降级方案（使用 `window.location.hash`）
- 处理滚动动画不支持的浏览器

### Component Rendering
- 提供默认的价格数据
- 处理缺失的图标或样式
- 确保在 JavaScript 禁用时基本功能可用

## Testing Strategy

### Unit Tests
- PricingCard 组件渲染测试
- 价格数据格式化测试
- 功能列表显示测试

### Integration Tests
- 导航滚动功能测试
- 页面布局集成测试
- 响应式布局测试

### Visual Tests
- 不同屏幕尺寸的截图对比
- 主题色彩一致性检查
- 动画效果验证

## Performance Considerations

### Code Splitting
- 价格组件可以进行懒加载
- 图标库按需导入

### SEO Optimization
- 使用语义化 HTML 结构
- 添加适当的 meta 标签
- 确保价格信息对搜索引擎可见

### Accessibility
- 使用适当的 ARIA 标签
- 确保键盘导航支持
- 提供足够的颜色对比度
- 为屏幕阅读器优化内容结构