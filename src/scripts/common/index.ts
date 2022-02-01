function querySelector (id: string): Node {
  return (document.querySelector(id) as Node)
}

export {
  querySelector
}
