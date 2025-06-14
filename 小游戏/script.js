// 游戏初始化
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const leaderboardElement = document.getElementById('leaderboard');
const splitBtn = document.getElementById('splitBtn');
const shootBtn = document.getElementById('shootBtn');

// 设置画布大小为窗口大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 游戏参数
const MAP_SIZE = 3000;
const PLAYER_RADIUS = 10;
const FOOD_COUNT = 500;
const AI_COUNT = 10;
const FOOD_RADIUS = 3;

// 游戏对象
let player = {
    x: MAP_SIZE / 2,
    y: MAP_SIZE / 2,
    radius: PLAYER_RADIUS,
    color: getRandomColor(),
    name: '玩家',
    mass: PLAYER_RADIUS * PLAYER_RADIUS,
    speed: 2,
    dx: 0,
    dy: 0
};

let foods = [];
let aiPlayers = [];
let bullets = [];
let cameraOffset = { x: 0, y: 0 };
let keys = {};
let mouse = { x: 0, y: 0 };

// 初始化游戏
function init() {
    // 添加WSAD提示
    const hintElement = document.createElement('div');
    hintElement.id = 'controlHint';
    hintElement.style.position = 'fixed';
    hintElement.style.top = '10px';
    hintElement.style.left = '10px';
    hintElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
    hintElement.style.color = 'white';
    hintElement.style.padding = '8px 12px';
    hintElement.style.borderRadius = '5px';
    hintElement.style.fontFamily = 'Arial, sans-serif';
    hintElement.style.fontSize = '14px';
    hintElement.style.zIndex = '1000';
    hintElement.textContent = 'WSAD控制方向哦';
    document.body.appendChild(hintElement);
    
    // 5秒后移除提示
    setTimeout(() => {
        const hint = document.getElementById('controlHint');
        if (hint) {
            hint.style.transition = 'opacity 1s';
            hint.style.opacity = '0';
            setTimeout(() => hint.remove(), 1000);
        }
    }, 5000);
    // 生成食物
    for (let i = 0; i < FOOD_COUNT; i++) {
        foods.push({
            x: Math.random() * MAP_SIZE,
            y: Math.random() * MAP_SIZE,
            radius: FOOD_RADIUS,
            color: getRandomColor()
        });
    }

    // 生成AI玩家
    for (let i = 0; i < AI_COUNT; i++) {
        aiPlayers.push({
            x: Math.random() * MAP_SIZE,
            y: Math.random() * MAP_SIZE,
            radius: PLAYER_RADIUS + Math.random() * 10,
            color: getRandomColor(),
            name: 'AI-' + (i + 1),
            mass: 0,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1
        });
    }

    // 事件监听
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    splitBtn.addEventListener('click', handleSplit);
    shootBtn.addEventListener('click', handleShoot);

    // 开始游戏循环
    gameLoop();
}

// 游戏主循环
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// 更新游戏状态
function update() {
    // 更新玩家位置
    if (keys['w'] || keys['ArrowUp']) player.y -= player.speed;
    if (keys['s'] || keys['ArrowDown']) player.y += player.speed;
    if (keys['a'] || keys['ArrowLeft']) player.x -= player.speed;
    if (keys['d'] || keys['ArrowRight']) player.x += player.speed;

    // 边界检查
    player.x = Math.max(player.radius, Math.min(MAP_SIZE - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(MAP_SIZE - player.radius, player.y));

    // 更新相机位置
    cameraOffset.x = player.x - canvas.width / 2;
    cameraOffset.y = player.y - canvas.height / 2;

    // 更新AI玩家
    aiPlayers.forEach(ai => {
        // 简单AI移动逻辑
        ai.x += ai.dx;
        ai.y += ai.dy;

        // 边界检查和反弹
        if (ai.x <= ai.radius || ai.x >= MAP_SIZE - ai.radius) ai.dx *= -1;
        if (ai.y <= ai.radius || ai.y >= MAP_SIZE - ai.radius) ai.dy *= -1;

        // 随机改变方向
        if (Math.random() < 0.02) {
            ai.dx = Math.random() * 2 - 1;
            ai.dy = Math.random() * 2 - 1;
        }
    });

    // 碰撞检测
    checkCollisions();

    // 更新分数
    player.mass = player.radius * player.radius;
    scoreElement.textContent = Math.floor(player.mass);

    // 更新排行榜
    updateLeaderboard();
}

// 渲染游戏
function render() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 保存当前状态
    ctx.save();
    
    // 应用相机偏移
    ctx.translate(-cameraOffset.x, -cameraOffset.y);

    // 绘制食物
    foods.forEach(food => {
        ctx.beginPath();
        ctx.arc(food.x, food.y, food.radius, 0, Math.PI * 2);
        ctx.fillStyle = food.color;
        ctx.fill();
    });

    // 绘制AI玩家
    aiPlayers.forEach(ai => {
        ctx.beginPath();
        ctx.arc(ai.x, ai.y, ai.radius, 0, Math.PI * 2);
        ctx.fillStyle = ai.color;
        ctx.fill();

        // 绘制AI名字
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(ai.name, ai.x, ai.y - ai.radius - 5);
    });

    // 绘制玩家
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();

    // 绘制玩家名字
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(player.name, player.x, player.y - player.radius - 8);

    // 恢复状态
    ctx.restore();
}

// 碰撞检测
function checkCollisions() {
    // 玩家吃食物
    for (let i = foods.length - 1; i >= 0; i--) {
        const food = foods[i];
        const dist = Math.sqrt(
            Math.pow(player.x - food.x, 2) + 
            Math.pow(player.y - food.y, 2)
        );

        if (dist < player.radius + food.radius) {
            // 增加玩家大小
            player.radius += food.radius * 0.1;
            // 移除食物
            foods.splice(i, 1);
            // 添加新食物
            foods.push({
                x: Math.random() * MAP_SIZE,
                y: Math.random() * MAP_SIZE,
                radius: FOOD_RADIUS,
                color: getRandomColor()
            });
        }
    }

    // 玩家吃AI
    for (let i = aiPlayers.length - 1; i >= 0; i--) {
        const ai = aiPlayers[i];
        const dist = Math.sqrt(
            Math.pow(player.x - ai.x, 2) + 
            Math.pow(player.y - ai.y, 2)
        );

        if (dist < player.radius + ai.radius && player.radius > ai.radius * 1.1) {
            // 增加玩家大小
            player.radius += ai.radius * 0.2;
            // 移除AI
            aiPlayers.splice(i, 1);
            // 添加新AI
            aiPlayers.push({
                x: Math.random() * MAP_SIZE,
                y: Math.random() * MAP_SIZE,
                radius: PLAYER_RADIUS + Math.random() * 10,
                color: getRandomColor(),
                name: 'AI-' + (aiPlayers.length + 1),
                mass: 0,
                dx: Math.random() * 2 - 1,
                dy: Math.random() * 2 - 1
            });
        }
    }
}

// 更新排行榜
function updateLeaderboard() {
    // 创建所有玩家列表
    const allPlayers = [player, ...aiPlayers];
    
    // 按质量排序
    allPlayers.sort((a, b) => b.mass - a.mass);
    
    // 清空排行榜
    leaderboardElement.innerHTML = '';
    
    // 显示前5名
    for (let i = 0; i < Math.min(5, allPlayers.length); i++) {
        const li = document.createElement('li');
        li.textContent = `${allPlayers[i].name}: ${Math.floor(allPlayers[i].mass)}`;
        leaderboardElement.appendChild(li);
    }
}

// 分裂功能
function handleSplit() {
    // 实现分裂逻辑
    // 这里简化实现，实际可以创建多个小球
    player.radius *= 0.7;
}

// 吐球功能
function handleShoot() {
    // 实现吐球逻辑
    const bullet = {
        x: player.x,
        y: player.y,
        radius: player.radius * 0.1,
        color: getRandomColor(),
        dx: (mouse.x + cameraOffset.x - player.x) * 0.05,
        dy: (mouse.y + cameraOffset.y - player.y) * 0.05
    };
    
    bullets.push(bullet);
    player.radius *= 0.99; // 略微减小玩家大小
}

// 事件处理函数
function handleKeyDown(e) {
    keys[e.key.toLowerCase()] = true;
    
    // 空格键分裂
    if (e.key === ' ') handleSplit();
    // O键吐球
    if (e.key.toLowerCase() === 'o') handleShoot();
}

function handleKeyUp(e) {
    keys[e.key.toLowerCase()] = false;
}

function handleMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

// 辅助函数
function getRandomColor() {
    const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 启动游戏
init();
