//Craig Austgen
//exercise for class
//1-19-2015
function weekTemps() {                        // creates array from temps
   this.data = [];                            
   this.add = add;                            // creates a function of add
   this.average = average;                    // creates an average function
}

function add(temp) {                         // pushes temp onto the stack
   this.data.push(temp);
}

function average() {                         // the average function takes all o
	                                     // of the temps and averages them
   var total = 0;                           
   for (var i = 0; i < this.data.length; ++i) {
      total += this.data[i];
   }
   return total / this.data.length;
}

var thisWeek = new weekTemps();               // creates new object
thisWeek.add(52);                             // adds the temps
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // displays 54.875
