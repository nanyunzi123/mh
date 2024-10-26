function processForm() {
  // 获取用户输入的两个数字
  let n1 = parseFloat(document.getElementById('num1').value);
  let n2 = parseFloat(document.getElementById('num2').value);

  // 计算两数之和
  let n3 = n1 + n2;

  document.getElementById('zhi').innerText = n3;

  // 在控制台中显示结果
  if (isNaN(num1) || isNaN(num2)) {
    
    console.error("请输入有效的数字");
  }
  else 
  {
    
    console.log(n3);

  }
}