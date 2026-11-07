document.addEventListener('DOMContentLoaded', () => {
    // --- 在这里定义您的在线单词书结构 ---
    const wordBook = [
        {
            category: "College English",
            // 这个系列分册，所以用 groups 而不是 lists。
            // 选择器会先让你选册、再出该册的单元，避免一个下拉框里堆 25 项。
            groups: [
                {
                    name: "Book 1",
                    lists: [
                        { name: "Unit 1", path: "College English/Book 1/B1U1.json" }
                    ]
                },
                {
                    name: "Book 2",
                    lists: [
                        { name: "Unit 1", path: "College English/Book 2/B2U1.json" },
                        { name: "Unit 2", path: "College English/Book 2/B2U2.json" },
                        { name: "Unit 3", path: "College English/Book 2/B2U3.json" },
                        { name: "Unit 4", path: "College English/Book 2/B2U4.json" },
                        { name: "Unit 5", path: "College English/Book 2/B2U5.json" },
                        { name: "Unit 6", path: "College English/Book 2/B2U6.json" },
                        { name: "Unit 7", path: "College English/Book 2/B2U7.json" },
                        { name: "Unit 8", path: "College English/Book 2/B2U8.json" }
                    ]
                },
                {
                    name: "Book 3",
                    lists: [
                        { name: "Unit 1", path: "College English/Book 3/B3U1.json" },
                        { name: "Unit 2", path: "College English/Book 3/B3U2.json" },
                        { name: "Unit 3", path: "College English/Book 3/B3U3.json" },
                        { name: "Unit 4", path: "College English/Book 3/B3U4.json" },
                        { name: "Unit 5", path: "College English/Book 3/B3U5.json" },
                        { name: "Unit 6", path: "College English/Book 3/B3U6.json" },
                        { name: "Unit 7", path: "College English/Book 3/B3U7.json" },
                        { name: "Unit 8", path: "College English/Book 3/B3U8.json" }
                    ]
                },
                {
                    name: "INCE 2",
                    lists: [
                        { name: "Unit 1", path: "College English/INCE 2/Unit 1.json" },
                        { name: "Unit 2", path: "College English/INCE 2/Unit 2.json" },
                        { name: "Unit 3", path: "College English/INCE 2/Unit 3.json" },
                        { name: "Unit 4", path: "College English/INCE 2/Unit 4.json" },
                        { name: "Unit 5", path: "College English/INCE 2/Unit 5.json" },
                        { name: "Unit 6", path: "College English/INCE 2/Unit 6.json" },
                        { name: "Unit 7", path: "College English/INCE 2/Unit 7.json" },
                        { name: "Unit 8", path: "College English/INCE 2/Unit 8.json" }
                    ]
                },
                {
                    name: "VLS 2",
                    lists: [
                        { name: "Unit 1", path: "College English/VLS 2/Unit 1.json" },
                        { name: "Unit 2", path: "College English/VLS 2/Unit 2.json" },
                        { name: "Unit 3", path: "College English/VLS 2/Unit 3.json" },
                        { name: "Unit 4", path: "College English/VLS 2/Unit 4.json" },
                        { name: "Unit 5", path: "College English/VLS 2/Unit 5.json" },
                        { name: "Unit 6", path: "College English/VLS 2/Unit 6.json" }
                    ]
                }
            ]
        },
        {
            category: "CET 4",
            lists: [
                { name: "核心词汇 - list1", path: "CET 4/list1.json" }
            ]
        },
        {
            category: "Stardew Valley",
            lists: [
                { name: "Group 1", path: "Stardew Valley/星露谷单词1.json" },
                { name: "Group 2", path: "Stardew Valley/星露谷单词2.json" },
                { name: "Group 3", path: "Stardew Valley/星露谷单词3.json" },
                { name: "Group 4", path: "Stardew Valley/星露谷单词4.json" }
            ]
        },
        {
            category: "My Little Pony",
            lists: [
                { name: "S1E01", path: "My Little Pony/Season 1 Word/Ep01.json" },
                { name: "S1E02", path: "My Little Pony/Season 1 Word/Ep02.json" },
                { name: "S1E03", path: "My Little Pony/Season 1 Word/Ep03.json" }
            ]
        },
        {
            category: "NMET Vocabulary",
            lists: [
                { name: "Day 01", path: "NMET Vocabulary/Day 01.json" },
                { name: "Day 02", path: "NMET Vocabulary/Day 02.json" },
                { name: "Day 03", path: "NMET Vocabulary/Day 03.json" },
                { name: "Day 04", path: "NMET Vocabulary/Day 04.json" },
                { name: "Day 05", path: "NMET Vocabulary/Day 05.json" },
                { name: "Day 06", path: "NMET Vocabulary/Day 06.json" },
                { name: "Day 07", path: "NMET Vocabulary/Day 07.json" },
                { name: "Day 08", path: "NMET Vocabulary/Day 08.json" },
                { name: "Day 09", path: "NMET Vocabulary/Day 09.json" },
                { name: "Day 10", path: "NMET Vocabulary/Day 10.json" },
                { name: "Day 11", path: "NMET Vocabulary/Day 11.json" },
                { name: "Day 12", path: "NMET Vocabulary/Day 12.json" },
                { name: "Day 13", path: "NMET Vocabulary/Day 13.json" },
                { name: "Day 14", path: "NMET Vocabulary/Day 14.json" },
                { name: "Day 15", path: "NMET Vocabulary/Day 15.json" },
                { name: "Day 16", path: "NMET Vocabulary/Day 16.json" },
                { name: "Day 17", path: "NMET Vocabulary/Day 17.json" },
                { name: "Day 18", path: "NMET Vocabulary/Day 18.json" },
                { name: "Day 19", path: "NMET Vocabulary/Day 19.json" },
                { name: "Day 20", path: "NMET Vocabulary/Day 20.json" },
                { name: "Day 21", path: "NMET Vocabulary/Day 21.json" },
                { name: "Day 22", path: "NMET Vocabulary/Day 22.json" },
                { name: "Day 23", path: "NMET Vocabulary/Day 23.json" },
                { name: "Day 24", path: "NMET Vocabulary/Day 24.json" },
                { name: "Day 25", path: "NMET Vocabulary/Day 25.json" },
                { name: "Day 26", path: "NMET Vocabulary/Day 26.json" },
                { name: "Day 27", path: "NMET Vocabulary/Day 27.json" },
                { name: "Day 28", path: "NMET Vocabulary/Day 28.json" },
                { name: "Day 29", path: "NMET Vocabulary/Day 29.json" },
                { name: "Day 30", path: "NMET Vocabulary/Day 30.json" },
                { name: "Day 31", path: "NMET Vocabulary/Day 31.json" },
                { name: "Day 32", path: "NMET Vocabulary/Day 32.json" },
                { name: "Day 33", path: "NMET Vocabulary/Day 33.json" },
                { name: "Day 34", path: "NMET Vocabulary/Day 34.json" },
                { name: "Day 35", path: "NMET Vocabulary/Day 35.json" },
                { name: "Day 36", path: "NMET Vocabulary/Day 36.json" },
                { name: "Day 37", path: "NMET Vocabulary/Day 37.json" },
                { name: "Day 38", path: "NMET Vocabulary/Day 38.json" },
                { name: "Day 39", path: "NMET Vocabulary/Day 39.json" },
                { name: "Day 40", path: "NMET Vocabulary/Day 40.json" },
                { name: "Day 41", path: "NMET Vocabulary/Day 41.json" },
                { name: "Day 42", path: "NMET Vocabulary/Day 42.json" }
            ]
        }
    ];

    // --- DOM Elements ---
    const categorySelector = document.getElementById('categorySelector');
    const unitSelector = document.getElementById('unitSelector');
    const unitChips = document.getElementById('unitChips');
    const groupSegmented = document.getElementById('groupSegmented');
    const loadWordsButton = document.getElementById('loadWordsButton');
    const backToSelectionButton = document.getElementById('backToSelectionButton');
    const goBackButton = document.getElementById('goBackButton');
    const startSpellingButton = document.getElementById('startSpellingButton');
    const startDictationButton = document.getElementById('startDictationButton');
    const playAudioButton = document.getElementById('playAudioButton');
    const userAnswerInput = document.getElementById('userAnswer');
    const exportButton = document.getElementById('exportButton');
    const restartButton = document.getElementById('restartButton');
    const exitReviewButton = document.getElementById('exitReviewButton');
    const currentUnitLabel = document.getElementById('currentUnitLabel');
    const togglePhoneticButton = document.getElementById('togglePhoneticButton');
    const showAnswerButton = document.getElementById('showAnswerButton');
    const reviewMistakesButton = document.getElementById('reviewMistakesButton');
    const currentChineseHint = document.getElementById('currentChineseHint');
    const phoneticDisplay = document.getElementById('phonetic');
    const resultFeedback = document.getElementById('result');
    const wordStage = document.getElementById('wordStage');
    const totalWordsCountSpan = document.getElementById('totalWordsCount');
    const reviewedCountSpan = document.getElementById('reviewedCount');
    const incorrectCountSpan = document.getElementById('incorrectCount');
    const incorrectWordsTableBody = document.querySelector('#incorrectWordsTable tbody');
    const incorrectWordsContainer = document.getElementById('incorrectWordsContainer');
    const fileLoadedInfo = document.getElementById('fileLoadedInfo');
    const progressBar = document.getElementById('progressBar');
    const progressBarFill = document.getElementById('progressBarFill');

    // --- Views ---
    const homeView = document.getElementById('homeView');
    const wordSelectionView = document.getElementById('wordSelectionView');
    const readyToStartView = document.getElementById('readyToStartView');
    const quizSetupView = document.getElementById('quizSetupView');
    const reviewView = document.getElementById('reviewView');
    const reviewCompleteView = document.getElementById('reviewCompleteView');
    const views = [homeView, wordSelectionView, readyToStartView, quizSetupView, reviewView, reviewCompleteView];

    // --- Effects ---
    const confettiCanvas = document.getElementById('confettiCanvas');
    const completionTitle = document.getElementById('completionTitle');
    const completionMessage = document.getElementById('completionMessage');
    const completionUnitLabel = document.getElementById('completionUnitLabel');
    // 随机抽查：首页入口 + 设置页 + 完成页成绩区
    const openBookListButton = document.getElementById('openBookListButton');
    const openRandomQuizButton = document.getElementById('openRandomQuizButton');
    const bookListBackButton = document.getElementById('bookListBackButton');
    const quizSetupScope = document.getElementById('quizSetupScope');
    const quizSetupCount = document.getElementById('quizSetupCount');
    const quizSetupBackButton = document.getElementById('quizSetupBackButton');
    const quizRetryButton = document.getElementById('quizRetryButton');
    const quizAvoidRecent = document.getElementById('quizAvoidRecent');
    const quizStatus = document.getElementById('quizStatus');
    const startRandomSpellingButton = document.getElementById('startRandomSpelling');
    const startRandomDictationButton = document.getElementById('startRandomDictation');
    const quizResultsBlock = document.getElementById('quizResultsBlock');
    const quizSummary = document.getElementById('quizSummary');
    const quizNote = document.getElementById('quizNote');
    const quizResultsTableBody = document.querySelector('#quizResultsTable tbody');
    const quizAgainButton = document.getElementById('quizAgainButton');
    const quizAgainLabel = document.getElementById('quizAgainLabel');
    const quizBackButton = document.getElementById('quizBackButton');
    const questionSource = document.getElementById('questionSource');
    const questionSourceText = document.getElementById('questionSourceText');

    // --- Application State ---
    let wordList = [];
    let currentWordIndex = 0;
    let incorrectWords = [];
    let appState = 'wordSelection';
    let reviewMode = 'spelling';
    let currentListPath = null;
    let currentUnitName = "";
    let currentCategoryName = "";
    // 分段控件用：当前选中的册，以及那块会「果冻拉伸」的滑块元素
    let selectedGroupIndex = 0;
    let segmentIndicator = null;
    // 单元胶囊选中的是哪一项。用状态而不是读 DOM：
    // 胶囊是一堆 radio，没有 .value 这种「整个控件一个值」的东西。
    let selectedUnitPath = '';
    let selectedUnitName = '';

    // --- 动效工具 ---
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

    /**
     * 元素入场：极短的淡入 + 微位移。
     * 单词每几十秒才换一次，所以刻意做得几乎察觉不到——目的是消除“瞬移感”，
     * 而不是让人注意到动画本身。
     * 同一个元素上先取消上一次：连续快速换词时不会两条动画叠在一起。
     */
    const activeEntrances = new WeakMap();

    function animateIn(element, { distance = 10, duration = 260 } = {}) {
        if (!element || reducedMotionQuery.matches || typeof element.animate !== 'function') return;
        const previous = activeEntrances.get(element);
        if (previous) previous.cancel();
        activeEntrances.set(element, element.animate(
            [
                { opacity: 0, transform: `translateY(${distance}px)` },
                { opacity: 1, transform: 'translateY(0)' }
            ],
            { duration, easing: EASE_OUT }
        ));
    }

    /**
     * 答错的横向抖动：振幅逐次衰减（弹簧欠阻尼的观感）。
     * 用 WAAPI 而不是 CSS @keyframes —— 新的一次会先把旧的取消掉，
     * 所以连续答错不会「撞墙」（keyframes 要么从零重启，要么因为 class 已存在而根本不重播）。
     */
    const SHAKE_KEYFRAMES = [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-7px)' },
        { transform: 'translateX(5.5px)' },
        { transform: 'translateX(-3.5px)' },
        { transform: 'translateX(2px)' },
        { transform: 'translateX(-0.8px)' },
        { transform: 'translateX(0)' }
    ];

    function shakeAnswerInput() {
        if (reducedMotionQuery.matches || typeof userAnswerInput.animate !== 'function') return;
        userAnswerInput.getAnimations().forEach(animation => animation.cancel());
        userAnswerInput.animate(SHAKE_KEYFRAMES, { duration: 420, easing: 'ease-out' });
    }

    // --- Utility Functions ---
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // --- 随机抽查 -----------------------------------------------------------
    // 跨全部词书抽 50 词，两条约束：
    //   1. 同一轮不重复——按 english 归一化去重，同一个词跨书出现也只算一次；
    //   2. 可跨轮避开最近 3 轮抽过的词，降低短期重复感。
    // 只存单词本身，不存释义：150 个字符串，不会撑爆 localStorage。
    const QUIZ_SIZE = 50;
    const QUIZ_HISTORY_KEY = 'wordtest.quizHistory.v1';
    const QUIZ_HISTORY_ROUNDS = 3;

    let quizPoolCache = null;
    let quizPoolPromise = null;
    let quizPoolFailures = 0;
    let quizResults = [];
    let quizStartedAt = 0;
    let quizElapsedMs = 0;
    let quizMode = 'spelling';
    let isRandomQuiz = false;
    let quizAvoidNote = '';

    function readQuizHistory() {
        try {
            const raw = localStorage.getItem(QUIZ_HISTORY_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!parsed || !Array.isArray(parsed.rounds)) return [];
            return parsed.rounds.filter(Array.isArray).slice(0, QUIZ_HISTORY_ROUNDS);
        } catch (err) {
            // 隐私模式 / 存储被禁用时不该让整页挂掉，按「没有记录」处理
            console.warn('读取抽查记录失败:', err);
            return [];
        }
    }

    function saveQuizRound(words) {
        try {
            const rounds = readQuizHistory();
            rounds.unshift(words.map(word => word.english.toLowerCase()));
            localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify({
                version: 1,
                rounds: rounds.slice(0, QUIZ_HISTORY_ROUNDS)
            }));
        } catch (err) {
            console.warn('保存抽查记录失败，本轮不受影响:', err);
        }
    }

    /** 把 wordBook 里三种层级（groups / lists）统一摊平成 path 列表，并带上完整出处。 */
    function collectAllListPaths() {
        const paths = [];
        wordBook.forEach(book => {
            if (Array.isArray(book.groups)) {
                book.groups.forEach(group => {
                    group.lists.forEach(list => paths.push({
                        path: list.path,
                        source: [book.category, group.name, list.name].filter(Boolean).join(' · ')
                    }));
                });
            } else if (Array.isArray(book.lists)) {
                book.lists.forEach(list => paths.push({
                    path: list.path,
                    source: [book.category, list.name].filter(Boolean).join(' · ')
                }));
            }
        });
        return paths;
    }

    /**
     * 加载全库并去重。46 个文件一次性并发请求，浏览器自己会按域名排队；
     * 单个单元 404 或格式坏掉只跳过它，不让整轮抽查失败。
     */
    function buildQuizPool() {
        if (quizPoolCache) return Promise.resolve(quizPoolCache);
        if (quizPoolPromise) return quizPoolPromise;

        const lists = collectAllListPaths();
        let finished = 0;
        quizPoolFailures = 0;
        quizSetupScope.textContent = `Loading word lists… 0/${lists.length}`;

        quizPoolPromise = Promise.allSettled(lists.map(async item => {
            try {
                const response = await fetch(item.path);
                // 404 是「这一单元还没录入」的占位，不算故障；
                // 其余非 2xx 与网络错误要计数，否则会静默少掉一整本书
                if (response.status === 404) return [];
                if (!response.ok) {
                    quizPoolFailures++;
                    return [];
                }
                const data = await response.json();
                if (!Array.isArray(data)) {
                    quizPoolFailures++;
                    return [];
                }
                return data
                    .filter(word => word && typeof word.english === 'string' && word.english.trim() && Array.isArray(word.pos))
                    .map(word => ({
                        english: word.english.trim(),
                        pos: word.pos,
                        phonetic: typeof word.phonetic === 'string' ? word.phonetic : '',
                        source: item.source
                    }));
            } catch (err) {
                quizPoolFailures++;
                return [];
            } finally {
                finished++;
                // 每 5 个更新一次即可：46 次连续改写会让读屏软件念个不停
                if (finished === lists.length || finished % 5 === 0) {
                    quizSetupScope.textContent = `Loading word lists… ${finished}/${lists.length}`;
                }
            }
        })).then(results => {
            const seen = new Set();
            const pool = [];
            results.forEach(result => {
                if (result.status !== 'fulfilled') return;
                result.value.forEach(word => {
                    const key = word.english.toLowerCase();
                    if (seen.has(key)) return;
                    seen.add(key);
                    pool.push(word);
                });
            });
            quizPoolCache = pool;
            quizPoolPromise = null;
            return pool;
        }).catch(err => {
            quizPoolPromise = null;
            throw err;
        });

        return quizPoolPromise;
    }

    /**
     * 抽取。避重逐层放宽：能排 3 轮就 3 轮，排完不够 50 就退到 2 轮、1 轮，
     * 最后一层仍不够才允许重复——否则用户会被卡在「凑不满一轮」的死角。
     */
    function drawQuizWords(pool, count, avoidRounds) {
        const history = readQuizHistory();
        const usableRounds = Math.min(avoidRounds, history.length);
        let excluded = new Set();
        let usedRounds = 0;

        for (let i = 0; i < usableRounds; i++) {
            const next = new Set(excluded);
            history[i].forEach(key => next.add(key));
            const remaining = pool.reduce(
                (total, word) => total + (next.has(word.english.toLowerCase()) ? 0 : 1),
                0
            );
            if (remaining < count) break;
            excluded = next;
            usedRounds = i + 1;
        }

        let candidates = excluded.size
            ? pool.filter(word => !excluded.has(word.english.toLowerCase()))
            : pool.slice();

        if (candidates.length < count) {
            candidates = pool.slice();
            usedRounds = 0;
        }

        // 部分洗牌：只打乱前 count 个位置，不必把两千多个词全排一遍
        const take = Math.min(count, candidates.length);
        for (let i = 0; i < take; i++) {
            const j = i + Math.floor(Math.random() * (candidates.length - i));
            [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
        }

        return { words: candidates.slice(0, take), usedRounds, usableRounds };
    }

    /** 只记第一次作答：答错后再改对仍然算错，那才是真实的第一反应。 */
    function recordQuizAnswer(index, status, userInput) {
        if (!isRandomQuiz || quizResults[index]) return;
        quizResults[index] = { status, userInput: userInput || '' };
    }

    function formatDuration(ms) {
        const totalSeconds = Math.max(0, Math.round(ms / 1000));
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    }

    function setQuizButtonsDisabled(disabled) {
        startRandomSpellingButton.disabled = disabled;
        startRandomDictationButton.disabled = disabled;
        quizStatus.setAttribute('aria-busy', String(disabled));
    }

    /** 加载失败的词表数：404 占位不算，只有真正读不出来的才算。 */
    function quizLoadWarning() {
        if (quizPoolFailures === 0) return '';
        return `${quizPoolFailures} word list${quizPoolFailures === 1 ? '' : 's'} could not be loaded.`;
    }

    let quizSetupLoading = false;

    /**
     * 进入设置页时准备全库。加载完成前两个模式按钮保持禁用，
     * 避免用户点下去却拿到一个空题库。
     */
    async function prepareQuizSetup({ retry = false } = {}) {
        if (quizSetupLoading) return;
        quizSetupLoading = true;
        quizRetryButton.hidden = true;
        quizStatus.textContent = '';
        setQuizButtonsDisabled(true);

        if (retry) {
            quizPoolCache = null;
            quizPoolPromise = null;
            quizPoolFailures = 0;
        }

        try {
            const pool = await buildQuizPool();
            if (pool.length === 0) throw new Error('empty pool');
            const warning = quizLoadWarning();
            quizSetupScope.textContent =
                `${pool.length.toLocaleString()} unique words across every book — ${QUIZ_SIZE} per round.`
                + (warning ? ` ${warning}` : '');
            setQuizButtonsDisabled(false);
        } catch (err) {
            console.error('抽查题库加载失败:', err);
            quizSetupScope.textContent = 'Word lists could not be loaded.';
            quizStatus.textContent = 'Check your connection, then try again.';
            quizRetryButton.hidden = false;
        } finally {
            quizSetupLoading = false;
        }
    }

    async function startRandomQuiz(mode) {
        if (startRandomSpellingButton.disabled) return;
        setQuizButtonsDisabled(true);
        quizStatus.textContent = '';

        try {
            const pool = await buildQuizPool();
            if (pool.length === 0) {
                quizStatus.textContent = 'No words could be loaded. Check your connection and try again.';
                return;
            }
            quizSetupScope.textContent =
                `${pool.length.toLocaleString()} unique words across every book — ${QUIZ_SIZE} per round.`;

            const avoidRounds = quizAvoidRecent.checked ? QUIZ_HISTORY_ROUNDS : 0;
            const { words, usedRounds, usableRounds } = drawQuizWords(pool, QUIZ_SIZE, avoidRounds);

            if (words.length === 0) {
                quizStatus.textContent = 'No words available for a quiz.';
                return;
            }

            const loadNote = quizLoadWarning();
            const avoidNote = usedRounds < usableRounds
                ? `Your last ${usableRounds} quizzes cover most of the library, so a few words repeat this round.`
                : '';
            quizAvoidNote = [loadNote, avoidNote].filter(Boolean).join(' ');

            quizMode = mode;
            isRandomQuiz = true;
            wordList = words;
            quizResults = new Array(words.length);
            quizStartedAt = performance.now();
            quizElapsedMs = 0;
            currentListPath = '__random_quiz__';
            currentCategoryName = 'All Books';
            currentUnitName = 'Random Quiz';

            // 抽完即记账：中途退出也算这些词「最近出现过」，避免下次立刻重逢
            saveQuizRound(words);

            quizStatus.textContent = '';
            startReview(mode);
        } catch (err) {
            console.error('随机抽查启动失败:', err);
            isRandomQuiz = false;
            quizStatus.textContent = 'Failed to start the quiz. Please try again.';
        } finally {
            setQuizButtonsDisabled(false);
        }
    }

    /** 释义用 DOM 拼，不拼 innerHTML——这条路径以后可能要接用户导入的词表。 */
    function meaningFragment(posEntries) {
        const fragment = document.createDocumentFragment();
        (posEntries || []).forEach(entry => {
            const line = document.createElement('div');
            line.className = 'meaning-line';

            const abbr = document.createElement('span');
            abbr.className = 'pos-abbr';
            abbr.textContent = entry && entry.abbreviation ? entry.abbreviation : '';

            const meaning = document.createElement('span');
            meaning.className = 'pos-meaning';
            meaning.textContent = entry && entry.meaning ? entry.meaning : '';

            line.append(abbr, meaning);
            fragment.appendChild(line);
        });
        return fragment;
    }

    function displayQuizResults() {
        const total = wordList.length;
        const correct = quizResults.filter(result => result && result.status === 'correct').length;
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

        completionUnitLabel.textContent =
            `All Books · Random Quiz · ${quizMode === 'dictation' ? 'Dictation' : 'Spelling'}`;
        completionTitle.textContent = correct === total && total > 0 ? '🎉 Flawless!' : 'Quiz Complete!';
        const missed = total - correct;
        completionMessage.textContent = missed === 0
            ? `All ${total} words correct — clean sweep.`
            : `${missed} word${missed === 1 ? '' : 's'} to revisit. Full breakdown below.`;

        // 与单元模式互斥：抽查只给成绩与逐题对照，不提供错题重练或导出
        incorrectWordsContainer.classList.add('is-hidden');
        reviewMistakesButton.style.display = 'none';
        restartButton.style.display = 'none';
        goBackButton.style.display = 'none';
        quizResultsBlock.classList.remove('is-hidden');

        quizSummary.innerHTML = `
            <div class="quiz-stat">
                <span class="quiz-stat-value">${correct}<span class="quiz-stat-total">/${total}</span></span>
                <span class="quiz-stat-label">Correct</span>
            </div>
            <div class="quiz-stat">
                <span class="quiz-stat-value">${accuracy}%</span>
                <span class="quiz-stat-label">Accuracy</span>
            </div>
            <div class="quiz-stat">
                <span class="quiz-stat-value">${formatDuration(quizElapsedMs)}</span>
                <span class="quiz-stat-label">Time</span>
            </div>
        `;

        quizNote.textContent = quizAvoidNote;
        quizNote.hidden = !quizAvoidNote;

        quizResultsTableBody.innerHTML = '';
        wordList.forEach((word, index) => {
            const result = quizResults[index];
            const row = quizResultsTableBody.insertRow();

            row.insertCell().textContent = String(index + 1);

            const wordCell = row.insertCell();
            wordCell.textContent = word.english;
            if (word.source) {
                const sourceLine = document.createElement('span');
                sourceLine.className = 'quiz-word-source';
                sourceLine.textContent = word.source;
                wordCell.appendChild(sourceLine);
            }

            row.insertCell().appendChild(meaningFragment(word.pos));
            row.insertCell().textContent = result && result.userInput ? result.userInput : '—';

            const status = result ? result.status : 'skipped';
            const badge = document.createElement('span');
            badge.className = `quiz-result ${status}`;
            badge.textContent = status === 'correct'
                ? 'Correct'
                : status === 'revealed' ? 'Revealed'
                : status === 'skipped' ? 'Skipped' : 'Wrong';
            row.insertCell().appendChild(badge);
        });

        const tableScroll = quizResultsBlock.querySelector('.quiz-table-scroll');
        if (tableScroll) tableScroll.scrollTop = 0;

        if (correct === total && total > 0) launchConfetti(180);
    }

    // --- 发音 ---------------------------------------------------------------
    // 用有道词典的发音接口。它是「直接拼 URL」的形式：
    //   https://dict.youdao.com/dictvoice?audio=<单词>&type=2   （1 = 英音，2 = 美音）
    // 相比之前用的 dictionaryapi.dev 有三个好处：
    //   1. 不必先 fetch 查一次拿地址，URL 直接就能算出来；
    //   2. 因此也不需要 CORS——<audio> 播放跨域音频不要求 CORS 头，
    //      只有 fetch 读数据才需要，而现在一次 fetch 都不发；
    //   3. 任何单词都有音（有录音用录音，没有就合成），不会像之前那样大片查不到。
    // 浏览器自带 TTS 只作断网兜底——这台机器上英文只有 Microsoft Zira Desktop
    // （Vista 时代的拼接式语音），单独用它读不准。
    //
    // 【关于「为什么不用有道官方 API」——已调研，结论是这里用不了】
    // ai.youdao.com 确实提供官方 TTS（openapi.youdao.com/ttsapi）和词典 API，
    // 但两者的签名都是 sha256(应用ID + input + salt + curtime + 应用密钥)，
    // 「应用密钥」必须参与计算。纯前端没有后端，密钥就只能写进这个文件，
    // 而本站在公开的 GitHub Pages 上——等于把密钥交给所有人，
    // 后果是被刷爆配额、被以你的身份调用、产生你的账单。
    // 另外官方渠道要付费（仅赠 50 元体验金），词典 API 还需电话申请开通，
    // 且条款明文禁止缓存返回数据。
    // 所以继续用网页版词典自己在用的这个免密接口；
    // 万一哪天它变更，下面的 TTS 兜底会接管，不会白屏也不会静音。
    const YOUDAO_VOICE = 'https://dict.youdao.com/dictvoice?audio=';
    const fallbackAudio = new Audio();
    let speechToken = 0;

    // ── TTS 兜底 ─────────────────────────────────────────────────────────
    // 即使只能用 TTS，也显式挑一个尽可能好的英文语音，而不是听任浏览器默认。
    let englishVoices = [];

    function refreshVoices() {
        if (!('speechSynthesis' in window)) return;
        englishVoices = window.speechSynthesis.getVoices()
            .filter(v => /^en([-_]|$)/i.test(v.lang));
    }

    if ('speechSynthesis' in window) {
        refreshVoices();
        // Chrome 首次 getVoices() 会返回空数组，必须等这个事件
        window.speechSynthesis.addEventListener('voiceschanged', refreshVoices);
    }

    function scoreVoice(voice) {
        const name = voice.name.toLowerCase();
        let score = 0;
        // 神经 / 自然语音最好
        if (/natural|neural|premium|enhanced/.test(name)) score += 100;
        if (/online/.test(name)) score += 30;
        // "Desktop" 是 Vista 那批拼接式语音，最差
        if (/desktop/.test(name)) score -= 60;
        if (/^en[-_]us/i.test(voice.lang)) score += 20;
        else if (/^en[-_]gb/i.test(voice.lang)) score += 10;
        if (voice.localService === false) score += 5;
        return score;
    }

    function pickEnglishVoice() {
        if (englishVoices.length === 0) refreshVoices();
        if (englishVoices.length === 0) return null;
        return englishVoices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
    }

    function stopSpeaking() {
        speechToken++;
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (!fallbackAudio.paused) {
            fallbackAudio.pause();
            fallbackAudio.currentTime = 0;
        }
    }

    function speakWithTTS(text) {
        if (!('speechSynthesis' in window)) return;
        const token = ++speechToken;
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = pickEnglishVoice();
        if (voice) utterance.voice = voice;
        utterance.lang = voice ? voice.lang : 'en-US';
        utterance.rate = 0.9;
        // Chrome 里 cancel() 之后同一 tick 再 speak() 有概率被吞掉，
        // 推到下一个任务更稳；token 用来丢弃期间被取代的那一次。
        setTimeout(() => {
            if (token !== speechToken) return;
            window.speechSynthesis.speak(utterance);
        }, 0);
    }

    /** 朗读一个单词：有道的音优先，加载失败（断网 / 被拦）才退回浏览器 TTS。 */
    function speak(text) {
        stopSpeaking();
        fallbackAudio.src = YOUDAO_VOICE + encodeURIComponent(text) + '&type=2';
        fallbackAudio.play().catch(() => speakWithTTS(text));
    }

    // --- 音效（Web Audio 合成，不再依赖缺失的 ./sounds/*.mp3） ---
    let audioCtx = null;

    function getAudioContext() {
        if (audioCtx) return audioCtx;
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) return null;
        try {
            audioCtx = new Ctor();
        } catch (err) {
            console.warn('Web Audio 不可用，已跳过音效:', err);
            return null;
        }
        return audioCtx;
    }

    function playTone({ freq, duration, type = 'sine', gain = 0.1, delay = 0, sweepTo = null }) {
        const ctx = getAudioContext();
        if (!ctx) return;
        // 浏览器要求音频上下文在用户手势后才能启动
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});

        const startAt = ctx.currentTime + delay;
        const osc = ctx.createOscillator();
        const amp = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, startAt);
        if (sweepTo) osc.frequency.exponentialRampToValueAtTime(sweepTo, startAt + duration);

        // 首尾都收到接近 0，避免爆音
        amp.gain.setValueAtTime(0.0001, startAt);
        amp.gain.exponentialRampToValueAtTime(gain, startAt + 0.012);
        amp.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

        osc.connect(amp).connect(ctx.destination);
        osc.start(startAt);
        osc.stop(startAt + duration + 0.02);
    }

    function playCorrectSound() {
        // 清脆的两音上行
        playTone({ freq: 880, duration: 0.12, gain: 0.11 });
        playTone({ freq: 1318.5, duration: 0.18, gain: 0.09, delay: 0.085 });
    }

    function playIncorrectSound() {
        // 柔和的下行提示，不刺耳
        playTone({ freq: 330, duration: 0.22, type: 'triangle', gain: 0.09, sweepTo: 196 });
    }

    // --- 撒花效果 ---
    const confettiCtx = confettiCanvas.getContext('2d');
    const CONFETTI_COLORS = ['#007aff', '#5ac8fa', '#34d399', '#fbbf24', '#f472b6', '#a78bfa'];
    let confettiParticles = [];
    let confettiFrameId = null;

    function resizeConfettiCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        confettiCanvas.width = Math.floor(window.innerWidth * dpr);
        confettiCanvas.height = Math.floor(window.innerHeight * dpr);
        // 用 CSS 像素坐标绘制
        confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function launchConfetti(amount = 160) {
        // 用户要求减少动态效果时不放撒花
        if (reducedMotionQuery.matches) return;
        resizeConfettiCanvas();

        const width = window.innerWidth;
        for (let i = 0; i < amount; i++) {
            confettiParticles.push({
                x: Math.random() * width,
                y: -20 - Math.random() * 140,
                vx: (Math.random() - 0.5) * 2.4,
                vy: 2.2 + Math.random() * 2.8,
                size: 5 + Math.random() * 7,
                rotation: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 0.24,
                color: CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0],
                shape: Math.random() < 0.28 ? 'circle' : 'rect'
            });
        }

        if (confettiFrameId === null) confettiFrameId = requestAnimationFrame(stepConfetti);
    }

    function stepConfetti() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        confettiCtx.clearRect(0, 0, width, height);

        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const p = confettiParticles[i];
            p.vy += 0.045;   // 重力
            p.vx *= 0.995;   // 空气阻力
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.spin;

            if (p.y > height + 40) {
                confettiParticles.splice(i, 1);
                continue;
            }

            confettiCtx.save();
            confettiCtx.translate(p.x, p.y);
            confettiCtx.rotate(p.rotation);
            confettiCtx.globalAlpha = 0.9;
            confettiCtx.fillStyle = p.color;
            if (p.shape === 'circle') {
                confettiCtx.beginPath();
                confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                confettiCtx.fill();
            } else {
                confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            }
            confettiCtx.restore();
        }

        if (confettiParticles.length > 0) {
            confettiFrameId = requestAnimationFrame(stepConfetti);
        } else {
            confettiCtx.clearRect(0, 0, width, height);
            confettiFrameId = null;
            // 撒完就把画布尺寸归零，把整块显存还回去
            confettiCanvas.width = 0;
            confettiCanvas.height = 0;
        }
    }

    // --- App View Management ---
    function updateAppView(newState) {
        appState = newState;
        views.forEach(view => view.classList.remove('active-view'));
        const targetView = document.getElementById(newState + 'View');
        if (targetView) {
            targetView.classList.add('active-view');
        }
    }

    function hideFeedback() {
        resultFeedback.classList.remove('is-visible');
    }

    // --- 答对之后的推进节奏 ---
    // 不用「锁住界面等 1 秒」的做法：这段时间里用户一动手就立刻推进，
    // 并且保留他已经敲进去的字符（Apple：the thought and the gesture happen in parallel）。
    // 答对之后停留多久再进下一个词。
    // 0.85 秒：够看清「正确」这个反馈，又不打断连续作答的节奏。
    // 而且一动手（打字或按 Enter）就立刻跳过，着急时完全不用等。
    const ADVANCE_DELAY = 850;
    let advanceTimerId = null;
    // 已经作答、正在等待切换的那份答案。
    // 它【留在输入框里】不立刻清掉，好让用户还能看见自己写的是什么，
    // 直到考察的单词一起切换过去。
    let committedAnswer = '';
    // 是否已经点过「看答案」。为 true 时输入框变成纯展示：
    // 答案填在里面等用户看够，按 Enter 才走，绝不自动切换。
    let answerRevealed = false;

    function isAdvancing() {
        return advanceTimerId !== null;
    }

    function scheduleAdvance(delay = ADVANCE_DELAY) {
        clearAdvance();
        advanceTimerId = setTimeout(() => {
            advanceTimerId = null;
            showNextWord();
        }, delay);
    }

    /**
     * 立刻推进到下一个词。
     * preserveInput 只在「用户已经开始敲下一个词」时为 true——
     * 那时输入框里已经是新答案的开头，不能清掉。
     * 按 Enter 跳过时走默认的 false：那份旧答案必须清掉，
     * 否则会被带进下一个单词里。
     */
    function advanceNow({ preserveInput = false } = {}) {
        if (advanceTimerId === null) return;
        clearAdvance();
        showNextWord({ preserveInput });
    }

    function clearAdvance() {
        if (advanceTimerId !== null) {
            clearTimeout(advanceTimerId);
            advanceTimerId = null;
        }
    }

    function resetProgress() {
        clearAdvance();
        currentWordIndex = 0;
        incorrectWords = [];
        hideFeedback();
        updateProgressDisplay();
    }

    function updateProgressDisplay() {
        const total = wordList ? wordList.length : 0;
        const reviewed = Math.max(0, currentWordIndex);

        totalWordsCountSpan.textContent = total;
        reviewedCountSpan.textContent = reviewed;
        incorrectCountSpan.textContent = incorrectWords.length;

        const ratio = total > 0 ? reviewed / total : 0;
        // scaleX 走合成层，比改 width 便宜
        progressBarFill.style.transform = `scaleX(${ratio})`;
        progressBar.setAttribute('aria-valuenow', Math.round(ratio * 100));
        progressBar.classList.toggle('is-complete', total > 0 && reviewed >= total);
    }

    // --- Core Logic ---
    function populateCategorySelector() {
        wordBook.forEach((group, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = group.category;
            categorySelector.appendChild(option);
        });
    }

    /**
     * 第三级 A —— 普通下拉：不分册的系列用它。
     * 这些系列的单元可能只有一个（CET 4），也可能有 42 个（NMET），
     * 摊成一堆胶囊反而更难找，下拉更合适。
     * prefix 是所属分册名，完整名字只写进 dataset：
     * 下拉框里显示 "Unit 3" 才干净，但导出文件名和顶部标识需要完整名。
     */
    function populateUnitSelector(lists, prefix) {
        unitSelector.innerHTML = '';
        unitChips.classList.add('is-hidden');

        // **根据您的要求，不添加“请选择”的默认项**
        lists.forEach(list => {
            const option = document.createElement('option');
            option.value = list.path;
            option.textContent = list.name;
            option.dataset.fullName = prefix ? `${prefix} - ${list.name}` : list.name;
            unitSelector.appendChild(option);
        });

        unitSelector.classList.remove('is-hidden');
        syncUnitSelectionFromSelect();
    }

    /** 把下拉框当前的选中项同步进状态。 */
    function syncUnitSelectionFromSelect() {
        const option = unitSelector.options[unitSelector.selectedIndex];
        selectedUnitPath = option ? option.value : '';
        selectedUnitName = option ? (option.dataset.fullName || option.textContent) : '';
    }

    /**
     * 第三级 B —— 胶囊网格：只有分册的系列（College English）用它。
     * 每册只有 8 个单元，摊开来一眼看全、一次点击就选中，
     * 比「打开下拉 → 滚动 → 选择 → 关闭」少好几步。
     */
    function populateUnitChips(lists, prefix) {
        unitChips.innerHTML = '';
        unitSelector.classList.add('is-hidden');

        // 每行最多 4 个 —— 和上面分册滑块的 4 段同一个节奏。
        // 单元少于 4 个时（Book 1 只有 1 个）就按实际数量分列，
        // 否则那一个胶囊会缩在四分之一格里，右边空一大块。
        unitChips.style.setProperty('--cols', String(Math.max(1, Math.min(4, lists.length))));

        if (lists.length === 0) {
            selectedUnitPath = '';
            selectedUnitName = '';
            return;
        }

        lists.forEach((list, index) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'unit';
            input.id = `unit-${index}`;
            input.value = list.path;
            input.dataset.fullName = prefix ? `${prefix} - ${list.name}` : list.name;
            input.checked = index === 0;

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = list.name;

            unitChips.append(input, label);
        });

        unitChips.classList.remove('is-hidden');

        // 默认替你选好第一个：想换再点，而不是逼你非点一下才能开始
        selectedUnitPath = lists[0].path;
        selectedUnitName = prefix ? `${prefix} - ${lists[0].name}` : lists[0].name;
    }

    /**
     * 生成分册的分段控件——只有分了册的系列（如 College English）才用得到。
     * 用 radio + label 而不是下拉：几个短标签摊开来所有选项一眼可见、
     * 一次点击就选中，比「打开列表 → 滚动 → 选择 → 关闭」少好几步。
     * 目前 College English 有 5 册（Book 1/2/3、INCE 2、VLS 2），
     * 还在分段控件能舒服容纳的范围内；再多就该换回下拉了。
     */
    function populateGroupSelector(categoryIndex) {
        const category = wordBook[categoryIndex];
        groupSegmented.innerHTML = '';

        // --n 给 CSS 算滑块宽度；--i 是静态落点，重置回第一段
        groupSegmented.style.setProperty('--n', String(category.groups.length));
        groupSegmented.style.setProperty('--i', '0');
        selectedGroupIndex = 0;

        // 滑块做成真实元素：Liquid Glass 的果冻拉伸要用 WAAPI 驱动，
        // ::before 伪元素没法被 JS 动画。
        segmentIndicator = document.createElement('span');
        segmentIndicator.className = 'segment-indicator';
        segmentIndicator.setAttribute('aria-hidden', 'true');
        groupSegmented.appendChild(segmentIndicator);

        category.groups.forEach((group, index) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'volume';
            input.id = `volume-${index}`;
            input.value = String(index);
            input.checked = index === 0;

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = group.name;

            groupSegmented.append(input, label);
        });
    }

    /**
     * 把滑块移到第 to 段——这是 Liquid Glass 里最关键的一笔。
     *
     * Apple 对这套材质的原话是「取法玻璃的光学性质与【液体的流动性】」，
     * 且控件会在交互中「变成液态玻璃」。所以滑块不该是刚性平移：
     * 它在途中横向拉伸（像一滴被拽着走的液体），到站再收回原宽。
     * 社区实现把它称作 "jelly"（果冻），说的就是这个。
     */
    function moveIndicator(from, to) {
        groupSegmented.style.setProperty('--i', String(to));
        if (from === to || !segmentIndicator) return;

        // 系统要求减少动态效果时，只做上面的静态落位
        if (reducedMotionQuery.matches || typeof segmentIndicator.animate !== 'function') return;

        segmentIndicator.getAnimations().forEach(animation => animation.cancel());
        segmentIndicator.animate(
            [
                { transform: `translateX(${from * 100}%) scaleX(1)` },
                // 途中拉伸到 1.18 倍：先被「拽长」再落回，才有液体感
                { transform: `translateX(${(from + (to - from) * 0.55) * 100}%) scaleX(1.18)`, offset: 0.5 },
                { transform: `translateX(${to * 100}%) scaleX(1)` }
            ],
            // 0.32 / 0.72 / 0 / 1 是 iOS 抽屉那条曲线：起步果断、收尾极稳
            { duration: 420, easing: 'cubic-bezier(0.32, 0.72, 0, 1)' }
        );
    }

    async function loadWordsFromServer(path) {
        fileLoadedInfo.textContent = 'Loading words';
        try {
            const response = await fetch(path);
            // 404 表示「这个单元还没有录入」（NMET Day 08–42 目前是占位），
            // 不该当成网络故障报给用户。
            if (response.status === 404) {
                const notReady = new Error('not ready');
                notReady.code = 'NOT_READY';
                throw notReady;
            }
            if (!response.ok) throw new Error(`Network error: ${response.statusText}`);
            const fileData = await response.json();

            // 文件存在但还没有录入单词——新建的占位文件就是 []，
            // 和 404 一样属于「还没准备好」，不该报成格式错误。
            if (!Array.isArray(fileData) || fileData.length === 0) {
                const notReady = new Error('not ready');
                notReady.code = 'NOT_READY';
                throw notReady;
            }

            // 逐条校验，而不是只看第一条：否则第 30 条写坏了，
            // 要复习到那一刻才炸，现场极难定位。
            const hasInvalidEntry = fileData.some(w =>
                !w || typeof w.english !== 'string' || !Array.isArray(w.pos) || typeof w.phonetic !== 'string'
            );
            if (hasInvalidEntry) {
                throw new Error("Invalid word list format");
            }

            wordList = fileData;
            fileLoadedInfo.innerHTML = `Loaded: <strong style="color:var(--accent-ink)">${currentUnitName}</strong><br>${wordList.length} words`;
            resetProgress();
            updateAppView('readyToStart');

        } catch (error) {
            console.error("加载单词文件失败:", error);
            fileLoadedInfo.textContent = error.code === 'NOT_READY'
                ? 'This unit is not available yet — try another one'
                : `Failed to load: ${error.message}`;
        }
    }

    /** 顶栏和完成页共用的单元标识，形如「College English · Book 3 - Unit 8」。 */
    function currentUnitLabelText() {
        return currentCategoryName ? `${currentCategoryName} · ${currentUnitName}` : currentUnitName;
    }

    function startCurrentReview() {
        if (!currentListPath) return;
        clearAdvance();
        shuffleArray(wordList); // Re-shuffle before starting
        resetProgress();
        // 顶部条右侧标出正在练的单元——练到一半很容易忘了自己在哪本书里
        currentUnitLabel.textContent = currentUnitLabelText();
        updateAppView('review');
        showNextWord();
    }

    function startReview(mode) {
        reviewMode = mode;
        startCurrentReview();
    }

    function showNextWord({ preserveInput = false } = {}) {
        // preserveInput：用户已经抢在计时器前面开始敲下一个单词了，
        // 那就别把他刚敲的字符抹掉。
        if (!preserveInput) userAnswerInput.value = '';
        // 切换完成，已提交的答案不再需要单独记录
        committedAnswer = '';
        // 新词开始，退出「已揭晓」状态，「看答案」重新可用
        answerRevealed = false;
        showAnswerButton.disabled = false;
        userAnswerInput.classList.remove('input-error-shake');
        hideFeedback();

        if (currentWordIndex < wordList.length) {
            const word = wordList[currentWordIndex];

            // 抽查模式标出这个词出自哪本书、哪一册、哪一单元。
            // 单元练习里恒为隐藏——那时用户本来就知道自己在哪。
            if (isRandomQuiz && word.source) {
                questionSourceText.textContent = word.source;
                questionSource.title = word.source;
                questionSource.hidden = false;
            } else {
                questionSourceText.textContent = '';
                questionSource.removeAttribute('title');
                questionSource.hidden = true;
            }

            if (reviewMode === 'dictation') {
                // 听写模式原本是整张空白卡片——这里给一个不泄题的视觉锚点。
                // 这个标签在整个听写过程中是静止的，所以只在还没写过时写一次，
                // 不必每换一个词就重建一次 DOM。
                if (!currentChineseHint.querySelector('.dictation-hint')) {
                    currentChineseHint.innerHTML =
                        '<span class="dictation-hint"><svg class="icon" aria-hidden="true"><use href="#i-headphones"/></svg>Dictation Mode</span>';
                }
                speak(word.english);
            } else {
                currentChineseHint.innerHTML = word.pos
                    .map(p => `<div class="meaning-line"><span class="pos-abbr">${p.abbreviation}</span><span class="pos-meaning">${p.meaning}</span></div>`)
                    .join('');
            }

            // 【只收起，不写文字】——新的音标等用户下次展开时再写（见 togglePhoneticVisibility）。
            // 这里如果先写再收，淡出的那 240ms 里显示的是【下一个词】的音标：
            // 既和当前单词错位，又提前把下一个词剧透了。截图外的这个 bug 就是这么来的。
            phoneticDisplay.classList.remove('is-visible');
            togglePhoneticButton.setAttribute('aria-pressed', 'false');

            updateProgressDisplay();
            // 听写模式换词时画面上其实没有任何变化：上方标签是静态的、音标默认收起，
            // 所以不需要入场动画。之前无条件动整个舞台，才会把那个静态标签也带着闪。
            if (reviewMode !== 'dictation') animateIn(wordStage);
            userAnswerInput.focus();
        } else {
            quizElapsedMs = isRandomQuiz ? performance.now() - quizStartedAt : 0;
            updateAppView('reviewComplete');
            if (isRandomQuiz) {
                displayQuizResults();
            } else {
                displayIncorrectWords();
            }
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter" && appState === 'review') {
            event.preventDefault();
            // 看过答案：Enter 只是「继续」，不再判定对错，也不播正确音效
            if (answerRevealed) {
                answerRevealed = false;
                currentWordIndex++;
                updateProgressDisplay();
                showNextWord();
                return;
            }
            // 正在等下一个单词时，Enter 直接推进，不用干等。
            // 这里刻意【不】保留输入框内容——那里面是已经作答过的旧答案。
            if (isAdvancing()) { advanceNow(); return; }
            if (userAnswerInput.value.trim() !== '') checkAnswer();
        } else if (event.shiftKey && (event.code === "Space" || event.key === " ")) {
            event.preventDefault();
            togglePhoneticVisibility();
        }
    }

    function checkAnswer() {
        // 上一次答对的过渡还在走时，忽略重复提交。
        // 否则 currentWordIndex 已经自增，这一下会把下一个单词误判成错误。
        if (isAdvancing()) return;

        const userAnswer = userAnswerInput.value.trim();
        const currentWord = wordList[currentWordIndex];

        if (userAnswer.toLowerCase() === currentWord.english.toLowerCase()) {
            playCorrectSound();
            resultFeedback.textContent = `✨ Correct!`;
            resultFeedback.className = 'message-feedback correct-message is-visible';
            recordQuizAnswer(currentWordIndex, 'correct', userAnswer);
            currentWordIndex++;
            updateProgressDisplay();
            // 【不】清空输入框——让答案留在屏幕上，和考察的单词一起切换。
            // 代价是等待期间用户如果直接开打，字符会接在这份答案后面，
            // 所以下面的 input 监听里会把旧答案那段摘掉（见事件绑定处）。
            committedAnswer = userAnswerInput.value;
            scheduleAdvance();
        } else {
            playIncorrectSound();
            resultFeedback.textContent = `🤔 Incorrect — the answer is ${currentWord.english}`;
            resultFeedback.className = 'message-feedback error-message is-visible';
            recordQuizAnswer(currentWordIndex, 'wrong', userAnswer);

            if (!incorrectWords.some(item => item.english === currentWord.english)) {
                incorrectWords.push({ ...currentWord, userInput: userAnswer });
                updateProgressDisplay();
            }

            userAnswerInput.classList.add('input-error-shake');
            shakeAnswerInput();
        }
    }

    /**
     * 「看答案 / 跳过」。
     * 不会拼的词总得有条退路——听写模式下尤其如此，硬猜没有任何学习价值。
     * 因为它确实要记进错题，所以沿用答错那条路径，只是改由用户主动触发。
     */
    function revealAnswer() {
        if (appState !== 'review' || isAdvancing() || answerRevealed) return;
        if (currentWordIndex >= wordList.length) return;

        const word = wordList[currentWordIndex];
        const typed = userAnswerInput.value.trim();
        recordQuizAnswer(currentWordIndex, 'revealed', typed);

        if (!incorrectWords.some(item => item.english === word.english)) {
            incorrectWords.push({ ...word, userInput: typed });
            updateProgressDisplay();
        }

        // 答案直接填进输入框，让用户看个够。
        // 这里【不】排计时器——换不换词交给用户按 Enter 决定。
        // 之前用自动推进，答案刚出现就被换走，等于没看见。
        userAnswerInput.value = word.english;
        userAnswerInput.classList.remove('input-error-shake');
        answerRevealed = true;
        showAnswerButton.disabled = true;

        resultFeedback.textContent = '💡 Press Enter for the next word';
        resultFeedback.className = 'message-feedback info-message is-visible';

        userAnswerInput.focus();
    }

    /**
     * 「只复习错题」：把错题还原成普通词条，重新开一轮。
     * 一个单元错了十几个词，没必要整本重来。
     */
    function reviewMistakesOnly() {
        if (isRandomQuiz || incorrectWords.length === 0) return;
        wordList = incorrectWords.map(w => ({
            english: w.english,
            pos: w.pos,
            phonetic: w.phonetic
        }));
        incorrectWords = [];
        startCurrentReview();   // 内部会重新洗牌并 resetProgress
    }

    function togglePhoneticVisibility() {
        if (appState !== 'review') return;
        const willShow = !phoneticDisplay.classList.contains('is-visible');

        // 【在展开的这一刻才写入音标】，而不是换词时就写好。
        // 换词时写的话，上一个词的音标在做淡出动画的过程中，
        // 里面已经换成了下一个词的内容——既错位，又提前剧透。
        if (willShow && currentWordIndex < wordList.length) {
            phoneticDisplay.textContent = wordList[currentWordIndex].phonetic;
        }

        phoneticDisplay.classList.toggle('is-visible', willShow);
        // 按钮和 Shift+空格 共用同一个状态，这里把 aria-pressed 同步上
        togglePhoneticButton.setAttribute('aria-pressed', String(willShow));
    }

    function displayIncorrectWords() {
        incorrectWordsTableBody.innerHTML = '';

        // 回到单元模式：收起抽查成绩区，并恢复上一条路径隐藏掉的按钮
        quizResultsBlock.classList.add('is-hidden');
        restartButton.style.display = '';
        goBackButton.style.display = '';

        // 完成页也标一遍：做完一单元后经常想确认刚才练的是哪个
        completionUnitLabel.textContent = currentUnitLabelText();

        if (incorrectWords.length === 0) {
            completionTitle.textContent = '🎉 Perfect! All correct!';
            completionMessage.textContent = 'Flawless run — keep it up!';
            // 用 class 而不是内联 display：这样才能走 CSS 过渡，出现时是淡入而非“啪”地弹出
            incorrectWordsContainer.classList.add('is-hidden');
            reviewMistakesButton.style.display = 'none';
            // 全对才撒花——让满分这一次显得特别
            launchConfetti(180);
            return;
        }

        completionTitle.textContent = '👍 Review Complete!';
        completionMessage.textContent = 'Nice work — here are the words to revisit';
        incorrectWordsContainer.classList.remove('is-hidden');
        reviewMistakesButton.style.display = 'inline-flex';

        incorrectWords.forEach((word, index) => {
            const row = incorrectWordsTableBody.insertRow();
            // 逐行入场的错开延迟，配套 CSS 里的 rowIn
            row.style.setProperty('--i', String(index));
            row.insertCell().textContent = word.english;

            const posCell = row.insertCell();
            posCell.innerHTML = word.pos
                .map(entry => `<div class="meaning-line"><span class="pos-abbr">${entry.abbreviation}</span><span class="pos-meaning">${entry.meaning}</span></div>`)
                .join("");

            row.insertCell().textContent = word.phonetic;
            row.insertCell().textContent = word.userInput;
        });
    }

    function exportIncorrectWordsList() {
        if (incorrectWords.length === 0) return;
        let content = "Word,Phonetic,Meaning,Your Answer\n"; // CSV表头

        incorrectWords.forEach(w => {
            // 将词性释义拼接成一个字符串
            const meanings = w.pos.map(p => `${p.abbreviation}${p.meaning}`).join('; ');
            // 添加双引号防止释义里含有英文逗号破坏 CSV 格式
            content += `${w.english},${w.phonetic},"${meanings}",${w.userInput}\n`;
        });

        // 加上 \ufeff 防止 Excel 打开时中文乱码
        const blob = new Blob(["\ufeff" + content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `mistakes_${currentUnitName || 'export'}.csv`; // 文件名带上单元名
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }

    // --- Event Handlers ---
    /** 选中第 index 册：填好它的单元、把滑块移过去、放行「开始学习」。 */
    function selectGroup(index) {
        const category = wordBook[categorySelector.value];
        const group = category.groups[index];
        if (!group) return;

        // 分册系列用胶囊摊开单元（只有 College English 走到这里）
        populateUnitChips(group.lists, group.name);
        moveIndicator(selectedGroupIndex, index);
        selectedGroupIndex = index;
        // 万一某册还没配单元，按钮就别放行——点下去也只会空转
        loadWordsButton.disabled = !selectedUnitPath;
    }

    categorySelector.addEventListener('change', () => {
        const selectedIndex = categorySelector.value;

        if (selectedIndex === '') { // 还没选
            groupSegmented.classList.add('is-hidden');
            unitChips.classList.add('is-hidden');
            unitSelector.classList.add('is-hidden');
            selectedUnitPath = '';
            selectedUnitName = '';
            loadWordsButton.disabled = true;
            return;
        }

        const category = wordBook[selectedIndex];

        if (category.groups) {
            // 分了册的系列：分册用分段控件全部摊开，一眼看到 5 个册、一次点击就能换
            populateGroupSelector(selectedIndex);
            groupSegmented.classList.remove('is-hidden');
            // 默认选中第一册并立刻填好单元。
            // 原来用下拉时这里有个坑：默认项已经选中，用户若就想选它，
            // 不会触发 change，单元框永远不出来。
            selectGroup(0);
        } else {
            // 没分册的系列：直接出单元下拉（CET 4 / Stardew Valley / My Little Pony / NMET）
            groupSegmented.classList.add('is-hidden');
            populateUnitSelector(category.lists, '');
            loadWordsButton.disabled = !selectedUnitPath;
        }
    });

    // 分段控件：radio 的 change 会冒泡到容器，统一在这里处理
    groupSegmented.addEventListener('change', (event) => {
        if (event.target.name !== 'volume') return;
        selectGroup(Number(event.target.value));
    });

    // 单元下拉：不分册的系列用它。改选即生效，点一下就能开始。
    unitSelector.addEventListener('change', () => {
        syncUnitSelectionFromSelect();
        loadWordsButton.disabled = !selectedUnitPath;
    });

    // 单元胶囊：同样是 radio 冒泡。选中即生效，点一下就能开始。
    unitChips.addEventListener('change', (event) => {
        if (event.target.name !== 'unit') return;
        selectedUnitPath = event.target.value;
        selectedUnitName = event.target.dataset.fullName || event.target.value;
        loadWordsButton.disabled = false;
    });

    loadWordsButton.addEventListener('click', () => {
        if (!selectedUnitPath) return;
        // 从抽查切回单元：清掉抽查会话，避免完成页走错分支
        isRandomQuiz = false;
        quizResults = [];
        currentListPath = selectedUnitPath;
        // dataset.fullName 带着分册名（"Book 2 - Unit 3"），
        // 而胶囊上只显示 "Unit 3"——导出文件名和顶部标识需要完整名字
        currentUnitName = selectedUnitName;
        // 一起记下是哪本书：单元名单独看常常有歧义（"Group 1"、"Unit 1" 到处都是）
        currentCategoryName = categorySelector.options[categorySelector.selectedIndex].text;
        updateAppView('readyToStart');
        fileLoadedInfo.textContent = 'Preparing';
        loadWordsFromServer(currentListPath);
    });

    startSpellingButton.addEventListener('click', () => startReview('spelling'));
    startDictationButton.addEventListener('click', () => startReview('dictation'));

    // 首页两个模式：词书进入原来的选书页，抽查进入设置页
    openBookListButton.addEventListener('click', () => updateAppView('wordSelection'));
    bookListBackButton.addEventListener('click', () => updateAppView('home'));

    openRandomQuizButton.addEventListener('click', () => {
        isRandomQuiz = false;
        quizResults = [];
        quizAvoidNote = '';
        quizStatus.textContent = '';
        updateAppView('quizSetup');
        prepareQuizSetup();
    });

    quizSetupBackButton.addEventListener('click', () => updateAppView('home'));
    quizRetryButton.addEventListener('click', () => prepareQuizSetup({ retry: true }));

    startRandomSpellingButton.addEventListener('click', () => startRandomQuiz('spelling'));
    startRandomDictationButton.addEventListener('click', () => startRandomQuiz('dictation'));

    // 等下一个单词的这段时间里，用户一动手就立刻推进，不用干等。
    // 但输入框里还留着上一题的答案，所以要把那一段摘掉，
    // 只保留他刚敲的字符——那才是下一个答案的开头。
    // 把摘除放在 input 事件里而不是 keydown：粘贴和输入法也一并覆盖，
    // 而且 input 在绘制之前同步触发，画面不会闪出中间状态。
    userAnswerInput.addEventListener('input', () => {
        userAnswerInput.classList.remove('input-error-shake');
        // 答案已揭晓时输入框只是展示用：把它锁回答案，打字看不出变化。
        // 不用 readonly 是因为 iOS 对 readonly 输入框可能不弹键盘，
        // 而 Enter 恰恰要靠那个键盘。
        if (answerRevealed) {
            userAnswerInput.value = wordList[currentWordIndex].english;
            return;
        }
        if (!isAdvancing()) return;
        if (committedAnswer && userAnswerInput.value.startsWith(committedAnswer)) {
            userAnswerInput.value = userAnswerInput.value.slice(committedAnswer.length);
        }
        committedAnswer = '';
        advanceNow({ preserveInput: true });
    });

    userAnswerInput.addEventListener('keydown', handleKeyPress);
    exportButton.addEventListener('click', exportIncorrectWordsList);

    restartButton.addEventListener('click', startCurrentReview);
    backToSelectionButton.addEventListener('click', () => {
        isRandomQuiz = false;
        quizResults = [];
        updateAppView('wordSelection');
    });
    goBackButton.addEventListener('click', () => {
        isRandomQuiz = false;
        quizResults = [];
        updateAppView('wordSelection');
    });

    // 复习中途的出口：随时能回到主菜单，不把人困在流程里
    exitReviewButton.addEventListener('click', () => {
        clearAdvance();
        isRandomQuiz = false;
        quizResults = [];
        updateAppView('home');
    });

    playAudioButton.addEventListener('click', () => {
        if (appState === 'review' && currentWordIndex < wordList.length) {
            speak(wordList[currentWordIndex].english);
            userAnswerInput.focus();
        }
    });

    // 音标：给触屏设备一条能走的路（Shift+空格 在 iPad 上按不出来）
    togglePhoneticButton.addEventListener('click', () => {
        togglePhoneticVisibility();
        userAnswerInput.focus();
    });

    // 看答案后不抢焦点：用户这一刻是在读答案，不是接着打字
    showAnswerButton.addEventListener('click', revealAnswer);

    reviewMistakesButton.addEventListener('click', reviewMistakesOnly);

    // 抽查再来一轮：沿用同一模式，但避重记录已经更新，会自动换一批词
    quizAgainButton.addEventListener('click', () => {
        quizResultsBlock.classList.add('is-hidden');
        quizResults = [];
        startRandomQuiz(quizMode);
    });

    quizBackButton.addEventListener('click', () => {
        isRandomQuiz = false;
        quizResults = [];
        quizAvoidNote = '';
        quizResultsBlock.classList.add('is-hidden');
        wordList = [];
        incorrectWords = [];
        resetProgress();
        updateAppView('home');
    });

    window.addEventListener('resize', () => {
        if (confettiParticles.length > 0) resizeConfettiCanvas();
    });

    // --- Initial Execution ---
    // 这里【不】分配撒花画布：一张全屏 DPR2 画布在 iPad 上要十几 MB，而且是全程常驻的。
    // launchConfetti() 内部会按需分配，画完再归还（见 stepConfetti）。
    populateCategorySelector();
    quizAgainLabel.textContent = `Try Another ${QUIZ_SIZE}`;
    quizSetupCount.textContent = String(QUIZ_SIZE);
    updateAppView('home');
    updateProgressDisplay();
});
