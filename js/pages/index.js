$(function () {
    //Widgets count
    $('.count-to').countTo();

    //Sales count to
    $('.sales-count-to').countTo({
        formatter: function (value, options) {
            return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
        }
    });

    initDonutChart();
    initSparkline();
});


function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',
        data: [{
            label: 'Female',
            value: 295
        },
        {
            
            label: 'Male',
            value: 328
        }],
        colors: ['rgb(233, 0, 0)', 'rgb(0, 0, 233)'],
        formatter: function (y) {
            return y
        }
    });
}