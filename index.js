// code your solution here
function superbowlWin(record) {
    // Use the find method to locate the first "W" result in the record array
    const win = record.find(game => game.result === "W");
  
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(record)); 
  