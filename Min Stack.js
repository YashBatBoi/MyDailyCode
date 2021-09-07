/**
 * initialize your data structure here.
 */

var MinStack = function() {
    this.container = []
	
//create an array of mins, to store new and old mins of the stack
//that way, if a min is popped, you only need to go to 
//the next one in this arr, to determine what the current min is.
//any number greater than a current min is irrelevant

  this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function(val) {
      if(this.min.length === 0 || val<=this.min[this.min.length-1])  this.min.push(val)
      this.container.push(val)
};

/**
 * @return {void}
 */

MinStack.prototype.pop = function() {
    if(this.container.pop() === this.min[this.min.length-1]) this.min.pop()
};

/**
 * @return {number}
 */

MinStack.prototype.top = function() {
    return this.container[this.container.length-1]
};

/**
 * @return {number}
 */

MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
