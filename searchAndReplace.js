function myReplace(str, before, after) {
	let capRegEx = /^[A-Z]/;
	if(capRegEx.test(before) === true){
		after = after.charAt(0).toUpperCase() + after.slice(1);
	} else {
		after = after.charAt(0).toLowerCase() + after.slice(1);
	}
  str = str.replace(before, after);
   return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("His name is Tom", "Tom", "john")
