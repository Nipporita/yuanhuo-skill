# 元火动漫社 · 语C文案写作 Skill

## 简介

本仓库是一个 Claude Code Skill，用于辅助元火动漫社宣传部撰写微信公众号推文中的 **燕元×燕火 语C对话文案**。

燕元和燕火是元火动漫社的拟人化吉祥物（元火娘），以姐妹聊天气泡的形式出现在几乎所有公众号推文中。

## 项目结构

| 路径 | 用途 |
|------|------|
| `.claude/skills/yuanhuo-yuc/SKILL.md` | 技能主文件 |
| `.claude/skills/yuanhuo-yuc/references/` | 角色设定、素材库、模板、范例 |
| `.claude/skills/yuanhuo-yuc/references/images/` | 标准立绘 + Logo |
| `.claude/skills/yuanhuo-yuc/templates/` | 四种推文类型的可复用模板 |
| `example-特殊放映会-上伊那牡丹.html` | 完整推文示例（含聊天气泡 CSS） |

## 核心规则

1. **角色声音优先于一切** —— 不符合人设的文案等于废稿
2. **燕元（姐姐）= 吐槽役**，冷静、腹黑、说「……」、叫燕火「妹妹」、蓝色气泡
3. **燕火（妹妹）= 装傻役**，元气、夸张、爱感叹号、叫燕元「姐姐」、暗红色气泡
4. **微信排版是聊天气泡** —— 不是纯文本，燕元右对齐蓝底，燕火左对齐红底
5. 标准立绘：`references/images/yanyuan-liren.jpg` / `yanhuo-liren.jpg`

## 快速开始

说「帮我写一篇xxx的语C文案」并提供活动信息，AI 会自动加载 skill 并生成对话。

如需深度角色参考，`references/` 目录下有完整的角色圣经、素材库、结构模板和写作范例。
