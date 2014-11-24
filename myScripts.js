
// function goAdFree(){
 // return 10;
// }

fxpay.init({
  onerror: function(error) {
    console.error('An error occurred:', error);
	return 0;
  },
  oninit: function() {
    console.log('fxpay initialized without errors');
	return 1;
  },
  // onrestore: function(error, product) {
    // If error is null, product.productId has been 
    // restored from receipt.
	// if(error != null) return 3;
	// else return 2;
  // }
});