import {ChartData} from 'chart.js';

export default class ChartDataService {
  private pieLabels: string[] = ['서울', '부산', '대구', '인천', '광주', '대전'];
  private pieData: number[] = [12, 19, 3, 5, 2, 3];
  private pieDatasets: ChartData<'pie'> = {
    labels: this.pieLabels,
    datasets: [
      {
        label: '지역별',
        data: this.pieData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  private lineLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  private lineData: number[] = [30, 10, 20, 70, 50, 60, 40];
  private lineDatasets: ChartData<'line'> = {
    labels: this.lineLabels,
    datasets: [
      {
        label: '접속자',
        data: this.lineData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4 // 곡률 (0 ~ 1),
      },
    ],
  };

  public getData(type: string): ChartData {
    if (type === 'pie') {
      return this.pieDatasets;
    } else {
      return this.lineDatasets;
    }
  }

}
