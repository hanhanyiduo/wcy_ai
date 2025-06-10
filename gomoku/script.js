const BOARD_SIZE = 15;
let board = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(''));
let currentPlayer = 'X';
let gameOver = false;

function initBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', () => handleCellClick(i, j));
            boardElement.appendChild(cell);
        }
    }
}

function handleCellClick(row, col) {
    if (gameOver || board[row][col] !== '') return;
    
    board[row][col] = currentPlayer;
    updateBoard();
    
    if (checkWin(row, col)) {
        gameOver = true;
        alert(`${currentPlayer} 获胜!`);
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateGameInfo();
    
    if (currentPlayer === 'O') {
        setTimeout(makeAIMove, 500);
    }
}

function makeAIMove() {
    // 动态调整搜索深度
    const depth = calculateDynamicDepth();
    
    // 1. 优先检查AI是否有立即获胜的位置
    const winningMove = findWinningMove('O');
    if (winningMove) return makeMove(winningMove);
    
    // 2. 检查玩家威胁
    const blockingMove = findThreateningMove('X');
    if (blockingMove) return makeMove(blockingMove);
    
    // 3. 深度搜索
    const bestMove = findBestMove(depth);
    makeMove(bestMove);
}

function calculateDynamicDepth() {
    const moveCount = board.flat().filter(cell => cell !== '').length;
    // 开局浅搜索，中残局深搜索
    return moveCount < 10 ? 3 : moveCount < 30 ? 5 : 7;
}

function findThreateningMove(player) {
    // 检查4连、活3、双3等威胁
    const threats = [
        findWinningMove(player),       // 5连
        findOpenFour(player),          // 活4
        findDoubleThrees(player),      // 双3
        findOpenThree(player)          // 活3
    ];
    return threats.find(move => move !== null);
}

function evaluateBoard() {
    let score = 0;
    
    // 评估所有行、列和对角线
    score += evaluateLines();
    
    // 中心控制加分
    const center = Math.floor(BOARD_SIZE / 2);
    if (board[center][center] === 'O') score += 10;
    
    // 模式识别
    score += evaluatePatterns('O') * 1.5;  // 进攻权重
    score -= evaluatePatterns('X') * 2.0;   // 防守权重
    
    return score;
}

function findBestMoveNearExisting(depth) {
    let bestScore = -Infinity;
    let bestMove = null;
    const searchRadius = 3; // 搜索范围
    
    // 只在已有棋子周围搜索
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === '' && isNearExisting(i, j, searchRadius)) {
                board[i][j] = 'O';
                const score = minimax(depth - 1, -Infinity, Infinity, false);
                board[i][j] = '';
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = {row: i, col: j};
                }
            }
        }
    }
    
    // 如果没有找到合适的移动，随机选择一个位置
    return bestMove || getRandomMove();
}

function isNearExisting(row, col, radius) {
    // 检查周围radius格内是否有棋子
    for (let i = Math.max(0, row - radius); i <= Math.min(BOARD_SIZE - 1, row + radius); i++) {
        for (let j = Math.max(0, col - radius); j <= Math.min(BOARD_SIZE - 1, col + radius); j++) {
            if (board[i][j] !== '') return true;
        }
    }
    return false;
}

function getRandomMove() {
    const emptyCells = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === '') {
                emptyCells.push({row: i, col: j});
            }
        }
    }
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function findBestMove(depth) {
    let bestScore = -Infinity;
    let bestMove = null;
    
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === '') {
                board[i][j] = 'O';
                const score = minimax(depth - 1, -Infinity, Infinity, false);
                board[i][j] = '';
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = {row: i, col: j};
                }
            }
        }
    }
    return bestMove;
}

function minimax(depth, alpha, beta, isMaximizing) {
    // 检查游戏结束或达到最大深度
    const winner = checkGameWinner();
    if (winner !== null || depth === 0) {
        return evaluateBoard();
    }

    if (isMaximizing) {
        let maxScore = -Infinity;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    const score = minimax(depth - 1, alpha, beta, false);
                    board[i][j] = '';
                    maxScore = Math.max(score, maxScore);
                    alpha = Math.max(alpha, score);
                    if (beta <= alpha) break; // Alpha-Beta剪枝
                }
            }
        }
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'X';
                    const score = minimax(depth - 1, alpha, beta, true);
                    board[i][j] = '';
                    minScore = Math.min(score, minScore);
                    beta = Math.min(beta, score);
                    if (beta <= alpha) break; // Alpha-Beta剪枝
                }
            }
        }
        return minScore;
    }
}

function evaluateLines() {
    let score = 0;
    const directions = [[0,1],[1,0],[1,1],[1,-1]];
    
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            for (const [dx, dy] of directions) {
                score += evaluateDirection(i, j, dx, dy);
            }
        }
    }
    return score;
}

function evaluateDirection(row, col, dx, dy) {
    let aiCount = 0;
    let playerCount = 0;
    let emptyCount = 0;
    
    for (let step = 0; step < 5; step++) {
        const r = row + step * dx;
        const c = col + step * dy;
        
        if (r < 0 || r >= BOARD_SIZE || c < 0 || c >= BOARD_SIZE) {
            return 0; // 超出边界
        }
        
        if (board[r][c] === 'O') aiCount++;
        else if (board[r][c] === 'X') playerCount++;
        else emptyCount++;
    }
    
    // 评估连续棋子
    if (playerCount === 0) {
        // 只有AI棋子
        switch (aiCount) {
            case 4: return 10000; // 即将获胜
            case 3: return 1000;  // 三连
            case 2: return 100;   // 二连
            case 1: return 10;    // 单子
        }
    } else if (aiCount === 0) {
        // 只有玩家棋子
        switch (playerCount) {
            case 4: return -10000; // 需要阻挡
            case 3: return -1000;   // 阻挡三连
            case 2: return -100;   // 阻挡二连
            case 1: return -10;    // 单子
        }
    }
    
    return 0; // 混合情况
}

function checkGameWinner() {
    // 检查整个棋盘是否有获胜者
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] !== '' && checkWin(i, j)) {
                return board[i][j];
            }
        }
    }
    return null;
}

// 新增函数：检测3连
function findThreeInRow(player) {
    const directions = [[0,1],[1,0],[1,1],[1,-1]];
    
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] !== '') continue;
            
            // 模拟下棋
            board[i][j] = player;
            
            // 检查各个方向是否有3连
            for (const [dx, dy] of directions) {
                let count = 1;
                
                // 正向检查
                for (let step = 1; step < 3; step++) {
                    const r = i + step * dx;
                    const c = j + step * dy;
                    if (r < 0 || r >= BOARD_SIZE || c < 0 || c >= BOARD_SIZE || board[r][c] !== player) break;
                    count++;
                }
                
                // 反向检查
                for (let step = 1; step < 3; step++) {
                    const r = i - step * dx;
                    const c = j - step * dy;
                    if (r < 0 || r >= BOARD_SIZE || c < 0 || c >= BOARD_SIZE || board[r][c] !== player) break;
                    count++;
                }
                
                if (count >= 3) {
                    board[i][j] = '';
                    return {row: i, col: j};
                }
            }
            
            // 恢复棋盘
            board[i][j] = '';
        }
    }
    return null;
}

// 辅助函数：执行下棋动作
function makeMove(position) {
    board[position.row][position.col] = 'O';
    updateBoard();
    
    if (checkWin(position.row, position.col)) {
        gameOver = true;
        alert('电脑获胜!');
        return;
    }
    
    currentPlayer = 'X';
    updateGameInfo();
}

// 辅助函数：随机下棋
function makeRandomMove() {
    const emptyCells = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === '') {
                emptyCells.push({row: i, col: j});
            }
        }
    }
    
    if (emptyCells.length > 0) {
        const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        makeMove(randomMove);
    }
}

function findWinningMove(player) {
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1]
    ];

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] !== '') continue;

            // 模拟在这个位置下棋
            board[i][j] = player;
            
            // 检查是否会形成5连
            if (checkWin(i, j)) {
                // 恢复棋盘状态
                board[i][j] = '';
                return { row: i, col: j };
            }
            
            // 恢复棋盘状态
            board[i][j] = '';
        }
    }
    return null;
}

function checkWin(row, col) {
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1] // 水平、垂直、对角线
    ];
    
    for (const [dx, dy] of directions) {
        let count = 1;
        
        // 正向检查
        for (let i = 1; i < 5; i++) {
            const r = row + i * dx;
            const c = col + i * dy;
            if (r < 0 || r >= BOARD_SIZE || c < 0 || c >= BOARD_SIZE || board[r][c] !== currentPlayer) break;
            count++;
        }
        
        // 反向检查
        for (let i = 1; i < 5; i++) {
            const r = row - i * dx;
            const c = col - i * dy;
            if (r < 0 || r >= BOARD_SIZE || c < 0 || c >= BOARD_SIZE || board[r][c] !== currentPlayer) break;
            count++;
        }
        
        if (count >= 5) return true;
    }
    
    return false;
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        cell.textContent = board[row][col];
        if (board[row][col]) {
            cell.classList.add(board[row][col]);
        }
    });
}

function updateGameInfo() {
    document.getElementById('game-info').textContent = 
        `${currentPlayer === 'X' ? '玩家' : '电脑'}回合 (${currentPlayer})`;
}

function resetGame() {
    board = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(''));
    currentPlayer = 'X';
    gameOver = false;
    initBoard();
    updateGameInfo();
}

// 初始化游戏
document.getElementById('reset').addEventListener('click', resetGame);
initBoard();

function evaluatePatterns(player) {
    const patterns = {
        'five': 100000,     // 五连
        'open4': 10000,     // 活四
        'double3': 5000,    // 双三
        'open3': 1000,      // 活三
        'half4': 500,       // 冲四
        'open2': 100        // 活二
    };
    
    let score = 0;
    // 实现各种棋型检测逻辑
    // ...
    return score;
}