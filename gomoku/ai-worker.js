self.onmessage = function(e) {
    const { board, depth } = e.data;
    
    function findBestMove() {
        // 复制findBestMove和minimax函数实现到这里
        // 注意需要复制所有依赖的函数
    }
    
    const bestMove = findBestMove();
    postMessage(bestMove);
};