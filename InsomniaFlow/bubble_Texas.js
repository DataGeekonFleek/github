Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    title: {
        text: 'Median Income and Population by State'
    },

    xAxis: {
        gridLineWidth: 1
        
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {enabled: true, text: "Income by State, $ "}
    },
    
    tooltip:{
    headerFormat: '<b></b><br>',
                     pointFormat: '${point.y}'
                  },

    series: [{
        name: 'US',
        data: [
            [4779736, 20693, 5],
[710231, 16794, 5],
[6392017,21901, 5],
[2915918, 20099, 5],
[37253956, 27459, 5],
[5029196, 24819, 5],
[3574097, 31582, 5],
[897934, 27016, 5],
[601723,24762, 5],
[18801310, 21784, 5],
[9687653, 21749, 5],
[1360301, 29669, 5],
[1567582,22154, 5],
[12830632, 27427, 5],
[6483802, 24986, 5],
[3046355,25893, 5],
[2853118, 24827, 5],
[4339367, 20958, 5],
[4533372,21121, 5],
[1328361, 22184, 5],
[5773552, 28638, 5],
[6547629, 30845, 5],
[9883640,24674, 5],
[5303925, 28968, 5],
[2967297, 18402, 5],
[5988927, 23591, 5],
[989415, 22130, 5],
[1826341, 25185, 5],
[2700551,24867, 5],
[1316470, 26271, 5],
[8791894, 32278, 5],
[2059179, 20336, 5],
[19378102,29747, 5],
[9535483, 21752, 5],
[672591, 24895, 5],
[11536504,24846, 5],
[3751351, 21759, 5],
[3831074, 24582, 5],
[12702379,25184, 5],
[1052567, 27019, 5],
[4625364,20687, 5],
[814180, 23758, 5],
[6346105, 21153, 5],
[2763885, 24976, 5],
[625741,23514, 5],
[8001024, 23865, 5],
[6724540, 27280, 5],
[1852994,20071, 5],
[5686986,26954, 5],
[563626, 25498, 5]
        ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }, {
        name: 'Texas',
        data: [
            [25145561,23543, 500]
              ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(2.2).get('rgba')]
                ]
            }
        }
    }]

});