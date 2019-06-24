// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//利用isArray方法，若是数组类型则输出“true”
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
var t=a.length;
for(let i=0;i<t;i++)
  a[i]=a[i]*2;
// TODO should output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
var s=colors.join(" ");
console.log(s);//TODO case 1 output: 'Red Green White Black'
var s1=colors.join("+");
console.log(s1);
// case 2 output: 'Red+Green+White+Black'
var s2=colors.join(",");
console.log(s2);
// case 3 output: 'Red,Green,White,Black'


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
a.sort(function(a,b){
	return a<b?1:-1});
console.log(a);
//TODO should output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var num={};//数组中所有的元素创建一个储存出现频次的对；
var maxnum='';
var ax;
//所有的元素-频次储存
for (let i=0;i<a.length;i++){
	let k=a[i];
	if(!num[k]){
		num[k]=0;
	}
	num[k]=num[k]+1;
}
//依次比较频次，取最大的频次对应的元素
for(ax in num){
	if(maxnum==''||num[ax]>num[maxnum]){
		maxnum=ax;
	}
}

console.log(maxnum);
