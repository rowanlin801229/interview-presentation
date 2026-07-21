# Interview Presentation — 進度記錄（Recap）

> **最後更新：2026-07-20（晚）**  
> 用途：下次開工先讀這份，再動檔。  
> 路徑：`Desktop/interview presentation/`  
> Git：`rowanlin801229/interview-presentation` · branch `main`  
> 注意：康健基因 `gene/` 與 hub 連結更新 **可能尚未 commit**（離開前請 `git status`）

---

## 〇、下次 30 秒 Recap（先讀這段）

| 項目 | 狀態 |
|------|------|
| **Hub** | `hub/index.html` · Gene → **本地** `../gene/index.html` · FainTV 本地 · VCues 仍外連 portfolio |
| **FainTV** | `faintv/index.html` · **10 頁** · 大致完成 |
| **康健基因** | `gene/index.html` · **4 頁** · 主敘事已定 · **P2 是 SVG 雙鑽石圖** |
| **入口** | 面試從 Hub 點進各 deck；Gene 左下角有 ← Hub |
| **未做** | GA4 真實數字 · gene commit/push · 可選離線圖 · VCues 本地 deck |

**下次優先建議**
1. 通讀 Gene 4 頁 + 調 P2 鑽石文字位置（若還擠）  
2. 有 GA4 → 填 P4  
3. `git add gene/ hub/index.html PROGRESS.md` → commit  

```bash
open "/Users/linyuxian/Desktop/interview presentation/hub/index.html"
# Gene: 強制重整 Cmd+Shift+R · ↑↓ 換頁 · N = notes
```

---

## 一、這是什麼專案

**ASUS Senior Web UX 面試** 材料：

1. **Hub** — 多語 intro → hero → Selected work  
2. **FainTV deck** — 跨裝置訂閱 UX（10 頁）  
3. **康健基因 deck** — 十週年 B2B→B2C 官網＋品牌（4 頁）  
4. Tokens：`#12110f` / `#B84545` / Cormorant + Space Grotesk  

---

## 二、目錄結構

```
Desktop/interview presentation/
├── PROGRESS.md                 ← 本檔（recap）
├── index.html                  ← 舊 hub 精簡版，勿當主入口
├── hub/
│   ├── index.html              ← ★ 正式 Hub
│   └── covers/                 ← faintv.jpg / gene.jpg / vcue.jpg / hero-rowan.png
├── faintv/
│   ├── index.html              ← ★ 10 頁 deck
│   ├── survey.html
│   └── assets/ …
└── gene/                       ← ★ 康健基因 4 頁 deck
    ├── index.html
    └── assets/
        ├── hero-split.png      ← Hero 雙路徑（Public Health | Scientific Research）
        └── double-diamond-ref.png  ← 經典雙鑽石參考圖（非畫面用）
```

**遠端：** `git@github.com:rowanlin801229/interview-presentation.git`

---

## 三、Hub

### 連結
| 卡 | href | CTA |
|----|------|-----|
| 01 FainTV | `../faintv/index.html` | Open presentation → |
| 02 康健基因 | `../gene/index.html` | Open presentation → |
| 03 Visual Cues | `https://www.rowanlin1229.com/vcue.html`（外連） | Open portfolio ↗ |

Footer 另有：FainTV deck · 康健基因 deck  

### 已完成（摘要）
- 多語 Hello Q 彈 intro、無結尾紅字 Hello  
- Skiper cursor trail + 左側 progress  
- Gene 標題：`康健基因 · Gene Health Tech`  
- Tags：`10 週年翻新 · B2B→B2C · 訪談／問卷／易用性`  

---

## 四、FainTV（`faintv/index.html`）

### 10 頁
01 Opening → 02 Issues → 03 Process → 04 Insights → 05 TV → 06 Mobile → 07 Web → 08 Validation → 09 Results → 10 Takeaway  

### 狀態
- 主內容與多數 assets 曾 push（`1ede009` 時代 monorepo）  
- 本地未 commit 素材：`mobile/` `tv/` `web/`、檔名含空白的 loading 圖  

---

## 五、康健基因（`gene/index.html`）— 本輪主戰場

### 敘事主軸（已定稿方向）
1. **十週年翻新氣象**：企業形象 + 官網一併  
2. **商業**：偏 B2B → 開闊 **B2C**、順勢推廣產品  
3. **Hero 使用者分流**（第一屏就分）：  
   - 左 **Public Health**（一般健康／家庭）  
   - 右 **Scientific Research**（專業研究）  
4. **研究**：訪談 · 問卷 · **Wireframe 易用性測驗**  
5. **衝突**：客戶醫療背景 → 堅持**專有名詞放首頁**  
6. **測驗結果**：使用者看不懂 = **無效資訊**  
7. **決策**：名詞／昂貴器材 **分流到 Tab**；Hero 維持雙路徑  
8. **不要**：獨立 V5、客戶 40% bounce、空講 branding  

### 4 頁結構（現況）

| # | 主題 | 畫面重點 |
|---|------|----------|
| **01** | 定位 | 十週年 · B2B→B2C · Lead 4 個月 · **hero-split.png** · Hero 分流 caption |
| **02** | **雙鑽石（SVG 真鑽石）** | 左鑽 Discover→Define · 右鑽 Develop→Deliver · 中 HMW · A/B · 四格掛案內容 |
| **03** | 洞察 | 首頁專有名詞＝無效資訊 · 客戶假設 vs 測驗 · 兩層分流（Hero + Tab） |
| **04** | 落地 | 品牌／Hero 分流+Tab／系統 · 貢獻三點 · GA4 占位 · ASUS takeaway |

### 雙鑽石內容對照（P2）

| 階段 | 模式 | 康健基因內容 |
|------|------|----------------|
| **Discover** | 發散 | Brief（十週年、B2B→B2C、名詞上首頁）· 訪談 · 問卷 |
| **Define** | 收斂 | Persona 雙軌 · 機會：Hero 分流／分層 |
| **HMW** | 銜接 | 如何讓一般健康與專業研究端各走對的路… |
| **Develop** | 發散 | IA · User flow · Wireframe（含客戶首版）· Hero 雙路徑 |
| **Deliver** | 收斂 | 易用性測驗 → 迭代 · 名詞／器材→Tab · Hi-fi · CI · 官網 |

### 操作
```bash
open "/Users/linyuxian/Desktop/interview presentation/gene/index.html"
# ↑↓ / Space 換頁 · N notes · 左下 ← Hub
```

### 使用者偏好（本輪）
- **要畫面內容／圖**，不要長講稿（notes 可留短的）  
- **雙鑽石要畫出鑽石形**，不要只做四欄表  
- 從 **Hub 連進** Gene，不是外連 portfolio  

### 待補
- [ ] GA4 真實數字換 P4 占位  
- [ ] P2 鑽石上文字位置再對齊（若面試投影覺得擠）  
- [ ] 可選：更多內頁截圖（Public Health 內頁、Tab）  
- [ ] `gene/` + hub 變更 **commit / push**  
- [ ] 可選：CDN 圖改本地（目前 P4 仍有 squarespace CDN）  

---

## 六、近期決策（累積）

1. Gene **4 頁**，不拆 V5  
2. 高潮＝**易用性推翻客戶假設**（名詞無效），不是只秀 CI  
3. **Hero 分流** 是 IA 第一刀；Tab 是第二層  
4. 流程＝**雙鑽石**（訪談／問卷 → Persona → IA／flow → wireframe 測 → 迭代）  
5. Hub Gene **本地** deck；VCues 暫外連  
6. 與 FainTV 同構：研究推翻假設（FainTV 代訂／email；Gene 術語首頁）  

---

## 七、Git（請下次核對）

上次正式 push 記錄約：`1ede009`（monorepo hub + FainTV）。  

**本輪很可能尚未進 remote：**
- `gene/index.html`（整包新建＋多輪改文案＋SVG 鑽石）  
- `gene/assets/hero-split.png`  
- `hub/index.html`（Gene 連結與文案）  
- `PROGRESS.md`  

```bash
cd "/Users/linyuxian/Desktop/interview presentation"
git status
```

---

## 八、給下次 AI 的一句話

> 讀 `PROGRESS.md` 〇與五。面試材料在 `Desktop/interview presentation/`。主入口 `hub/index.html`。康健基因 `gene/index.html` 四頁已建：P1 Hero 分流、**P2 SVG 雙鑽石**、P3 名詞無效資訊、P4 落地。Hub 已連本地 gene。優先：對齊鑽石排版、GA4、commit。FainTV 10 頁在 `faintv/`。不要長講稿，改畫面內容。

---

*End of recap · 2026-07-20*
