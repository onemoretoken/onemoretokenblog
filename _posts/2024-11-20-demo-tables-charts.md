---
layout: post
title: "Data Visualization Demo"
date: 2024-11-20 10:00:00 -0500
categories: demo
description: "Showcasing tables and charts in Jekyll"
---

## Performance Metrics Table

Here's a beautifully styled table showing some sample performance data:

| Metric | Q1 2024 | Q2 2024 | Q3 2024 | Q4 2024 | Trend |
|--------|---------|---------|---------|---------|-------|
| **Response Time** | 125ms | 118ms | 105ms | 98ms | ↓ 📈 |
| **Uptime** | 99.5% | 99.7% | 99.9% | 99.95% | ↑ 🚀 |
| **API Calls** | 1.2M | 1.5M | 2.1M | 2.8M | ↑ 📊 |
| **Error Rate** | 0.5% | 0.3% | 0.2% | 0.1% | ↓ ✅ |
| **Users** | 10,234 | 15,678 | 22,456 | 31,892 | ↑ 👥 |

---

## Token Distribution Chart

<div style="max-width: 800px; margin: 40px auto;">
  <canvas id="tokenChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('tokenChart').getContext('2d');
  const tokenChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['GPT-4', 'Claude 3', 'Gemini', 'LLaMA 2', 'Mixtral', 'Falcon'],
      datasets: [{
        label: 'Token Usage (Millions)',
        data: [450, 380, 290, 210, 165, 140],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Token Usage by Model',
          font: {
            size: 18
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Tokens (Millions)'
          }
        }
      }
    }
  });
</script>

---

## Cost Analysis Table

| Model | Cost per 1M Tokens | Monthly Usage | Monthly Cost | Cost Efficiency |
|:------|-------------------:|--------------:|-------------:|:---------------:|
| **GPT-4** | $30.00 | 450M | $13,500 | ⭐⭐ |
| **Claude 3** | $15.00 | 380M | $5,700 | ⭐⭐⭐⭐ |
| **Gemini** | $12.50 | 290M | $3,625 | ⭐⭐⭐⭐ |
| **LLaMA 2** | $8.00 | 210M | $1,680 | ⭐⭐⭐⭐⭐ |
| **Mixtral** | $6.00 | 165M | $990 | ⭐⭐⭐⭐⭐ |
| **Falcon** | $5.00 | 140M | $700 | ⭐⭐⭐⭐⭐ |

---

## Line Chart: Growth Over Time

<div style="max-width: 800px; margin: 40px auto;">
  <canvas id="growthChart"></canvas>
</div>

<script>
  const ctx2 = document.getElementById('growthChart').getContext('2d');
  const growthChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Active Users',
        data: [1200, 1900, 3000, 5000, 6900, 9200, 12000, 15500, 19000, 23000, 28000, 35000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4
      },
      {
        label: 'API Requests (thousands)',
        data: [50, 75, 110, 165, 240, 340, 450, 580, 720, 890, 1100, 1400],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Platform Growth Metrics 2024',
          font: {
            size: 18
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

---

## Feature Comparison Matrix

| Feature | Free Tier | Pro Tier | Enterprise |
|:--------|:---------:|:--------:|:----------:|
| **API Calls/Month** | 1,000 | 100,000 | Unlimited |
| **Response Time** | Standard | Priority | Dedicated |
| **Support** | Community | Email | 24/7 Phone |
| **Custom Models** | ❌ | ✅ | ✅ |
| **Analytics** | Basic | Advanced | Custom |
| **SLA** | None | 99.9% | 99.99% |
| **Price/Month** | $0 | $99 | Custom |

---

## Pie Chart: Resource Allocation

<div style="max-width: 600px; margin: 40px auto;">
  <canvas id="pieChart"></canvas>
</div>

<script>
  const ctx3 = document.getElementById('pieChart').getContext('2d');
  const pieChart = new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['Infrastructure', 'Development', 'Marketing', 'Support', 'Research'],
      datasets: [{
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Budget Allocation 2024 (%)',
          font: {
            size: 18
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              label += context.parsed + '%';
              return label;
            }
          }
        }
      }
    }
  });
</script>

---

*This demo showcases various ways to present data in Jekyll using Markdown tables and Chart.js for interactive visualizations. The tables use standard Markdown syntax which gets styled by the jekyll-klise theme, while the charts use Chart.js library for dynamic, interactive data visualization.*