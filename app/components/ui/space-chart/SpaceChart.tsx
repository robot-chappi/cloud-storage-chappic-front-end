import { FC } from 'react'
import dynamic from 'next/dynamic'
import './SpaceChart.module.scss'
import {
	EnumFormatFileSize,
	formatFileSizeChartMB,
	formatFileSizeManual,
} from '@/app/utils/string/formatFileSize'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
})

interface ISpaceChart {
	diskSpace: number
	usedSpace: number
}

const SpaceChart: FC<ISpaceChart> = ({ diskSpace, usedSpace }) => {
	const freeSpace = diskSpace - usedSpace

	const OptionsChartLine = {
		chart: {
			width: 380,
			type: 'donut',
			foreColor: '#FFFFFF',
		},
		labels: [
			`Free Space ${formatFileSizeManual({
				size: freeSpace,
				type: EnumFormatFileSize.MEGABYTE,
			})}`,
			`Used Space ${formatFileSizeManual({
				size: usedSpace,
				type: EnumFormatFileSize.MEGABYTE,
			})}`,
		],
		tooltip: {
			x: false,
		},
		title: {
			text: 'Usage disk space',
		},
		colors: ['#9334EA', '#6C5ECF', '#9C27B0'],
		stroke: {
			width: 0,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		legend: {
			position: 'right',
			offsetY: 0,
			height: 230,
		},
	}

	return (
		<Chart
			//@ts-ignore
			options={OptionsChartLine}
			series={[
				formatFileSizeChartMB(freeSpace),
				formatFileSizeChartMB(usedSpace),
			]}
			type={'donut'}
			width={400}
		/>
	)
}

export default SpaceChart
