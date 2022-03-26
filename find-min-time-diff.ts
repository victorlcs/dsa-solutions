//Solution Explain
//1. Convert time to 24 hours format
//2. Convert time to minutes
//3. Sort time ascendingly
//4. Iterate and find the smallet "X" difference
//5. To find the shortest "Y" difference for largest Time to reach smallet Time
//6. Compare again who is the smallet between "X" and "Y";
function timeDiffVersion2(mat: string[]) {
	let newTime: string[] = [];
	let minArr: number[] = [];
	let minMinute: number;
	mat.forEach((time) => {
		let temp = new Array<string>(2);
		if (time.includes("pm")) {
			temp = time.replace("pm", "").split(":");
			temp[0] = (+temp[0] + 12).toString();
		} else {
			temp = time.replace("am", "").split(":");
			if (temp[0] === "12") {
				temp[0] = "24";
			}
		}
		newTime.push(temp.join(":"));
		minArr.push(+temp[0] * 60 + +temp[1]);
	});
	minArr = minArr.sort((a, b) => a - b);
	minMinute = minArr[1] - minArr[0];
	for (let i = 0; i < minArr.length - 1; i++) {
		minMinute = Math.min(minMinute, minArr[i + 1] - minArr[i]);
	}
	let a = minArr[minArr.length - 1] - (minArr[minArr.length - 1] - minArr[0]);
	console.log(minMinute);
	minMinute = Math.min(minMinute, a + (24 * 60 - minArr[minArr.length - 1]));
	return minMinute;
}

console.log(timeDiffVersion2(["11:45pm", "9:00pm", "12:01am", "6:00am"]));
console.log(timeDiffVersion2(["12:00am", "11:59pm", "12:00am"]));
console.log(timeDiffVersion2(["11:00pm", "2:00am", "7:00pm"]));
