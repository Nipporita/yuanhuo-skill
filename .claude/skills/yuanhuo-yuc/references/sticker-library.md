# 元火娘视觉素材库

> 基准参考图位于 `references/images/`，取自 `【招募】漫画图书馆管理员招募` 推文。

---

## 一、标准立绘（聊天气泡头像）

### 燕元 标准立绘
- 文件：`references/images/yanyuan-liren.jpg`
- 用途：聊天气泡中燕元的头像（出现在气泡右侧）
- 色调：蓝/青色系，对应蓝色气泡 `rgb(95, 156, 239)`

### 燕火 标准立绘
- 文件：`references/images/yanhuo-liren.jpg`
- 用途：聊天气泡中燕火的头像（出现在气泡左侧）
- 色调：红/暖色系，对应暗红色气泡 `rgba(155, 0, 0, 0.63)`

### 元火 Logo
- 文件：`references/images/yuanhuo-logo.jpg`
- 用途：推文页脚、分隔线装饰、活动信息卡片等

### 在 HTML 中引用

生成推文预览 HTML 时，头像使用 skill 内的相对路径：

```html
<!-- 燕火头像（气泡左侧） -->
<img src=".claude/skills/yuanhuo-yuc/references/images/yanhuo-liren.jpg" alt="燕火">

<!-- 燕元头像（气泡右侧） -->
<img src=".claude/skills/yuanhuo-yuc/references/images/yanyuan-liren.jpg" alt="燕元">
```

头像在聊天气泡中的尺寸为 56×56px，`border-radius: 6px`，`object-fit: cover`。完整样式参考项目根目录的 `example-特殊放映会-上伊那牡丹.html`。

---

## 二、聊天气泡 HTML 结构

微信公众号推文使用 `135编辑器` 或类似工具的聊天气泡模板。实际渲染结构如下：

### 燕元气泡（右对齐，蓝色）
```
[名字标签"燕元"] [蓝色气泡（白字）] [蓝色三角箭头] | [燕元头像]
```
- 气泡背景：`rgb(95, 156, 239)`
- 文字颜色：`#fff`
- 圆角：`0.5em`
- 箭头：`border-left: 10px solid rgb(95, 156, 239)`
- 头像在右，占宽度 20%

### 燕火气泡（左对齐，暗红色）
```
[燕火头像] | [暗红三角箭头] [暗红色气泡（白字）] [名字标签"燕火"]
```
- 气泡背景：`rgba(155, 0, 0, 0.63)`
- 文字颜色：`#fff`
- 圆角：`0.5em`
- 箭头：`border-right: 10px solid rgba(155, 0, 0, 0.63)`
- 头像在左，占宽度 20%

### 参考实现
见项目根目录 `example-特殊放映会-上伊那牡丹.html`，其中 `.msg-yanyuan` 和 `.msg-yanhuo` 的 CSS 完整复现了微信聊天气泡布局。

---

## 三、固定图标与装饰元素

### 时间图标
- 文件：`references/images/time-icon.jpg`
- 用途：活动信息中时间前的图标
- **用法**：图片本身是镂空蒙版（透明PNG），需放在元火暗红色背景的容器中，透明部分透出底色
```html
<span style="background-color:rgb(161,23,23);width:30px;height:30px">
  <img src="时间图标" style="width:100%;height:100%;object-fit:contain">
</span>
<span style="color:rgb(161,23,23);font-weight:600">日期 时间</span>
```

### 地点图标
- 文件：`references/images/location-icon.jpg`
- 用途：活动信息中地点前的图标，用法同上（镂空蒙版 + 暗红底色）

### 页脚图
- 文件：`references/images/footer.jpg`
- 用途：推文末尾固定装饰图（元火娘 + 二维码 + 社团信息），每篇推文结尾统一使用

---

## 四、更多素材

`output1/` 目录（本地素材库，未上传 GitHub）包含 130+ 篇历史推文的完整图片素材。如需更多燕元/燕火的头像变体、表情贴图、合照素材等，可在本地从 output1 中提取。

提取方法：在 markdown 文件中，紧跟在「燕元」后的图片为燕元素材，紧跟在「燕火」后的图片为燕火素材。
