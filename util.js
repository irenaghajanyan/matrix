
module.exports = {
		multiplyMatrices: function(a, b){
		let aRow = a.length;
		let aCol = a[0].length;
		let bRow = b.length;
		let bCol = b[0].length;

		if(aCol!=bRow){
			return null;
		}
	
		//result array
		let m = new Array(aRow);    //should have length of aRow
	
		for(let i = 0; i < aRow; i++){
			m[i] = new Array(bCol);             //getting row of the result array
			for(let j = 0; j < bCol; j++){
				m[i][j] = 0;                    //filling initially with value 0 to current cell
				for(let k = 0; k < aCol; k++){
					m[i][j] += a[i][k] * b[k][j];       //multiplying by row-colomn principle
				}
			}
		}
		return m;       //returning result
	}

}