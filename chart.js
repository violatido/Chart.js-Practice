// the answers to the question (passed to line 15)
let labels1 = ['YES', 'Yes, but in green'];
// the values of the answers (passed to line 17)
let data1 = [69, 31];
// data representation colors (passed to line 18)
let colors1 = ['#49A9EA', '#36CAAB'];

// myChart1 = the query in 2D context
let myChart1 = document.getElementById("myChart").getContext('2d');

// renders the chart
let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1, 
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }] 
    },
    options: {
        // title = the question we are asking
        title: {
            text: "Do you like to practice?",
            display: true
        }
    }
});