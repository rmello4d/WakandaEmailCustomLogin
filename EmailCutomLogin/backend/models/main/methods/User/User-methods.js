model.User.entityMethods.validatePassword = function(password) {	var ha1 = directory.computeHA1(this.ID, password);	return (ha1 === this.HA1Key); //true if validated, false otherwise.};