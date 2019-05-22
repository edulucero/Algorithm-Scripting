function fearNotLetter(str) {
  let start = str[0];
  let len = str.length;
	let end = str[len-1]
  console.log(start);
	console.log(end);

	let alphabet = "abcdefghijklmnopqrstuvwxyz";

	let startInd = alphabet.indexOf(start);
	let endInd = alphabet.indexOf(end);
  console.log(startInd);
	console.log(endInd);

	let alphaSlice = alphabet.slice(startInd, endInd+1);
	console.log(alphaSlice);

	let letter = "";

	for(let i = 0; i < str.length; i++){
		if(str.indexOf(alphaSlice[i]) < 0){
			letter = alphaSlice[i]

		}
	}

	if(letter === ""){
		letter = undefined;
	}

	console.log(letter);
  return letter;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
