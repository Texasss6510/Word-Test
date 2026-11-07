# Word Test

A small web app for memorising English vocabulary: read the Chinese meaning and write the English word, or listen to the pronunciation and spell it. Anything you get wrong gets collected for a second pass.

**Use it online: <https://texasss6510.github.io/Word-Test/>**

No account, no install, works on desktop and mobile.

---

## How to use it

### 1. Choose a mode

The home screen offers two ways in:

| Mode | What it does |
| --- | --- |
| **Word List** | Pick a book and a unit, then practise exactly those words. |
| **Random Quiz** | Draw 50 words from every book at once — see [Random quiz](#random-quiz--50-words-from-everywhere). |

Each mode opens on its own screen; **Menu** at the top left takes you back to the home screen.

### 2. Pick a word list

Choose a **book** — College English, CET 4, Stardew Valley, My Little Pony, or NMET Vocabulary…… Then pick a **unit** and hit **Start Learning**.

The unit picker adapts to the book. College English is split into volumes (Book 1–3, INCE 2, VLS 2), so a **volume switcher** appears first and the units of that volume are laid out as **pills** — one tap each, all visible at once. The other books have a single flat list of units; with up to 42 units in NMET Vocabulary, a wall of pills would be unreadable, so those keep a **unit dropdown**. Either way the layout stays the same width, so nothing jumps around when you switch books.

### 3. Pick a practice mode

| Mode | What you see | What you do |
| --- | --- | --- |
| **Spelling** | The Chinese meaning | Type the English word |
| **Dictation** | Just a "Dictation Mode" label | Listen, then spell it |

Both modes test the same words — they just hand you different clues.

### 4. Answer

Type into the box and press **Enter**.

- **Correct** — shows "✨ Correct!", then moves on after about 0.85 seconds
- **Wrong** — shows the answer and shakes the input; fix it and press Enter again
- **Stuck** — press **Answer** to reveal it (counted as a mistake), then Enter to continue

> Don't want to wait? Start typing the next word, or just hit **Enter** — the pause is skippable, and whatever you typed during it is kept.

### 5. Review your mistakes

When you reach the end you get a table of everything you missed — word, meaning, phonetic, and what you typed.

- **Export Mistakes** — download it as CSV (opens cleanly in Excel, Chinese included)
- **Review Mistakes** — start a new round with **only the words you missed**
- **Restart This Unit** — redo the whole unit, reshuffled
- **Back to Book List** — return to the start

---

## Random quiz — 50 words from everywhere

Choose **Random Quiz** on the home screen. The setup screen draws 50 words from every book at once, without going through the unit picker.

| | |
| --- | --- |
| **Range** | Every word in every book. A word that appears in several books is counted once — 2,465 unique words at the time of writing. |
| **Length** | 50 questions per round. |
| **No repeats** | A word never appears twice within a round. By default, words from your **last three quizzes** are skipped as well; untick the box to allow them. If the pool ever runs short, the skip range relaxes automatically and the result page says so. |
| **Modes** | The same **Spelling** and **Dictation** as a normal unit — one click starts the round. |
| **Source** | Every question shows where the word comes from — book, volume and unit, e.g. `College English · Book 2 · Unit 3`. The result table lists it under each word. |
| **Results** | Correct count, accuracy, total time, and a row-by-row table of all 50 questions with your answer and the outcome (Correct / Wrong / Revealed). |

The quiz stores a small record in `localStorage` — word keys only, no meanings — so it can avoid recent words. Clearing site data resets it. Nothing leaves your device.

---

## On-screen controls

| Control | What it does |
| --- | --- |
| **Menu** | Leave mid-review and go back to the home screen |
| **Phonetic** | Show or hide the phonetic for the current word |
| **Answer** | Reveal the answer and record it as a mistake |
| 🔊 (beside the input) | Replay the pronunciation |

**Keyboard:** `Shift` + `Space` does the same as the **Phonetic** button.

---

## The footer

```
[═════░░░░░░░░░░░░]     progress bar
Total 80   Reviewed 32   Mistakes 5
```

- **Total** — words in this unit
- **Reviewed** — how many you have been through
- **Mistakes** — how many you missed (each word counts once, however often you miss it)

The bar turns green once you have been through everything, and a perfect run gets confetti.

---

## Adding your own word lists

### 1. Write a JSON file

Each unit is one JSON file:

```json
[
    {
        "english": "ambition",
        "pos": [
            { "abbreviation": "n.", "meaning": "抱负" }
        ],
        "phonetic": "/æmˈbɪʃən/"
    }
]
```

| Field | Meaning |
| --- | --- |
| `english` | The word. **This is the only thing checked against your answer** (case-insensitive). |
| `pos` | An array. `abbreviation` is the part of speech, `meaning` is the definition. Give several entries when a word has several senses — they render on separate lines. |
| `phonetic` | Shown when you press **Phonetic**. |

### 2. Put it in the repo

```
My Word List/
  Unit 01.json
  Unit 02.json
```

Spaces and non-ASCII characters in file names are fine.

### 3. Register it in `script.js`

Open `script.js` and add an entry to `wordBook` near the top:

```js
{
    category: "My Word List",          // shown in the first dropdown
    lists: [
        { name: "Unit 01", path: "My Word List/Unit 01.json" },
        { name: "Unit 02", path: "My Word List/Unit 02.json" }
    ]
}
```

`path` must match the real path **character for character** — GitHub Pages runs on Linux, so it is **case-sensitive**, and a mismatch that works on Windows will 404 once deployed.

For a book that is itself split into volumes (the way College English is), use `groups` instead of `lists`. A volume switcher then appears above the units:

```js
{
    category: "My Word List",
    groups: [
        { name: "Book 1", lists: [
            { name: "Unit 1", path: "My Word List/Book 1/Unit 1.json" }
        ] },
        { name: "Book 2", lists: [
            { name: "Unit 1", path: "My Word List/Book 2/Unit 1.json" },
            { name: "Unit 2", path: "My Word List/Book 2/Unit 2.json" }
        ] }
    ]
}
```

Volume names show up in the switcher, so keep them short. Units of a grouped book get laid out as pills, which reads well up to about 8 per volume; a volume with dozens of units is better served by the flat `lists` form.

Reload the page and the new book appears.

---

## Running it locally

It is a static site, but **you cannot just double-click `index.html`** — browsers block `fetch()` on `file://` URLs, so the word lists will not load. You need a local server.

**VS Code:** install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**.

**Or from a terminal:**

```bash
npx serve .
```

---

## Project layout

```
index.html       markup + inline SVG icon sprite
style.css        all styling (colour, materials, animation)
script.js        all logic
.nojekyll        tells GitHub Pages to skip Jekyll
<book folders>/  word list data
```

Every tunable design value — background gradient, glass opacity, corner radii, easing curves, animation durations — lives in the `:root` block at the top of `style.css`.

---

## Notes

- **Pronunciation** plays Youdao's dictionary recording first and falls back to the browser's own speech synthesis if that fails to load (offline, blocked, and so on).
- **Everything stays on your device.** No accounts, no analytics, no uploads. The exported CSV is generated locally by the browser.
- **Accessibility:** respects `prefers-reduced-motion` and `prefers-reduced-transparency`.

## Credits

Icons from [Lucide](https://lucide.dev/) (ISC licence).

---
---

# 中文说明

一个背单词的小网页：看着中文释义写英文，或者听发音把它拼出来，写错的词会自动收起来供你复习。

**在线使用：<https://texasss6510.github.io/Word-Test/>**

不用注册、不用安装，电脑和手机都能用。

---

## 怎么用

### 1. 选择模式

首页只有两个入口：

| 模式 | 作用 |
| --- | --- |
| **Word List** | 选一本书和一个单元，只练这些词。 |
| **Random Quiz** | 从全部词书里抽 50 个词，见下方「随机抽查」。 |

两个模式各自进入独立页面，左上角 **Menu** 返回首页。

### 2. 选一本单词书

先选**书本**——College English / CET 4 / Stardew Valley / My Little Pony / NMET Vocabulary……再挑一个**单元**，点 **Start Learning**。

单元选择器会跟着书本变形。College English 分了册（Book 1–3、INCE 2、VLS 2），所以会先出一个**分册切换器**，然后把该册的单元摊成**胶囊**——一屏看全，一次点击就选中。其余几本书都是单层列表；NMET Vocabulary 有 42 个单元，摊成一堵胶囊墙反而更难找，所以它们保留**单元下拉框**。两种形式的宽度一致，换书时版面不会跳。

### 3. 选一种模式

| 模式 | 你会看到 | 你要做 |
| --- | --- | --- |
| **Spelling**（默写） | 中文释义 | 写出对应的英文单词 |
| **Dictation**（听写） | 只有一行「Dictation Mode」 | 听发音，把它拼出来 |

两种模式考的是同一批词，区别只是给你的线索不同。

### 4. 作答

在输入框里敲单词，按 **Enter** 提交。

- **答对** —— 显示「✨ Correct!」，约 0.85 秒后自动进入下一个词
- **答错** —— 显示正确答案，输入框会抖一下；改对了再按 Enter 继续
- **不会写** —— 点 **Answer** 直接看答案（会记为错题），看完按 Enter 进入下一个词

> 不想等？**直接开始打下个词**或按 **Enter** 就立刻跳过。等待期间敲进去的字母会被保留，不会被清掉。

### 5. 看结果

全部过完之后会列出错题表——单词、释义、音标、以及你当时输错的答案。

- **Export Mistakes** —— 导出 CSV（Excel 能直接打开，中文不乱码）
- **Review Mistakes** —— **只把错题重新组成一轮**，不用整本重来
- **Restart This Unit** —— 整个单元重来一遍（会重新打乱顺序）
- **Back to Book List** —— 回到选书页

---

## 随机抽查 —— 从全部词书里抽 50 个

在首页选择 **Random Quiz**。设置页不经过单元选择，直接从全部词书里抽 50 个词。

| | |
| --- | --- |
| **范围** | 所有词书的所有单词。同一个词在多本书里出现只算一次——目前是 2,465 个唯一词。 |
| **数量** | 每轮固定 50 题。 |
| **不重复** | 同一轮内一个词不会出现两次；默认还会跳过**最近三轮**抽过的词，取消勾选即可放开。万一题库不够抽，避重范围会自动放宽，结果页会写明。 |
| **模式** | 与普通单元相同的 **Spelling** 和 **Dictation**，点一下直接开考。 |
| **出处** | 每道题都会标出这个词来自哪本书、哪一册、哪一单元，例如 `College English · Book 2 · Unit 3`；结果表的单词下方也会列出。 |
| **结果** | 正确数、正确率、总用时，以及全部 50 题的逐题对照表：你的答案与结果（Correct / Wrong / Revealed）。 |

抽查会在 `localStorage` 里存一份很小的记录——只存单词键，不存释义——用来避开最近抽过的词。清除站点数据即可重置，不会上传任何内容。

---

## 界面上的按钮

| 按钮 | 作用 |
| --- | --- |
| **Menu** | 复习中途随时退回主菜单 |
| **Phonetic** | 展开 / 收起当前单词的音标 |
| **Answer** | 看答案，并记为错题 |
| 🔊（输入框右侧） | 重听当前单词的发音 |

**键盘快捷键**：`Shift` + `空格` 等同于 **Phonetic** 按钮。

---

## 底部进度

```
[═════░░░░░░░░░░░░]     进度条
Total 80   Reviewed 32   Mistakes 5
```

- **Total** —— 本单元单词总数
- **Reviewed** —— 已经过掉的
- **Mistakes** —— 错题数（同一个词重复答错只算一次）

全部过完进度条会变绿；一个都没错的话会撒花。

---

## 想加自己的单词书

### 1. 写一个 JSON 文件

每个单元是一个 JSON 文件：

```json
[
    {
        "english": "ambition",
        "pos": [
            { "abbreviation": "n.", "meaning": "抱负" }
        ],
        "phonetic": "/æmˈbɪʃən/"
    }
]
```

| 字段 | 说明 |
| --- | --- |
| `english` | 英文单词。**这是判定答案的唯一依据**，大小写不敏感。 |
| `pos` | 数组。`abbreviation` 是词性缩写，`meaning` 是中文释义。一个词有多个词性就写多条，会分行显示。 |
| `phonetic` | 音标，点 **Phonetic** 时显示。 |

### 2. 放进仓库

```
我的单词书/
  Unit 01.json
  Unit 02.json
```

文件名里有空格和中文都没问题。

### 3. 在 `script.js` 里登记

打开 `script.js`，找到靠上的 `wordBook`，按同样的格式加一项：

```js
{
    category: "我的单词书",          // 第一个下拉框里显示的书名
    lists: [
        { name: "Unit 01", path: "我的单词书/Unit 01.json" },
        { name: "Unit 02", path: "我的单词书/Unit 02.json" }
    ]
}
```

`path` 必须和实际路径**逐字符一致**——GitHub Pages 跑在 Linux 上，**区分大小写**。在 Windows 上能跑通的拼写错误，部署上去就是 404。

如果一本书自己还分册（College English 就是这样），用 `groups` 代替 `lists`，单元上方会多出一个分册切换器：

```js
{
    category: "我的单词书",
    groups: [
        { name: "Book 1", lists: [
            { name: "Unit 1", path: "我的单词书/Book 1/Unit 1.json" }
        ] },
        { name: "Book 2", lists: [
            { name: "Unit 1", path: "我的单词书/Book 2/Unit 1.json" },
            { name: "Unit 2", path: "我的单词书/Book 2/Unit 2.json" }
        ] }
    ]
}
```

分册名会显示在切换器上，尽量写短。分了册的书，单元会摊成胶囊，每册 8 个左右最舒服；一册几十个单元的话，还是用不分册的 `lists` 形式更好。

刷新页面就能看到新书。

---

## 本地运行

这是个纯静态站点，但**不能直接双击 `index.html` 打开**——浏览器会拦截 `file://` 下的 `fetch()`，单词书加载不出来。需要一个本地服务器：

**VS Code（推荐）**：装 **Live Server** 扩展 → 右键 `index.html` → **Open with Live Server**

**或者在终端里：**

```bash
npx serve .
```

---

## 项目结构

```
index.html       页面结构 + 内联 SVG 图标
style.css        全部样式（颜色、材质、动画）
script.js        全部逻辑
.nojekyll        告诉 GitHub Pages 跳过 Jekyll 处理
各单词书目录/      单词书数据
```

所有可调的设计值——背景渐变、玻璃透明度、圆角、缓动曲线、动画时长——都集中在 `style.css` 开头的 `:root` 里，改那一段就够了。

---

## 几点说明

- **发音**优先播有道词典的真人录音；加载失败（断网、被拦等）会自动退回浏览器自带的语音合成。
- **数据全在你自己设备上。** 没有账号、没有统计、不上传任何东西。导出的 CSV 由浏览器本地生成。
- **无障碍**：系统开启「减弱动态效果」或「减弱透明度」时会自动降级。

## 致谢

图标来自 [Lucide](https://lucide.dev/)（ISC 许可）。
