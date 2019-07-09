export function isObject(obj: any): boolean {
  let type = typeof obj;
  // shouldn't be a function or an array
  return type === 'function' || type === 'object' && !!obj && !obj.length;
}

export function isLeafNode(source: any, key: string): boolean {
  return (source[key] && !isObject(source[key]));
}

export function keysAtDepth(tree: any, depth: number): any {
  let counter: number = depth;

  if (depth === 0) {
    return Object.keys(tree);
  }

  while(counter--) {
    let nodes: Array<string> = [];
    for (let [node, value] of Object.entries(tree)) {
      if (!isLeafNode(tree, node)) {
        nodes.push(...keysAtDepth(value, depth - 1));
      }
    }

    return nodes;
  }
}
