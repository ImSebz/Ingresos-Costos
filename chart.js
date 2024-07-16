const ctx = document.getElementById('myChart').getContext('2d');

const months = ['Sep-Oct 2023', 'Nov-Dec 2023', 'Ene 2024', 'Feb 2024', 'Mar-Abr 2024', 'May-Jun 2024', 'Jul 2024'];
const revenues = [21700000, 8850000, 20350000, 21500000, 18900000, 31800000, 17400000];
const monthlyCost = 3957400;
const costs = [monthlyCost * 2, monthlyCost * 2, monthlyCost, monthlyCost, monthlyCost * 2, monthlyCost * 2, monthlyCost];

const data = {
    labels: months,
    datasets: [
        {
            label: 'Ingresos',
            data: revenues,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Costos',
            data: costs,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString();
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.raw.toLocaleString();
                    }
                }
            }
        }
    }
};

const myChart = new Chart(ctx, config);