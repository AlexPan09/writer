// 配置常量
const CONFIG = {
    STORAGE_KEY: 'writer_personality_test',
    STORAGE_EXPIRE: 24 * 60 * 60 * 1000, // 24小时过期
    SHARE_URL: 'https://alexpan09.github.io/writer',
    CATEGORIES: [
        {
            name: "勤奋/随性",
            icon: "📝",
            maxScore: 15,
            description: "有关写作精力状态的评估。越偏向“勤奋”的作者越倾向于使用更多的精力，更有规划地持续写作，生活中写作占据的时间也往往更多；越偏向“随性”的作者越倾向于顺其自然，静待灵感到来，捕捉更舒适的写作时机和更好的写作状态。"
        },
        {
            name: "竞争/表达",
            icon: "🏆",
            maxScore: 15,
            description: "有关写作理念的评估。越偏向“竞争”的作者越倾向于获得奖励和光环，期待作品可以令得到更多认可以及更多赞美；越偏向“表达”的作者越倾向于自我表达，认为诉说内心世界比普世的欢呼更重要，写作是为了吸引志同道合的人。"
        },
        {
            name: "方法/直觉",
            icon: "💡",
            maxScore: 15,
            description: "有关写作路径的评估。越偏向“方法”的作者越倾向于追求更惊奇的写作技巧，用巧妙的结构、漂亮的设定乃至叙诡技术来为作品增添色彩；越偏向“直觉”的作者越倾向于专注故事本身的情绪与内核，用感受的精确传达来打动读者的心灵。"
        },
        {
            name: "扼要/细腻",
            icon: "🎨",
            maxScore: 15,
            description: "有关写作风格的评估。越偏向“扼要”的作者越倾向于用更简明的句子书写自己的故事，文章信息密度相对更高，且相比描写，更注重思想的传达；越偏向“细腻”的作者越倾向于故事细节的构建和事物的描摹，文章节奏相对缓慢，往往更善于创作令读者身临其境的氛围。"
        }
    ]
};

const INLINE_PERSONALITY_IMAGES = window.PERSONALITY_IMAGE_DATA || {};

function getPersonalityImageSrc(path) {
    return INLINE_PERSONALITY_IMAGES[path] || path;
}

// 人格类型数据
const PERSONALITIES = {
    "铁人": {
        image: getPersonalityImageSrc("./asset/iron-man.webp"),
        description: "你在键盘上奋力敲击，对待写作认真努力，不断铸造自己，任何困难都不能将你击倒。只要写不死，就往死里写。你相信天道酬勤，写作是你人生中的重要赛场之一，而你身为铁人，铁人三项势必跨越一切障碍。",
        analysis: "本类作者通常极为勤奋，以及往往带有与“绩优主义”相近的特质。这种特质甚至令他们擅长于PUA自己，如同完成KPI一样高强度地完成一部又一部作品，并在创作时为自己设立明确的目标。不过，不要忘记创作之余停下来更多思考，感受生活，也许会有更多不一样的体验。"
    },
    "蚕人": {
        image: getPersonalityImageSrc("./asset/silkworm.webp"),
        description: "吃进去的是桑叶，吐出来的是蚕丝。你无声又勤恳地默默写作，细致入微地观察着世界的花纹，持续产出大量细腻又有序的丝线将自己包裹。相信假以时日，你终将有化蛹成蝶亦或织就丝绸的一天。",
        analysis: "本类作者勤奋而细腻，对生活的幽微观察有独到之处，不吝于描绘细节，同时又吸纳了许多考究的方法。他们的作品在节奏适中的同时，能不断调整自己的写法以适应大部分人的阅读习惯，这令他们的文笔逐渐成为一种稳定和被他人认可的写作风格。"
    },
    "火人": {
        image: getPersonalityImageSrc("./asset/fire-man.webp"),
        description: "燃烧！燃烧！你灵魂燃烧的能量不断驱策着你，你甚至不能主动让这种燃烧停下来。你的情感为你的燃烧提供可燃物，而生活体验如同鼓风机让火焰越发旺盛。",
        analysis: "本类作者的写作信念执着而旺盛，他们的高频写作更近似于情绪和强烈表达欲望的副作用，就像火焰很难控制自己在燃烧的时候不发出热量一样。同时，他们也常期待着被人倾听与看见，这种创作经常伴随着精神状态的大量消耗。各位火人写作之余，请多多关注自己的SAN值，确保身心健康。"
    },
    "蛾人": {
        image: getPersonalityImageSrc("./asset/moth-person.webp"),
        description: "你凭借超乎他人的直觉在世界中穿梭，用触角细细探知每一处缝隙，发现各种他人发现不了的奇妙事物。你是连滚烫的灯芯也愿意触碰的飞蛾，毕竟，烫伤也是一种危险又独特的体验。",
        analysis: "本类作者精通于感官的细腻描写，且不止限于现实世界的客观描述，常常带有个人特色的主观感受。这种体验有时是危险的，甚至需要潜入心灵深处去触碰一些被掩盖的伤痕，并做出细致的观测，再将体验分享给他人。蛾人在写作中无疑是勇敢的。"
    },
    "老师": {
        image: getPersonalityImageSrc("./asset/teacher.webp"),
        description: "你和对待工作一样对待写作，和对待学生一般对待读者。你愿意寻觅更准确更权威的表达方法，将自己对世界的哲思由浅入深、简明清晰地传达给别人。",
        analysis: "本类作者虽然勤奋地写作，但往往并非以获得成就为目的，而是以吸睛的方法、简约的话语来讲述自己的思想。他们并不会专注于名声，但在创作足够作品之后，常能获得许多被其作品深远影响的读者。多年之后，他们大概率会在某个意外的场景下，与当年的读者重逢。"
    },
    "导游": {
        image: getPersonalityImageSrc("./asset/tour-guide.webp"),
        description: "你有旺盛的精力和表达欲，你明白如何将那些读者游客们带入你的小说世界。你有导游般的职业素养，手握指挥棒般的小旗子，引人入胜地叙述着你精神世界中丰富多彩的一处又一处景观。",
        analysis: "本类作者拥有丰富而瑰丽的内心世界，而有条不紊地描述内心世界，引导读者获得更轻松和身临其境的体验，都是他们所擅长的。同时，相比获得荣誉，他们更愿意获得知己，并和愿意读懂自己的人更多分享更多的想象成果。"
    },
    "蒙眼人": {
        image: getPersonalityImageSrc("./asset/blindfolded-writer.webp"),
        description: "你能清晰地听到自我内心的声音，构筑内心的世界，并持续将其外化为笔下的文字。虽然闭着眼睛写字有时会歪歪扭扭，但也可以感受到更多他人感受不到的东西，不是吗？",
        analysis: "本类作者拥有很强的自我觉察能力，在自我觉察的同时又能不断书写。这种书写有时会缺乏章法，但其内容是十分真诚朴素的。蒙眼人常常不会特别考虑读者对自己文字的阅读体验，不会畏惧于曲高和寡，他们更享受于纯粹的写作本身。"
    },
    "鸟人": {
        image: getPersonalityImageSrc("./asset/bird.webp"),
        description: "你像蜂鸟一样不知疲倦，你敏锐地捕捉世界的细节，事无巨细地讲述所感知的一切。哪怕他人不理解你，发出这是什么鸟人的攻击话语，你也只会无视这些噪音，继续翱翔于文字的广阔天空。",
        analysis: "本类作者有旺盛的写作精力，美好的事物常能激发他们的所见所感。他们讲述生活的频次甚至可以称得上不厌其烦，而这种不厌其烦并非建立在获得掌声的动机之上，而是一种抒发的本能。他们仿佛天生就知道如何用有风格的文字表达自己，就像鸟儿天生就懂得如何歌唱。"
    },
    "发条人": {
        image: getPersonalityImageSrc("./asset/clockwork.webp"),
        description: "你知晓达到目标的捷径，也明白如何下笔才能吸引他人的目光，然而你的背后拥有一根很难转动的发条，需要用力拧紧才能短暂驱动。经常拧动发条令你疲惫，你需要常常休息，为自己添加一些心灵的润滑油。",
        analysis: "本类作者熟练了解写作的方法，也明白如何下笔才能更简明地叙述故事，同时，他们对投稿或获得青睐也颇有心得。然而，他们常常有一个十分难以克服的缺点：驱动自己写作需要耗费很大的力气，每次打开文档都是一场和自己的战斗。"
    },
    "麻花": {
        image: getPersonalityImageSrc("./asset/mahua.webp"),
        description: "你不愿意被写作的各种疲惫与困难束缚，同时期望着有一鸣惊人的成就；你关注着哪种写作手段可以获得更多的青睐，但也不愿意放弃自己已经认定的写作路径。纠结的麻花是你的底色，正在被写作的油锅烹炸得金黄酥脆。",
        analysis: "本类作者常被纠结所困，矛盾是他们永恒的特质。他们间歇性心血来潮，写作习惯相对松散，但对自己的每一篇文章都希求能有不俗的成就；他们追逐并让认同各种名家的写作方法，但自己落笔时往往并不会按部就班地模仿。麻花人相信质高于量，但要当心，也许会心有余而力不足。"
    },
    "比格": {
        image: getPersonalityImageSrc("./asset/beagle.webp"),
        description: "比格大王就是要随心所欲地大声喊叫！哪怕世界要你住口，你也会用尽力气发出ververver的叫喊，不论别人能否理解，你的存在感都会径直穿破所有人的耳膜。",
        analysis: "本类作者虽然有随性的写作频率，但产出往往不低。他们旺盛的情感直觉、丰富的想法和写作欲望让他们的“随性写作”甚至会比一些勤奋努力的作者频次更高。他们笃定又自信地表达自己，有很强的韧性，坚持着自己的理念，争取更高的成就，仿佛永远都不会疲惫。"
    },
    "累人": {
        image: getPersonalityImageSrc("./asset/tired-man.webp"),
        description: "不是身累，而是心累，你拥有敏感的天赋，将生活中的各种细节捕捉为灵感，然而常常陷入千里马难遇伯乐的僵局。你只是缺少一个机会——是金子，总会发光的。",
        analysis: "本类作者喜欢随遇而安、顺其自然的写作状态，但是内心中仍旧隐隐存在着一个成为知名作家的梦想。这种梦想会在他们思索的时候跳出脑海，但除了催迫自己之外并没有什么太大的作用，并不会成为他们改变写作状态的理由。因此，累人往往一边写作一边对抗自己，以至于心神疲惫。事已至此，还是放松一下吧！机缘总会到来。"
    },
    "文臣": {
        image: getPersonalityImageSrc("./asset/civil-official.webp"),
        description: "除去书写故事，你也愿意在故事中探讨你的思想，哪怕这种探讨会引起争议，你也愿意做一定的尝试。即使是用不同的故事，不同的讲述方法，你的内核也不会改变。",
        analysis: "本类作者的文章往往有一种诤臣的气质，他们将自己对世界的分析与劝诫融入文章，变着法地警示世人那些被忽略的深渊。他们并不会时时刻刻创作，但在需要表达的时候便不吝笔墨。他们不为了自己的名气而写作，秉笔直书才是最舒服的状态。"
    },
    "诗人": {
        image: getPersonalityImageSrc("./asset/poet.webp"),
        description: "你偏好舒展精妙的表达，在感受情绪的同时推敲字句，让你想诉说的东西有更完美的表现方式。你不爱花心思追逐俗世的名头，你相信人类的情绪可以穿越时间的长河，与不同时代的灵魂产生特别的共鸣。",
        analysis: "本类作者有一种诗意的气度，文章也有灵气舒展的风格，相信有感而发才是更好的作品。他们常常在文章中炼字，寻求更精妙绝伦的形容。他们很可能会热衷于阅读和旅行，喜欢在现实或想象中体验各种各样的风土人情，以寻找新的灵感。"
    },
    "狂战士": {
        image: getPersonalityImageSrc("./asset/berserker.webp"),
        description: "你不受束缚，风格自由，从不吝于泼洒自己的感情，并可以精准地击中别人的心脏。你不追逐世俗的名声，只给世界留下你来过后的一片无法忽略的废墟。",
        analysis: "本类作者写作是如此随心所欲，随心所欲到根本不在乎是在创作还是攻击。他们言语犀利，才华成了他们的武器，总能让他们在表达中胜出。自由是他们的信条，哪管评价是正面还是负面——写就完了。写作并不是他们的目标，写作只是他们表达的方式之一罢了。"
    },
    "猫猫人": {
        image: getPersonalityImageSrc("./asset/cat-person.webp"),
        description: "猫猫享受世界，猫猫拒绝焦虑，猫猫每天都晒太阳打盹，猫猫喜欢做游戏。猫猫幸福了就喵几嗓子，猫猫眼里崭新的钞票还不如纸团子可爱。猫猫人只想在写作的世界里做一只不在乎他人眼光的，幸福享受文字的猫猫。",
        analysis: "本类作者创作节奏往往不紧不慢，遵循自己的生活习惯，写作于他们而言是生活中锦上添花的调料。他们心思细腻，可以敏感地觉察到世界中的风吹草动，并记录在自己的文字之中。开心与不开心都喵几嗓子，猫猫人无所谓会不会被人发现。"
    },
    "新人": {
        image: getPersonalityImageSrc("./asset/newcomer.webp"),
        description: "你的创作历程才刚刚开始，写作的大门永远向你敞开。祝你笔耕不辍，愿你写得开心。"
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
let currentSaveImageUrl = '';

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
    dimensionsSection: document.getElementById('dimensionsSection'),
    descriptionSection: document.getElementById('descriptionSection'),
    hiddenDimensionsSection: document.getElementById('hiddenDimensionsSection'),
    hiddenDescSection: document.getElementById('hiddenDescSection'),
    personalityImage: document.getElementById('personalityImage'),
    personalityName: document.getElementById('personalityName'),
    personalityDescription: document.getElementById('personalityDescription'),
    personalityAnalysis: document.getElementById('personalityAnalysis'),
    analysisSection: document.getElementById('analysisSection'),
    dimensionAnalysisSection: document.getElementById('dimensionAnalysisSection'),
    dimensionAnalysisContent: document.getElementById('dimensionAnalysisContent'),
    resultTitle: document.getElementById('resultTitle'),
    hiddenPersonalitySection: document.getElementById('hiddenPersonalitySection'),
    hiddenPersonalityImage: document.getElementById('hiddenPersonalityImage'),
    hiddenPersonalityName: document.getElementById('hiddenPersonalityName'),
    hiddenPersonalityDescription: document.getElementById('hiddenPersonalityDescription'),
    hiddenPersonalityAnalysis: document.getElementById('hiddenPersonalityAnalysis'),
    hiddenAnalysisSection: document.getElementById('hiddenAnalysisSection'),
    hiddenDimensionAnalysisSection: document.getElementById('hiddenDimensionAnalysisSection'),
    hiddenDimensionAnalysisContent: document.getElementById('hiddenDimensionAnalysisContent'),
    imageModal: document.getElementById('imageModal'),
    resultImage: document.getElementById('resultImage'),
    saveBtn: document.getElementById('saveBtn'),
    saveArea: document.getElementById('saveArea'),
    saveImage: document.getElementById('saveImage'),
    saveHint: document.getElementById('saveHint')
};

// 初始化
async function init() {
    await loadQuestions();
    loadFromStorage();
    updateNavigationButtons();
    updateSaveUi();
}

function revokeCurrentSaveImageUrl() {
    if (currentSaveImageUrl && currentSaveImageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentSaveImageUrl);
    }
    currentSaveImageUrl = '';
}

function isWeChat() {
    return /micromessenger/i.test(navigator.userAgent);
}

function updateSaveUi() {
    if (elements.saveBtn) {
        elements.saveBtn.style.display = isWeChat() ? 'none' : 'block';
    }

    if (elements.saveArea) {
        elements.saveArea.style.display = isWeChat() ? 'flex' : 'none';
    }
}

function buildDimensionAnalysisHtml() {
    return CONFIG.CATEGORIES.map(cat => {
        const [leftLabel, rightLabel] = cat.name.split('/');
        return `
            <div class="dimension-analysis-item">
                <div class="dimension-analysis-name">${leftLabel} / ${rightLabel}</div>
                <div class="dimension-analysis-text">${cat.description}</div>
            </div>
        `;
    }).join('');
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
    elements.dimensionAnalysisContent.innerHTML = buildDimensionAnalysisHtml();

    // 如果是新人（触发隐藏结局），隐藏维度框和人格描述标题
    if (triggerHiddenResult) {
        elements.dimensionsSection.style.display = 'none';
        elements.dimensionAnalysisSection.style.display = 'none';
        const descTitle = elements.descriptionSection.querySelector('.section-title');
        if (descTitle) descTitle.style.display = 'none';
    } else {
        elements.dimensionsSection.style.display = 'block';
        elements.dimensionAnalysisSection.style.display = 'block';
        const descTitle = elements.descriptionSection.querySelector('.section-title');
        if (descTitle) descTitle.style.display = 'block';
    }

    // 设置结果解析（如果有）
    if (displayPersonalityData.analysis) {
        elements.analysisSection.style.display = 'block';
        elements.personalityAnalysis.textContent = displayPersonalityData.analysis;
    } else {
        elements.analysisSection.style.display = 'none';
    }

    // 设置标题
    elements.resultTitle.textContent = triggerHiddenResult ? '你触发了隐藏结局' : '你的写作人格特点为';
    
    // 如果触发隐藏结果，显示隐藏人格区域（显示正常人格）
    if (triggerHiddenResult) {
        elements.hiddenPersonalitySection.style.display = 'block';
        elements.hiddenPersonalityImage.src = normalPersonalityData.image;
        elements.hiddenPersonalityName.textContent = normalPersonalityType;
        elements.hiddenPersonalityDescription.textContent = normalPersonalityData.description;
        elements.hiddenDimensionAnalysisContent.innerHTML = buildDimensionAnalysisHtml();
        elements.hiddenDimensionAnalysisSection.style.display = 'block';
        // 隐藏人格的结果解析
        if (normalPersonalityData.analysis) {
            elements.hiddenAnalysisSection.style.display = 'block';
            elements.hiddenPersonalityAnalysis.textContent = normalPersonalityData.analysis;
        } else {
            elements.hiddenAnalysisSection.style.display = 'none';
        }
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
            <div class="result-header">
                <div class="result-label">
                    <span class="${percentage >= 50 ? 'active' : ''}">${cat.name.split('/')[0]}</span>
                    <span class="${percentage < 50 ? 'active' : ''}">${cat.name.split('/')[1]}</span>
                </div>
            </div>
            <div class="result-bar-wrapper">
                <div class="bar-side bar-left">
                    <div class="bar-fill left-fill"></div>
                    <div class="bar-marker left-marker"></div>
                </div>
                <div class="bar-side bar-right">
                    <div class="bar-fill right-fill"></div>
                    <div class="bar-marker right-marker"></div>
                </div>
            </div>
        `;
        targetContainer.appendChild(item);

        // 动画延迟执行
        setTimeout(() => {
            const leftFill = item.querySelector('.bar-fill.left-fill');
            const rightFill = item.querySelector('.bar-fill.right-fill');
            const leftMarker = item.querySelector('.bar-marker.left-marker');
            const rightMarker = item.querySelector('.bar-marker.right-marker');

            
            const normalizedScore = percentage;

            if (normalizedScore >= 50) {
                const fillWidth = Math.round(Math.min(100, (percentage - 50) * 2) / 100 * 90 + 10);
                leftFill.style.width = `${fillWidth}%`;
                rightFill.style.width = '0';
                leftMarker.style.right = `calc(${fillWidth}% - 12px)`;
                leftMarker.classList.add('visible');
                rightMarker.classList.remove('visible');
            } else {
                const fillWidth = Math.round(Math.min(100, (50 - percentage) * 2) / 100 * 90 + 10);
                rightFill.style.width = `${fillWidth}%`;
                leftFill.style.width = '0';
                rightMarker.style.left = `calc(${fillWidth}% - 12px)`;
                rightMarker.classList.add('visible');
                leftMarker.classList.remove('visible');
            }
        }, 100);
    });

    // 清除保存的数据
    localStorage.removeItem(CONFIG.STORAGE_KEY);

    updateSaveUi();
    if (isWeChat()) {
        prepareSaveImage();
    } else {
        resetSaveArea();
    }
}

// 重新测试
function restartQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    triggerHiddenResult = false; // 重置隐藏结果标记
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    revokeCurrentSaveImageUrl();
    resetSaveArea();

    elements.resultPage.style.display = 'none';
    elements.startPage.classList.remove('hidden');
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForNextFrame() {
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

async function waitForImages(root) {
    const images = Array.from(root.querySelectorAll('img'));
    await Promise.all(images.map(img => {
        if (img.complete && img.naturalWidth > 0) {
            return Promise.resolve();
        }

        if (typeof img.decode === 'function') {
            return img.decode().catch(() => {});
        }

        return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
        });
    }));
}

function createConicStops() {
    return [
        { offset: 0, color: '#ff6b6b' },
        { offset: 0.18, color: '#feca57' },
        { offset: 0.38, color: '#48dbfb' },
        { offset: 0.6, color: '#54a0ff' },
        { offset: 0.82, color: '#ff9ff3' },
        { offset: 1, color: '#ff6b6b' }
    ];
}

function drawFallbackConicRing(ctx, center, radius, lineWidth) {
    const stops = createConicStops();
    const steps = 180;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'butt';

    for (let i = 0; i < steps; i++) {
        const start = (i / steps) * Math.PI * 2 - Math.PI / 2;
        const end = ((i + 1.5) / steps) * Math.PI * 2 - Math.PI / 2;
        const offset = i / steps;
        const stop = stops.find((item, index) => {
            const next = stops[index + 1];
            return next ? offset >= item.offset && offset <= next.offset : false;
        }) || stops[0];

        ctx.strokeStyle = stop.color;
        ctx.beginPath();
        ctx.arc(center, center, radius - lineWidth / 2, start, end);
        ctx.stroke();
    }
}

function drawAvatarCover(ctx, img, x, y, size) {
    const srcRatio = img.naturalWidth / img.naturalHeight;
    let sourceWidth = img.naturalWidth;
    let sourceHeight = img.naturalHeight;
    let sourceX = 0;
    let sourceY = 0;

    if (srcRatio > 1) {
        sourceWidth = img.naturalHeight;
        sourceX = (img.naturalWidth - sourceWidth) / 2;
    } else if (srcRatio < 1) {
        sourceHeight = img.naturalWidth;
        sourceY = (img.naturalHeight - sourceHeight) / 2;
    }

    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, x, y, size, size);
}

async function renderGradientAvatar(img) {
    const rect = img.getBoundingClientRect();
    const cssSize = Math.max(1, Math.round(rect.width || img.width || 130));
    const pixelRatio = 2;
    const size = cssSize * pixelRatio;
    const ringWidth = 4 * pixelRatio;
    const center = size / 2;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);

    if (typeof ctx.createConicGradient === 'function') {
        const gradient = ctx.createConicGradient(-Math.PI / 2, center, center);
        createConicStops().forEach(stop => gradient.addColorStop(stop.offset, stop.color));
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ringWidth;
        ctx.beginPath();
        ctx.arc(center, center, center - ringWidth / 2, 0, Math.PI * 2);
        ctx.stroke();
    } else {
        drawFallbackConicRing(ctx, center, center, ringWidth);
    }

    const innerOffset = ringWidth;
    const innerSize = size - ringWidth * 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, innerSize / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(innerOffset, innerOffset, innerSize, innerSize);
    drawAvatarCover(ctx, img, innerOffset, innerOffset, innerSize);
    ctx.restore();

    return canvas.toDataURL('image/png');
}

async function createQrCodeDataUrl(text) {
    if (typeof window.qrcode !== 'function') {
        throw new Error('二维码生成库加载失败');
    }

    const qr = window.qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    return qr.createDataURL(4, 1);
}

async function appendShareQrCode(root) {
    const qrDataUrl = await createQrCodeDataUrl(CONFIG.SHARE_URL);
    const qrSection = document.createElement('div');
    qrSection.className = 'share-qr-section';
    qrSection.innerHTML = `
        <div class="share-qr-card">
            <img class="share-qr-image" src="${qrDataUrl}" alt="分享二维码">
            <div class="share-qr-text">
                <div class="share-qr-title">扫码测试你的写作人格</div>
                <div class="share-qr-url">${CONFIG.SHARE_URL}</div>
            </div>
        </div>
    `;

    root.querySelector('.result-capture-page').appendChild(qrSection);
}

async function prepareCaptureAvatars(root) {
    const rainbowImages = Array.from(root.querySelectorAll('img.rainbow-border'));

    await Promise.all(rainbowImages.map(async img => {
        const renderedAvatar = await renderGradientAvatar(img);
        img.src = renderedAvatar;
        img.removeAttribute('srcset');
        img.classList.remove('rainbow-border');
        img.classList.add('capture-gradient-avatar');
    }));
}

function getCaptureScale(width, height) {
    const preferredScale = Math.min(2, window.devicePixelRatio || 2);
    const maxCanvasArea = 16000000;
    const preferredArea = width * height * preferredScale * preferredScale;

    if (preferredArea <= maxCanvasArea) {
        return preferredScale;
    }

    return Math.max(1, Math.sqrt(maxCanvasArea / (width * height)));
}

function createResultCaptureNode() {
    const sourceContainer = document.querySelector('.container');
    const sourceRect = sourceContainer.getBoundingClientRect();
    const host = document.createElement('div');
    host.className = 'result-capture-host';

    const captureContainer = document.createElement('div');
    captureContainer.className = 'container result-capture-container';
    captureContainer.style.width = `${Math.round(sourceRect.width)}px`;

    const resultClone = elements.resultPage.cloneNode(true);
    resultClone.id = 'resultPageCapture';
    resultClone.classList.remove('fade-in');
    resultClone.classList.add('result-capture-page');
    resultClone.style.display = 'flex';

    resultClone.querySelectorAll('[id]').forEach(node => {
        node.removeAttribute('id');
    });

    resultClone.querySelectorAll('.restart-btn, .save-btn').forEach(btn => {
        btn.remove();
    });

    resultClone.querySelectorAll('.save-area').forEach(area => {
        area.remove();
    });

    captureContainer.appendChild(resultClone);
    host.appendChild(captureContainer);
    document.body.appendChild(host);

    return { host, captureContainer };
}

async function canvasToDataUrl(canvas, mimeType = 'image/png', quality) {
    return canvas.toDataURL(mimeType, quality);
}

function resetSaveArea() {
    if (!elements.saveArea || !elements.saveImage || !elements.saveHint) return;

    elements.saveArea.classList.remove('ready', 'failed');
    elements.saveImage.removeAttribute('src');
    elements.saveHint.textContent = '图片生成中...';
}

function setSaveImageSource(imageSrc) {
    if (!elements.saveArea || !elements.saveImage || !elements.saveHint) return;

    revokeCurrentSaveImageUrl();
    currentSaveImageUrl = imageSrc;
    elements.saveImage.src = imageSrc;
    elements.saveArea.classList.add('ready');
    elements.saveArea.classList.remove('failed');
    elements.saveHint.textContent = '长按此处保存图片';
}

function setSaveImageFailed() {
    if (!elements.saveArea || !elements.saveHint) return;

    revokeCurrentSaveImageUrl();
    if (elements.saveImage) {
        elements.saveImage.removeAttribute('src');
    }
    elements.saveArea.classList.add('failed');
    elements.saveArea.classList.remove('ready');
    elements.saveHint.textContent = '图片生成失败，请刷新重试';
}

function triggerImageDownload(imageSrc, filename) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

async function generateResultImageSource() {
    if (typeof html2canvas === 'undefined') {
        throw new Error('图片生成库加载失败');
    }

    let captureHost = null;

    try {
        await wait(350);
        await waitForImages(elements.resultPage);

        if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
        }

        const capture = createResultCaptureNode();
        captureHost = capture.host;
        const target = capture.captureContainer;

        await waitForImages(target);
        await prepareCaptureAvatars(target);
        await appendShareQrCode(target);
        await waitForImages(target);
        await waitForNextFrame();

        const width = Math.ceil(target.scrollWidth);
        const height = Math.ceil(target.scrollHeight);
        const scale = getCaptureScale(width, height);

        const canvas = await html2canvas(target, {
            backgroundColor: '#e0e5ec',
            scale,
            useCORS: true,
            allowTaint: false,
            logging: false,
            imageTimeout: 15000,
            width,
            height,
            windowWidth: width,
            windowHeight: height,
            scrollX: 0,
            scrollY: 0
        });

        if (isWeChat()) {
            return canvasToDataUrl(canvas, 'image/png');
        }

        return canvasToDataUrl(canvas, 'image/png');
    } finally {
        if (captureHost) {
            captureHost.remove();
        }
    }
}

// 生成一张透明承载图。移动端长按该区域时，系统会识别为长按图片。
async function prepareSaveImage() {
    resetSaveArea();

    try {
        const imageSrc = await generateResultImageSource();
        setSaveImageSource(imageSrc);
    } catch (err) {
        console.error('生成图片失败:', err);
        setSaveImageFailed();
    }
}

async function saveResultImage() {
    try {
        if (isWeChat()) {
            const imageSrc = currentSaveImageUrl || await generateResultImageSource();
            elements.resultImage.src = imageSrc;
            elements.imageModal.style.display = 'flex';
            return;
        }

        if (elements.saveBtn) {
            elements.saveBtn.disabled = true;
            elements.saveBtn.textContent = '生成中...';
        }

        const imageSrc = await generateResultImageSource();
        triggerImageDownload(imageSrc, '写作人格测试结果.png');
    } catch (err) {
        console.error('生成图片失败:', err);
        alert('生成图片失败，请重试');
    } finally {
        if (elements.saveBtn && !isWeChat()) {
            elements.saveBtn.disabled = false;
            elements.saveBtn.textContent = '保存图片';
        }
    }
}

// 关闭图片预览弹窗
function closeImageModal() {
    elements.imageModal.style.display = 'none';
}

// 暴露全局函数供HTML调用
window.startQuiz = startQuiz;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.saveResultImage = saveResultImage;
window.closeImageModal = closeImageModal;
window.init = init;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('beforeunload', revokeCurrentSaveImageUrl);
