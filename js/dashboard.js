/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()

function validform() {

  var a = document.forms["my-form"]["full-name"].value;
  var b = document.forms["my-form"]["email-address"].value;
  var c = document.forms["my-form"]["username"].value;
  var d = document.forms["my-form"]["permanent-address"].value;
  var e = document.forms["my-form"]["nid-number"].value;

  if (a==null || a=="")
  {
      alert("Please Enter Your Full Name");
      return false;
  }else if (b==null || b=="")
  {
      alert("Please Enter Your Email Address");
      return false;
  }else if (c==null || c=="")
  {
      alert("Please Enter Your Username");
      return false;
  }else if (d==null || d=="")
  {
      alert("Please Enter Your Permanent Address");
      return false;
  }else if (e==null || e=="")
  {
      alert("Please Enter Your NID Number");
      return false;
  }

}
