/*-----------------------------------------------------------------------------------
/* Customize JS
-----------------------------------------------------------------------------------*/

$(document).ready(function() {






    //直式長條圖
    var randomScalingFactor = function() {
        return (Math.random() > 0 ? 1.0 : -1.0) * Math.round(Math.random() * 250);
    };


    var barChartData = {
        type: 'bar',
        data: {
            labels: ["January"],
            datasets: [{
                label: '平均成交數',
                backgroundColor: "rgba(26,208,255,0.5)",
                borderWidth: 0,
                data: [randomScalingFactor()]
            }, {
                label: '我的成交數',
                backgroundColor: "rgba(210,156,234,0.5)",
                borderWidth: 0,
                data: [randomScalingFactor()]
            }, {
                label: '我的成交數',
                backgroundColor: "rgba(31,31,72,0.5)",
                borderWidth: 0,
                data: [randomScalingFactor()]
            }]
        },
        options: {
            responsive: true,
            hoverMode: 'label',
            hoverAnimationDuration: 400,
            stacked: false,
            tooltips: { //標籤設定
                backgroundColor: 'rgba(37,39,76,0.8)',
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 10,
                    fontSize: 12,
                    borderWidth: 0
                }
            },
            scales: {
                xAxes: [{
                  tickThickness: 0,
                  gridLines: { //網格線設定
                      zeroLineColor: 'rgba(37,39,76,0.1)'
                  }

                }],
                yAxes: [{
                    gridLines: { //網格線設定
                        zeroLineColor: 'rgba(37,39,76,0.1)'
                    }
                }]
            }
        }
    };
    //直式長條圖結束


    //起伏圖
    var lineChartData = {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "平均成交數",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                fill: false,
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointHoverBackgroundColor: "rgba(255,255,255,1)",
                pointHoverBorderWidth: 4,
                borderWidth: 2,
                borderDash: [3, 3],
                borderColor: "rgba(31,31,72,1)",
                lineTension: 0
            }, {
                label: "目標成交數",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                backgroundColor: 'rgba(26,208,255,0.2)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                borderWidth: 1,
                borderColor: 'rgba(26,208,255,1)',
                lineTension: 0.3
            }, {
                label: "我的成交數",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                backgroundColor: 'rgba(210,156,234,0.1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                borderWidth: 1,
                borderColor: 'rgba(210,156,234,1)',
                lineTension: 0.3
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                backgroundColor: 'rgba(37,39,76,0.8)',
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 11,
                    fontSize: 12
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,

                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 250,
                    }
                }]
            }
        }
    };
    //起伏圖結束


    //起伏圖2
    var lineSecondData = {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "平均成交數",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                fill: false,
                backgroundColor: 'rgba(255,255,255,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                borderWidth: 1,
                borderColor: 'rgba(159,108,204,0.5)',
                lineTension: 0
            }, {
                label: "平均成交數",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                fill: false,
                backgroundColor: 'rgba(255,255,255,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                borderWidth: 1,
                borderColor: 'rgba(26,209,255,0.5)',
                lineTension: 0
            }, {
                label: "平均成交數",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                fill: false,
                backgroundColor: 'rgba(255,255,255,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                borderWidth: 1,
                borderColor: 'rgba(48,43,75,0.5)',
                lineTension: 0
            }]

        },
        options: {
            responsive: true,
            tooltips: {
                backgroundColor: 'rgba(37,39,76,0.8)',
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 11,
                    fontSize: 12
                }
            },
            hoverMode: 'label',
            stacked: false,
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        offsetGridLines: false
                    }
                }],
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                }],
            }
        }
    };
    //起伏圖2結束



    //圓餅圖
    var pieChartData = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    "rgba(242,244,248,1)",
                    "rgba(26,209,255,0.5)",
                    "rgba(159,108,204,0.5)",
                ],
                borderWidth: [
                    0,
                    0,
                    0

                ]
            }],
            labels: [
                "0~10萬",
                "10萬~30萬",
                "30萬以上",
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                backgroundColor: 'rgba(37,39,76,0.8)',
            },
            legend: { //修改lable
                display: false,
                position: 'right', //lable位置
                labels: { //lable屬性
                    usePointStyle: true, //是否要修改 point的style
                    pointStyle: 'circle', //point style為圓形
                    boxWidth: 12, //點與字的容器寬度
                    padding: 20 //項目與項目間距
                }
            }
        }
    };
    //圓餅圖結束


    window.onload = function() {
        var barCtx = document.getElementById("bar-canvas").getContext("2d");
        window.myBar = new Chart(barCtx, barChartData);

        var lineCtx = document.getElementById("line-canvas").getContext("2d");
        window.myLine = new Chart(lineCtx, lineChartData);

        var lineSCtx = document.getElementById("line-s-canvas").getContext("2d");
        window.myLine = new Chart(lineSCtx, lineSecondData);

        var pieCtx = document.getElementById("pie-canvas").getContext("2d");
        window.myPie = new Chart(pieCtx, pieChartData);


    };


    if (screen.width > 960) {
        document.getElementById("bar-canvas").height = 271;
        document.getElementById("line-canvas").height = 130;
        document.getElementById("pie-canvas").height = 271;
        document.getElementById("line-s-canvas").height = 130;
    } else {
        alert('More than 960');
    }

    $('.client-data h1').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });







});
