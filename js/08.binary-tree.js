// 用代码实现下面的二叉树
//                   a
//                 /   \  
//                b     c
//               / \     \
//              d   e     f

const tree = {
    id: 'a',
    left: {
        id: 'b',
        left: {
            id: 'd',
        },
        right: {
            id: 'e'
        }
    },
    right: {
        id: 'c',
        right: {
            id: 'f'
        }
    }
}

let preRet = []; // 前序遍历结果
let midRet = []; // 中序遍历结果
let posRet = []; // 后序遍历结果

// 遍历二叉树
function order(node) {
    if (node) {
        preRet.push(node.id)

        order(node.left);

        midRet.push(node.id)

        order(node.right);

        posRet.push(node.id)
    }
}
order(tree);

console.log(preRet, midRet, posRet);


preRet = [ 'a', 'b', 'd', 'e', 'c', 'f' ];
midRet = [ 'd', 'b', 'e', 'a', 'c', 'f' ];

// 根据前序遍历和中序遍历结果构建二叉树
function createTree(pl, ml) {
    if (pl.length === 0 || pl.length !== ml.length) {
        return;
    }
    if (pl.length === 1) {
        return {
            id: pl[0]
        }
    }

    let pl0 = pl[0];

    const node = {
        id: pl0
    };

    const index = ml.findIndex(x => x === pl0);

    if (index != 0) {
        node.left = createTree(pl.slice(1, index + 1), ml.slice(0, index));
    }
    if (index != pl.length) {
        node.right = createTree(pl.slice(index + 1), ml.slice(index + 1))
    }

    return node;
}

console.log(JSON.stringify(createTree(preRet, midRet), null, 4));
