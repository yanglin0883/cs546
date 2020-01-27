const questionOne = function questionOne(arr) {
    // Implement question 1 here
	let sum = 0;
	//for(let i=0;i<arr.length;i++){
	for(let i of arr){
		//sum += arr[i] * arr[i];
		sum += i * i;
		//console.log(sum);
	}
	return sum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
	if(num<1) return 0;
	if(num==1) return 1;
	if(num ==2) return 1;
	let pre = 1;
	let cur = 1;
	let next = 2;
	for(let i=3;i<=num;i++){
		if(i==num) return next;
		pre =cur;
		cur = next;
		next = pre + cur;
	}
	return next;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
	let temp = text.toLowerCase();
	let count=0;
	for(let ch of temp){
		if(ch=='a' || ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;
	}
	return count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
	if(num<0) return NaN;
	let product =1;
	for(let i=1;i<=num;i++){
		product *= i;
	}
	return product;
}

module.exports = {
    firstName: "Lin", 
    lastName: "Yang", 
    studentId: "10444363",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};