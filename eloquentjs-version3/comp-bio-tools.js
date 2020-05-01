
const basePair = str => {
  if(str=="A") return "T";
  if(str=="T") return "A";
  if(str=="C") return "G";
  if(str=="G") return "C";
}

// For RNA U istead of T

const revComp = str => {
  let seqArr = str.split("").reverse();
  let s2 = seqArr.map(basePair);
  return(s2.join(""));
}


console.log(revComp("ATTTCG"));
