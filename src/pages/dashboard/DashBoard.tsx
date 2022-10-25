import React, {useEffect} from 'react';
import {StatusCnt, StatusItem, Icon, Count, Category, ChartCnt} from './style';
import {Line, Pie} from 'react-chartjs-2';
import {ChartData} from 'chart.js';
import {
  ArcElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {pieOptions, lineOptions} from '@/pages/dashboard/chart/ChartOption';
import ChartDataService from '@/pages/dashboard/chart/ChartData';

Chart.register(
    Title,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

function DashBoard() {

  const statusList: Array<{icon: string; count: number; category: string;}> = [
    {icon: 'icon-users', count: 2100, category: '전체 회원'},
    {icon: 'icon-user-plus', count: 15, category: '금일 신규회원'},
    {icon: 'icon-user-minus', count: 0, category: '금일 탈퇴회원'},
    {icon: 'icon-user', count: 1200, category: 'MAU'},
    {icon: 'icon-user', count: 600, category: 'DAU'}
  ];

  const chartData: ChartDataService = new ChartDataService();

  useEffect(() => {
    /* axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
          console.log(res);
          // chartData.pieData / chartData.lineData 에 데이터 삽입
        })
        .catch(err =>{
          console.log(err);
        }) */
  });

  const pieData: ChartData<any> = chartData.getData('pie');
  const lineData: ChartData<any> = chartData.getData('line');

  return (
      <div className="main">

        <StatusCnt>
          {
            statusList.map((item, idx) => {
              return (
                  <StatusItem key={idx}>
                    <span css={Icon} className={item.icon}></span>
                    <p css={Count}>{item.count}</p>
                    <p css={Category}>{item.category}</p>
                  </StatusItem>
              )
            })
          }
        </StatusCnt>

        <ChartCnt>
          <div style={{width: '489.5px', backgroundColor: 'white'}}>
            <Pie data={pieData} options={pieOptions} />
          </div>

          <div style={{width: '777px', backgroundColor: 'white'}}>
            <Line data={lineData} options={lineOptions} />
          </div>
        </ChartCnt>

      </div>
  );
}

export default DashBoard;
