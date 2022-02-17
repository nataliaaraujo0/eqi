import Chart from 'react-apexcharts';

import { Container } from './styled';

const options = {};
const series = [
    {
        name: 'graficoValores',
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    },
];
export function Graficos() {
    return (
        <Container>
            <Chart type="bar" height={300} options={options} series={series} />
        </Container>
    );
}
