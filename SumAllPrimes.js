function SumAllPrimes(num) {

	function isPrime(num) {
		if(num === 1) {
			return false;
		};

		for(let i = 2; i < num; i++) {
				if(num % i === 0){
					return false;
				};
		};

		return true;
	};

	let primes = [];

	for(k = 1; k <= num; k++) {
		if(isPrime(k) === true) {
			primes.push(k);
		};
	}

	let sum = 0;

	for(m = 0; m < primes.length; m++) {
		sum = sum + primes[m];
	}

	console.log(sum);

};

SumAllPrimes(977)
