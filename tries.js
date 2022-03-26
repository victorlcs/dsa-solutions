"use strict";
class MyNode {
    constructor() {
        this.keys = new Map();
        this.end = false;
    }
    set setEnd(flag) {
        this.end = flag;
    }
    isEnd() {
        return this.end;
    }
}
class Trie {
    constructor(...items) {
        this.root = new MyNode();
        items.forEach(x => {
            this.add(x);
        });
    }
    add(input, node = this.root) {
        if (input.length == 0) {
            node.setEnd = true;
        }
        else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new MyNode());
            return this.add(input.slice(1, input.length), node.keys.get(input[0]));
        }
        else {
            return this.add(input.slice(1, input.length), node.keys.get(input[0]));
        }
    }
    isWord(word) {
        let node = this.root;
        while (word.length > 1) {
            if (word[0] === '*') {
                for (let i = 0; i < node.keys.size; i++) {
                    let tempKey = Array.from(node.keys.keys())[i];
                    let tempNode = node.keys.get(tempKey);
                    if (tempNode.keys.has(word[1])) {
                        node = tempNode;
                        word = word.slice(1, word.length);
                        break;
                    }
                }
            }
            else if (!node.keys.has(word[0])) {
                return false;
            }
            else {
                node = node.keys.get(word[0]);
                word = word.slice(1, word.length);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ||
            (word === '*' && Array.from(node.keys.values()).find(x => x.isEnd())) ? true : false;
    }
}
let tries = new Trie('cat', 'catch', 'bob', 'book', 'catching', 'z');
console.log(tries.isWord('*'));
console.log(tries.isWord('*at'));
console.log(tries.isWord('cat'));
console.log(tries.isWord('cat*h'));
