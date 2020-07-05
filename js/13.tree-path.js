// 找到匹配关键字的路径
let tree = {
    name: '浙江省',
    children: [{
        name: '舟山市',
        children: [{
            name: '定海区'
        }, {
            name: '普陀山'
        }]
    }, {
        name: '杭州市',
        children: [{
            name: '余杭区'
        }, {
            name: '滨江区定海'
        }]
    }]
}

function Node(name, children, parent) {
    this.name = name;
    this.children = children;
    this.parent = parent

    this.setParent = function(node) {
        this.parent = node;
    }
}

let n1 = new Node('定海区');
let n2 = new Node('普陀山');
let n3 = new Node('舟山市', [n1, n2]);


let n4 = new Node('余杭区');
let n5 = new Node('滨江区');
let n6 = new Node('杭州市', [n4, n5]);

let n7 = new Node('浙江省', [n3, n6]);

n1.setParent(n3);
n2.setParent(n3);
n3.setParent(n7);
n4.setParent(n6);
n5.setParent(n6);
n6.setParent(n7);

// console.log(n7)
/*
    递归遍历tree，找到匹配关键字的节点，再从该节点向上遍历，知道根节点

    关键在于需要构建一棵双向树
*/
function walk(k) {
    let ret = [];
    function _walk(node) {
        if (node) {
            if (node.name.indexOf(k) > -1) {
                _leafToRoot(node)
            }

            node.children && node.children.forEach(child => {
                _walk(child);
            });
        }
    }

    function _leafToRoot(node) {
        let path = [node.name];
        let p = node.parent;
        while(p) {
            path.unshift(p.name);
            p = p.parent;
        }
        ret.push(path);
    }

    _walk(n7)

    return ret;
}

console.log(walk('山'))