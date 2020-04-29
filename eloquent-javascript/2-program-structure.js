// Looping a Triangle

/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function sevenTriangles() {
  let char = "#";
  for (let i = 0; i < 7; i++) {
    console.log(char);
    char = `${char}#`;
  }
}

sevenTriangles();
