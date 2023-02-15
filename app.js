var ctx = document.getElementById('skills-chart').getContext('2d');
		var skillsChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ['JavaScript', 'HTML/CSS', 'Python', 'Java', 'C++'],
				datasets: [{
					data: [25, 20, 15, 10, 5],
					backgroundColor: [
						'rgba(255, 99, 132, 0.8)',
						'rgba(54, 162, 235, 0.8)',
						'rgba(255, 206, 86, 0.8)',
						'rgba(75, 192, 192, 0.8)',
						'rgba(153, 102, 255, 0.8)'
					]
				}]
			},
			options: {
				title: {
					display: true,
					text: 'My Skills'
				}
			}
		});
    