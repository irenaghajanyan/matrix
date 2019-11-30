module.exports = {
        printMatrix: function(m) {
            for(let i = 0; i < m.length; i++){
                let s = "";
                for(let j = 0; j < m[i].length; j++){
                    s = s + m[i][j] + " ";
                }
                console.log(s);
            }
        }
}

