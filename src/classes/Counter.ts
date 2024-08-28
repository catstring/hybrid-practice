class Counter {
    private count: number;
  
    constructor(initialCount: number = 0) {
      this.count = initialCount;
    }
  
    increment() {
      this.count += 1;
      return this.count;
    }
  
    decrement() {
      this.count -= 1;
      return this.count;
    }
  
    getCount() {
      return this.count;
    }
  }

export default Counter;