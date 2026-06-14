// 配置常量
const CONFIG = {
    STORAGE_KEY: 'writer_personality_test',
    STORAGE_EXPIRE: 24 * 60 * 60 * 1000, // 24小时过期
    CATEGORIES: [
        { name: "勤奋/随性", icon: "📝", maxScore: 15 },
        { name: "竞争/表达", icon: "🏆", maxScore: 15 },
        { name: "方法/直觉", icon: "💡", maxScore: 15 },
        { name: "扼要/细腻", icon: "🎨", maxScore: 15 }
    ]
};

// 人格类型数据
const PERSONALITIES = {
    "铁人": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：铁人。你在键盘上奋力敲击，对待写作认真努力，不断锻造自己，任何困难都不能将你击倒。只写不死，就往死里写，你相信天道酬勤，写作是你人生中的重要赛场之一——而你身为铁人，铁人三项必将跨越一切障碍。"
    },
    "匠人": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：匠人。"
    },
    "商人": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：商人。"
    },
    "资本家": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：资本家。"
    },
    "侠客": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：侠客。"
    },
    "策士": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：策士。"
    },
    "枭雄": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：枭雄。"
    },
    "狂战士": {
        image: "./asset/berserker.png",
        description: "你的写作人格特点为：狂战士。你不受束缚，风格自由，从不吝啬于泼洒自己的感情，并可以精准地击中别人的心脏。你不追逐世俗的名声，只给世界留下你来过后的一片无法忽略的废墟。"
    },
    "隐士": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：隐士。"
    },
    "文臣": {
        image: "./asset/civil-official.png",
        description: "你的写作人格特点为：文臣。你太会写故事，也很愿意在故事中探讨你的思想，哪怕这种探讨会引起争议。你也愿意做一定的尝试，即使是不同的故事，不同的讲述方法，你的内核也不会改变。"
    },
    "赌徒": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：赌徒。"
    },
    "资本家2": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：资本家。"
    },
    "比格": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：比格。你的文字要大声喊出！哪怕世界将你捂住，你也会用尽力气发出ververver的叫喊。不论别人能否理解，你的存在感都会自信被所有人所瞩目。"
    },
    "文人": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：文人。你不受束缚，风格自由，从不吝啬于泼洒自己的感情，并可以精准地击中别人的心脏。你不追逐世俗的名声，只给世界留下你来过后的一片无法忽略的废墟。"
    },
    "票友": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：票友。"
    },
    "猫猫人": {
        image: "./asset/cat-person.png",
        description: "你的写作人格特点为：猫猫人。猫猫享受世界，猫猫拒绝焦虑，猫猫每天都晒太阳打盹，猫猫喜欢做游戏。猫猫幸福了就喵儿嗓子，猫猫眼里崭新的钞票还不如纸团子可爱。猫猫人只想在写作的世界里做一只不在乎他人眼光的，幸福享受文字的猫猫。"
    },
    "麻花": {
        image: "./asset/iron-man.png",
        description: "你的写作人格特点为：麻花。你不把写作当作神圣的使命与艰难折磨，同时时刻有着一份做人的真诚；你关注着那种写作手段可以获得更多的青睐，但也不骄不躁放松自己已经认定的写作路径。纠结的麻花是你的底色，正在被写作的油锅炸得金黄酥脆。"
    }
};

// 根据分数判断人格类型
function determinePersonality(scores) {
    const dim1 = scores["勤奋/随性"] >= 8 ? "勤奋" : "随性";
    const dim2 = scores["竞争/表达"] >= 8 ? "竞争" : "表达";
    const dim3 = scores["方法/直觉"] >= 8 ? "方法" : "直觉";
    const dim4 = scores["扼要/细腻"] >= 8 ? "扼要" : "细腻";
    
    // 根据四个维度组合判断人格
    const personalityMap = {
        "勤奋/竞争/方法/扼要": "铁人",
        "勤奋/竞争/方法/细腻": "匠人",
        "勤奋/竞争/直觉/扼要": "商人",
        "勤奋/竞争/直觉/细腻": "资本家",
        "勤奋/表达/方法/扼要": "侠客",
        "勤奋/表达/方法/细腻": "策士",
        "勤奋/表达/直觉/扼要": "枭雄",
        "勤奋/表达/直觉/细腻": "狂战士",
        "随性/竞争/方法/扼要": "隐士",
        "随性/竞争/方法/细腻": "文臣",
        "随性/竞争/直觉/扼要": "赌徒",
        "随性/竞争/直觉/细腻": "资本家",
        "随性/表达/方法/扼要": "比格",
        "随性/表达/方法/细腻": "文人",
        "随性/表达/直觉/扼要": "票友",
        "随性/表达/直觉/细腻": "猫猫人"
    };
    
    const key = `${dim1}/${dim2}/${dim3}/${dim4}`;
    return personalityMap[key] || "铁人";
}

// 状态管理
let currentQuestion = 0;
let answers = [];
let questions = [];
let triggerHiddenResult = false; // 标记是否触发隐藏结果

// DOM元素
const elements = {
    startPage: document.getElementById('startPage'),
    quizPage: document.getElementById('quizPage'),
    resultPage: document.getElementById('resultPage'),
    progressFill: document.getElementById('progressFill'),
    questionNumber: document.getElementById('questionNumber'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    resultContainer: document.getElementById('resultContainer'),
    personalityImage: document.getElementById('personalityImage'),
    personalityName: document.getElementById('personalityName'),
    personalityDescription: document.getElementById('personalityDescription')
};

// 初始化
async function init() {
    await loadQuestions();
    loadFromStorage();
    updateNavigationButtons();
}

// 加载问题数据
async function loadQuestions() {
    try {
        const response = await fetch('./data/questions.json');
        questions = await response.json();
        answers = new Array(questions.length).fill(null);
    } catch (error) {
        console.error('加载问题数据失败:', error);
    }
}

// 保存到localStorage
function saveToStorage() {
    const data = {
        currentQuestion,
        answers,
        timestamp: Date.now()
    };
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data));
}

// 从localStorage加载
function loadFromStorage() {
    const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (Date.now() - data.timestamp < CONFIG.STORAGE_EXPIRE) {
                currentQuestion = data.currentQuestion || 0;
                // 如果保存的答案数量与当前问题数量不一致，重新初始化
                if (data.answers && data.answers.length === questions.length) {
                    answers = data.answers;
                } else {
                    answers = new Array(questions.length).fill(null);
                }
            }
        } catch (e) {
            console.log('加载保存数据失败');
        }
    }
}

// 开始测试
function startQuiz() {
    elements.startPage.classList.add('hidden');
    elements.quizPage.style.display = 'flex';
    elements.quizPage.classList.add('fade-in');
    renderQuestion();
}

// 渲染当前问题
function renderQuestion() {
    if (!questions[currentQuestion]) return;
    
    const q = questions[currentQuestion];
    elements.questionNumber.textContent = `${currentQuestion + 1} / ${questions.length}`;
    elements.questionText.textContent = q.question;
    elements.progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    elements.optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        if (answers[currentQuestion] === idx) {
            optionEl.classList.add('selected');
        }
        optionEl.textContent = opt.text;
        optionEl.onclick = () => selectOption(idx);
        elements.optionsContainer.appendChild(optionEl);
    });

    updateNavigationButtons();
}

// 选择选项
function selectOption(index) {
    answers[currentQuestion] = index;
    saveToStorage();

    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === index);
    });

    updateNavigationButtons();
}

// 更新导航按钮
function updateNavigationButtons() {
    elements.prevBtn.disabled = currentQuestion === 0;

    const allAnswered = answers.every(a => a !== null);
    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion && allAnswered) {
        elements.nextBtn.textContent = '查看结果';
    } else {
        elements.nextBtn.textContent = '下一题';
    }
    elements.nextBtn.disabled = answers[currentQuestion] === null;
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        saveToStorage();
        renderQuestion();
    }
}

// 下一题
function nextQuestion() {
    const allAnswered = answers.every(a => a !== null);
    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion && allAnswered) {
        showResults();
    } else if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        saveToStorage();
        renderQuestion();
    }
}

// 显示结果
function showResults() {
    elements.quizPage.style.display = 'none';
    elements.resultPage.style.display = 'flex';
    elements.resultPage.classList.add('fade-in');

    // 计算每个类别的分数
    const categoryScores = {};
    CONFIG.CATEGORIES.forEach(cat => {
        categoryScores[cat.name] = 0;
    });

    // 重置隐藏结果标记
    triggerHiddenResult = false;

    questions.forEach((q, idx) => {
        const answerIdx = answers[idx];
        if (answerIdx !== null) {
            const score = q.options[answerIdx].score;
            // 检查是否为隐藏题目
            if (q.category === 'hidden') {
                // 如果选择了最后一个选项（score=1），触发隐藏结果
                if (score === 1) {
                    triggerHiddenResult = true;
                }
            } else {
                categoryScores[q.category] += score;
            }
        }
    });

    // 判断人格类型
    const personalityType = determinePersonality(categoryScores);
    const personalityData = PERSONALITIES[personalityType] || PERSONALITIES["铁人"];
    
    // 设置人格图片和名称
    elements.personalityImage.src = personalityData.image;
    elements.personalityName.textContent = personalityType;
    
    // 设置人格描述
    elements.personalityDescription.textContent = personalityData.description;

    // 渲染结果
    elements.resultContainer.innerHTML = '';

    CONFIG.CATEGORIES.forEach(cat => {
        const score = categoryScores[cat.name];
        const maxScore = cat.maxScore;
        const percentage = Math.min(100, Math.max(0, (score / maxScore) * 100));

        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <div class="result-label">
                <span class="${percentage < 50 ? 'active' : ''}">${cat.name.split('/')[0]}</span>
                <span class="${percentage >= 50 ? 'active' : ''}">${cat.name.split('/')[1]}</span>
            </div>
            <div class="result-bar-container">
                <div class="result-bar-bg"></div>
                <div class="result-bar-fill positive" style="width: 0%"></div>
                <div class="result-bar-fill negative" style="width: 0%"></div>
                <div class="result-marker" style="left: 50%"></div>
            </div>
        `;
        elements.resultContainer.appendChild(item);

        // 动画延迟执行
        setTimeout(() => {
            const fillPositive = item.querySelector('.result-bar-fill.positive');
            const fillNegative = item.querySelector('.result-bar-fill.negative');
            const marker = item.querySelector('.result-marker');

            const normalizedScore = percentage;

            if (normalizedScore >= 50) {
                const fillWidth = Math.min(50, (normalizedScore - 50) * 2);
                fillPositive.style.width = `${fillWidth}%`;
                fillNegative.style.width = '0';
                // 右侧fill端点是半圆，marker需要往左移动半径(7px)来覆盖
                marker.style.left = `calc(${50 + fillWidth}% - 7px)`;
            } else {
                const fillWidth = Math.min(50, (50 - normalizedScore) * 2);
                fillNegative.style.width = `${fillWidth}%`;
                fillPositive.style.width = '0';
                // 左侧fill端点是半圆，marker需要往右移动半径(7px)来覆盖
                marker.style.left = `calc(${50 - fillWidth}% + 7px)`;
            }
        }, 100);
    });

    // 清除保存的数据
    localStorage.removeItem(CONFIG.STORAGE_KEY);
}

// 重新测试
function restartQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    triggerHiddenResult = false; // 重置隐藏结果标记
    localStorage.removeItem(CONFIG.STORAGE_KEY);

    elements.resultPage.style.display = 'none';
    elements.startPage.classList.remove('hidden');
}

// 暴露全局函数供HTML调用
window.startQuiz = startQuiz;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.init = init;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);