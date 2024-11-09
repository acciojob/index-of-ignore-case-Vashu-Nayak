function indexOfIgnoreCase(s1, s2) {
  // write your code here
	return s1.indexOf(s2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(toLowerCase(s1), toLowerCase(s2)));
