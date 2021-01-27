function clearInput(a) {
  const x = document.getElementById(a).getElementsByTagName("input");
  console.log(x.length, "length");

  for (let i = 0; i < x.length; i++) {
    const ele = x[i];
    ele.value = "";
  }
}

export default clearInput;
