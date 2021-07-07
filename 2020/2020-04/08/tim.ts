class BSTNode {
	public left: BSTNode;
	public right: BSTNode;
	public value: number;
	public count: number;

	constructor() {}
}

class Problem {
	constructor() {}

	run (input: number[]) {
		const root = new BSTNode();
		return input.reverse().map((value) => this.pushToBST(value, root, 0)).reverse();
	}

	// recursive 
	pushToBST(value: number, node: BSTNode, greaterThanCount: number) {
		if (node.value === undefined) {
			node.value = value;
			node.count = 0;
			return greaterThanCount;
		} 

		if (node.value >= value) { // traverse to left
			node.count++;

			if (!node.left) node.left = new BSTNode();

			return this.pushToBST(value, node.left, greaterThanCount);

		} else { // traverse to right
			if (!node.right) node.right = new BSTNode();

			return this.pushToBST(value, node.right, greaterThanCount + node.count + 1);
		}
	}
}

console.log(new Problem().run([9, 6, 8, 10, 2, 1, 1, 4]));// [ 6, 4, 4, 4, 2, 0, 0, 0 ]
