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
        image: "./asset/iron-man.webp",
        description: "你的写作人格特点为：铁人。\n你在键盘上奋力敲击，对待写作认真努力，不断铸造自己，任何困难都不能将你击倒。只要写不死，就往死里写。你相信天道酬勤，写作是你人生中的重要赛场之一，而你身为铁人，铁人三项势必跨越一切障碍。"
    },
    "蚕人": {
        image: "./asset/silkworm.webp",
        description: "你的写作人格特点为：蚕人。\n吃进去的是桑叶，吐出来的是蚕丝。你无声又勤恳地默默写作，细致入微地观察着世界的花纹，持续产出大量细腻又有序的丝线将自己包裹。相信假以时日，你终将有化蛹成蝶亦或织就丝绸的一天。"
    },
    "火人": {
        image: "./asset/fire-man.webp",
        description: "你的写作人格特点为：火人。\n燃烧！燃烧！你灵魂燃烧的能量不断驱策着你，你甚至不能主动让这种燃烧停下来。你的情感为你的燃烧提供可燃物，而生活体验如同鼓风机让火焰越发旺盛。"
    },
    "蛾人": {
        image: "./asset/moth-person.webp",
        description: "你的写作人格特点为：蛾人。\n你凭借超乎他人的直觉在世界中穿梭，用触角细细探知每一处缝隙，发现各种他人发现不了的奇妙事物。你是连滚烫的灯芯也愿意触碰的飞蛾，毕竟，烫伤也是一种危险又独特的体验。"
    },
    "老师": {
        image: "./asset/teacher.webp",
        description: "你的写作人格特点为：老师。\n你和对待工作一样对待写作，和对待学生一般对待读者。你愿意寻觅更准确更权威的表达方法，将自己对世界的哲思由浅入深、简明清晰地传达给别人。"
    },
    "导游": {
        image: "./asset/tour-guide.webp",
        description: "你的写作人格特点为：导游。\n你有旺盛的精力和表达欲，你明白如何将那些读者游客们带入你的小说世界。你有导游般的职业素养，手握指挥棒般的小旗子，引人入胜地叙述着你精神世界中丰富多彩的一处又一处景观。"
    },
    "蒙眼人": {
        image: "./asset/blindfolded-writer.webp",
        description: "你的写作人格特点为：蒙眼人。\n你能清晰地听到自我内心的声音，构筑内心的世界，并持续将其外化为笔下的文字。虽然闭着眼睛写字有时会歪歪扭扭，但也可以感受到更多他人感受不到的东西，不是吗？"
    },
    "鸟人": {
        image: "./asset/bird.webp",
        description: "你的写作人格特点为：鸟人。\n你像蜂鸟一样不知疲倦，你敏锐地捕捉世界的细节，事无巨细地讲述所感知的一切。哪怕他人不理解你，发出这是什么鸟人的攻击话语，你也只会无视这些噪音，继续翱翔于文字的广阔天空。"
    },
    "发条人": {
        image: "./asset/clockwork.webp",
        description: "你的写作人格特点为：发条人。\n你知晓达到目标的捷径，也明白如何下笔才能吸引他人的目光，然而你的背后拥有一根很难转动的发条，需要用力拧紧才能短暂驱动。经常拧动发条令你疲惫，你需要常常休息，为自己添加一些心灵的润滑油。"
    },
    "麻花": {
        image: "./asset/mahua.webp",
        description: "你的写作人格特点为：麻花。\n你不愿意被写作的各种疲惫与困难束缚，同时期望着有一鸣惊人的成就；你关注着哪种写作手段可以获得更多的青睐，但也不愿意放弃自己已经认定的写作路径。纠结的麻花是你的底色，正在被写作的油锅烹炸得金黄酥脆。"
    },
    "比格": {
        image: "./asset/beagle.webp",
        description: "你的写作人格特点为：比格。\n比格大王就是要随心所欲地大声喊叫！哪怕世界要你住口，你也会用尽力气发出ververver的叫喊，不论别人能否理解，你的存在感都会径直穿破所有人的耳膜。"
    },
    "累人": {
        image: "./asset/tired-man.webp",
        description: "你的写作人格特点为：累人。\n不是身累，而是心累，你拥有敏感的天赋，将生活中的各种细节捕捉为灵感，然而常常陷入千里马难遇伯乐的僵局。你只是缺少一个机会——是金子，总会发光的。"
    },
    "文臣": {
        image: "./asset/civil-official.webp",
        description: "你的写作人格特点为：文臣。\n除去书写故事，你也愿意在故事中探讨你的思想，哪怕这种探讨会引起争议，你也愿意做一定的尝试。即使是用不同的故事，不同的讲述方法，你的内核也不会改变。"
    },
    "诗人": {
        image: "./asset/poet.webp",
        description: "你的写作人格特点为：诗人。\n你偏好舒展精妙的表达，在感受情绪的同时推敲字句，让你想诉说的东西有更完美的表现方式。你不爱花心思追逐俗世的名头，你相信人类的情绪可以穿越时间的长河，与不同时代的灵魂产生特别的共鸣。"
    },
    "狂战士": {
        image: "./asset/berserker.webp",
        description: "你的写作人格特点为：狂战士。\n你不受束缚，风格自由，从不吝于泼洒自己的感情，并可以精准地击中别人的心脏。你不追逐世俗的名声，只给世界留下你来过后的一片无法忽略的废墟。"
    },
    "猫猫人": {
        image: "./asset/cat-person.webp",
        description: "你的写作人格特点为：猫猫人。\n猫猫享受世界，猫猫拒绝焦虑，猫猫每天都晒太阳打盹，猫猫喜欢做游戏。猫猫幸福了就喵几嗓子，猫猫眼里崭新的钞票还不如纸团子可爱。猫猫人只想在写作的世界里做一只不在乎他人眼光的，幸福享受文字的猫猫。"
    },
    "新人": {
        image: "./asset/newcomer.webp",
        description: "你触发了隐藏结局：新人。\n你的创作历程才刚刚开始，写作的大门永远向你敞开。祝你笔耕不辍，愿你写得开心。"
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
        "勤奋/竞争/方法/细腻": "蚕人",
        "勤奋/竞争/直觉/扼要": "火人",
        "勤奋/竞争/直觉/细腻": "蛾人",
        "勤奋/表达/方法/扼要": "老师",
        "勤奋/表达/方法/细腻": "导游",
        "勤奋/表达/直觉/扼要": "蒙眼人",
        "勤奋/表达/直觉/细腻": "鸟人",
        "随性/竞争/方法/扼要": "发条人",
        "随性/竞争/方法/细腻": "麻花",
        "随性/竞争/直觉/扼要": "比格",
        "随性/竞争/直觉/细腻": "累人",
        "随性/表达/方法/扼要": "文臣",
        "随性/表达/方法/细腻": "诗人",
        "随性/表达/直觉/扼要": "狂战士",
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
    hiddenResultContainer: document.getElementById('hiddenResultContainer'),
    personalityImage: document.getElementById('personalityImage'),
    personalityName: document.getElementById('personalityName'),
    personalityDescription: document.getElementById('personalityDescription'),
    resultTitle: document.getElementById('resultTitle'),
    hiddenPersonalitySection: document.getElementById('hiddenPersonalitySection'),
    hiddenPersonalityImage: document.getElementById('hiddenPersonalityImage'),
    hiddenPersonalityName: document.getElementById('hiddenPersonalityName'),
    hiddenPersonalityDescription: document.getElementById('hiddenPersonalityDescription')
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
    const normalPersonalityType = determinePersonality(categoryScores);
    const normalPersonalityData = PERSONALITIES[normalPersonalityType] || PERSONALITIES["铁人"];
    
    // 如果触发隐藏结果，显示"新人"作为主人格，否则显示正常人格
    let displayPersonalityType, displayPersonalityData;
    if (triggerHiddenResult) {
        displayPersonalityType = "新人";
        displayPersonalityData = PERSONALITIES["新人"];
    } else {
        displayPersonalityType = normalPersonalityType;
        displayPersonalityData = normalPersonalityData;
    }
    
    // 设置人格图片和名称
    elements.personalityImage.src = displayPersonalityData.image;
    elements.personalityName.textContent = displayPersonalityType;
    
    // 如果是新人结果，添加彩虹边框样式
    if (triggerHiddenResult) {
        elements.personalityImage.classList.add('rainbow-border');
    } else {
        elements.personalityImage.classList.remove('rainbow-border');
    }
    
    // 设置人格描述
    elements.personalityDescription.textContent = displayPersonalityData.description;
    
    // 设置标题
    elements.resultTitle.textContent = triggerHiddenResult ? '你触发了隐藏结局' : '你的写作人格特点为';
    
    // 如果触发隐藏结果，显示隐藏人格区域（显示正常人格）
    if (triggerHiddenResult) {
        elements.hiddenPersonalitySection.style.display = 'block';
        elements.hiddenPersonalityImage.src = normalPersonalityData.image;
        elements.hiddenPersonalityName.textContent = normalPersonalityType;
        elements.hiddenPersonalityDescription.textContent = normalPersonalityData.description;
    } else {
        elements.hiddenPersonalitySection.style.display = 'none';
    }

    // 根据是否触发隐藏结局决定进度条显示位置
    const targetContainer = triggerHiddenResult ? elements.hiddenResultContainer : elements.resultContainer;
    
    // 清空两个容器
    elements.resultContainer.innerHTML = '';
    elements.hiddenResultContainer.innerHTML = '';

    // 确保两个容器都有正确的显示状态
    if (triggerHiddenResult) {
        elements.resultContainer.style.display = 'none';
        elements.hiddenResultContainer.style.display = 'block';
    } else {
        elements.resultContainer.style.display = 'block';
        elements.hiddenResultContainer.style.display = 'none';
    }

    CONFIG.CATEGORIES.forEach((cat, index) => {
        const score = categoryScores[cat.name];
        const maxScore = cat.maxScore;
        const percentage = Math.min(100, Math.max(0, (score / maxScore) * 100));

        const item = document.createElement('div');
        item.className = `result-item category-${index}`;
        item.innerHTML = `
            <div class="result-label">
                <span class="${percentage < 50 ? 'active' : ''}">${cat.name.split('/')[1]}</span>
                <span class="${percentage >= 50 ? 'active' : ''}">${cat.name.split('/')[0]}</span>
            </div>
            <div class="result-bar-container">
                <div class="result-bar-bg"></div>
                <div class="result-bar-fill positive" style="width: 0%"></div>
                <div class="result-bar-fill negative" style="width: 0%"></div>
                <div class="result-marker" style="left: 50%"></div>
            </div>
        `;
        targetContainer.appendChild(item);

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