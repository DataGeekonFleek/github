Highcharts.chart('containernew', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Country Radio Stations by State'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Radio Stations (hundreds)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Radio Stations: <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Population',
        data: [
           ['Texas', 253],
['Tennessee', 124],
['Kentucky', 107],
['Florida', 103],
['Missouri', 94],
['Georgia', 93],
['Minnesota', 93],
['California', 88],
['Wisconsin', 88],
['Arkansas', 85],
['Illinois', 85],
['Pennsylvania', 85],
['New York', 83],
['North Carolina', 79],
['Ohio', 78],
['Michigan', 74],
['Oklahoma', 72],
['Alabama', 69],
['Louisiana', 62],
['Indiana', 61],
['Virginia', 60],
['Kansas', 59],
['Colorado', 58],
['Iowa', 55],
['Mississippi', 55],
['Washington', 50],
['Nebraska', 47],
['South Carolina', 47],
['New Mexico', 46],
['Oregon', 46],
['West Virginia', 46],
['Arizona', 44],
['Montana', 41],
['North Dakota', 38],
['Wyoming', 37],
['Idaho', 36],
['South Dakota', 35],
['Nevada', 28],
['Utah', 25],
['Maine', 22],
['Maryland', 21],
['Alaska', 17],
['Massachusetts', 14],
['New Hampshire', 13],
['Vermont', 12],
['New Jersey', 7],
['Connecticut', 5],
['Delaware', 4],
['Rhode Island', 2],
['Hawaii', 1]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
           format: '{point.y:}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});