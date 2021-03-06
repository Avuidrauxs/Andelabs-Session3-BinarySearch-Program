/*
Firstly, you are to create three functions, as prototypes to the Array class to return the following:
>`toTwenty()` returns `[1, 2, 3 . . . 20]`
>`toForty()` returns `[2, 4, 6 . . . 40]`
>`toOneThousand()` returns `[10, 20, 30 . . . 1000]`
Once you are done, create another prototype(d) function called `.search`, it will take just one argument which is the number you are to find. The search function should return an object, which contains
>`.count`, the number of times your function iterated to find the index of the number in question
>`.index`, the index of the number in question
>`.length`, the length of the original array
The `.search` function should implement the _binary search algorithm_. Each time you iterate, you should increase the count, to test how efficient your implementation is.
*/

module.exports = [].prototype;
Array.prototype.search = function (searchElement) {
  const self = this;
self.count = 0;
self.index = -1;


	var minIndex = 0;
    var maxIndex = self.length - 1;
    var currentIndex;
    var currentElement;
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = self[currentIndex];
        if (self[minIndex]  === searchElement) {
             self.index = minIndex;
              break;
         }
         else if (self[maxIndex]  === searchElement){
             self.index = maxIndex;
              break;
         }
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            self.index = currentIndex;
            break;
        }
	self.count++;
    }


   return new Pocket(self.count,self.length,self.index);
  
};


function Pocket(count,length,index){
  
    this.count = count;
    this.length = length;
    this.index = index;
  
}
//Array of 1 to 20
Array.prototype.toTwenty = function () {
  
  var i = 1;
	while(i <= 20)
  {
    this.push(i);
    i++;
  }
	return this;
};

//Array of 2 to 40
Array.prototype.toForty = function () {
  
 var i = 2;
  while(i <= 40)
  {
    this.push(i);
    i+=2;
  }
  return this;
};

//Array of 10 to 1000
Array.prototype.toOneThousand = function () {
  
 var i = 10;
  while(i <= 1000)
  {
    this.push(i);
    i+=10;
  }
  return this;
};
