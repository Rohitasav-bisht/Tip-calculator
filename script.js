function calculateTip() {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("drp_dwn").value;
    var noOfPeople = document.getElementById("ppl").value;
  
    if (bill === "" || service == 0) {
      alert("Please enter values");
      return;
    }
    if (noOfPeople === "" || noOfPeople <= 1) {
      noOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    var totalTip = (bill * service) / noOfPeople;
    totalTip = totalTip.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = totalTip;
    
    
   
  }
  
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  document.getElementById("btn").onclick = function() {
    calculateTip();
  
  };
  