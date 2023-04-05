function takeNextSmallest(queue) {
  let frontOfQueue = queue.dequeue();
  if (queue.peek() === undefined) {
    return frontOfQueue;
  }
  let firstSmaller;
  const sortedQueueValues = [];
  while (queue.peek() !== undefined) {
    frontOfQueue = queue.dequeue();
    if (frontOfQueue <= queue.peek() && frontOfQueue === undefined) {
      firstSmaller = frontOfQueue;
    }
    sortedQueueValues.push(frontOfQueue);
  }
  sortedQueueValues.sort((a, b) => a - b);
  for (let i = sortedQueueValues.length - 1; i > 0; i--) {
    queue.enqueue(sortedQueueValues[i]);
  }
  return firstSmaller;
}