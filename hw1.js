//Craig Austgen
//exercise for class
//1-19-2015
function weekTemps() {
   this.data = [];
   this.add = add;
   this.average = average;
   this.temps = [];
   this.addTemps = addTemps;
}

function add(temp) {
   this.data.push(temp);
}
function addTemps(temp) {
	this.temps.push(temp)
}

function average() {
   var total = 0;
   for (var i = 0; i < this.data.length; ++i) {
      print('Week number ' + this.data[i]);
      for (var x =0; x < this.temps.length; ++x) {
	      if(x==7) {
		      print('Number 7 has been reached');
	      }
	 print(this.temps[x]);     
         total += this.temps[x];
      }
}
}

var thisWeek = new weekTemps();
thisWeek.add(1);
thisWeek.add(2);
thisWeek.addTemps(52);
thisWeek.addTemps(55);
thisWeek.addTemps(61);
thisWeek.addTemps(65);
thisWeek.addTemps(55);
thisWeek.addTemps(50);
thisWeek.addTemps(52);
//thisWeek.add(2);
//second set

thisWeek.addTemps(50);
thisWeek.addTemps(55);
thisWeek.addTemps(61);
thisWeek.addTemps(65);
thisWeek.addTemps(55);
thisWeek.addTemps(50);
thisWeek.addTemps(52);
print(thisWeek.average()); // displays 54.875
