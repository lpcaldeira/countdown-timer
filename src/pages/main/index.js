import React, { Component } from 'react'
import moment from 'moment'
import SVGCircle from '../../components/SVGCircle'
import './styles.css'

export default class Main extends Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			const { timeTillDate, timeFormat } = this.props

			// Usando os valores abaixo, pega os valores certos mas quebra o layout
			// const then = moment(timeTillDate, timeFormat);
			// const now = moment();
			// const days = then.diff(now, 'days');
			// const hours = then.diff(now, 'hours');
			// const minutes = then.diff(now, 'minutes');
			// const seconds = then.diff(now, 'seconds');

			const then = moment(timeTillDate, timeFormat)
			const now = moment()
			const countdown = moment(then - now)
			const days = countdown.format('D')
			const hours = countdown.format('HH')
			const minutes = countdown.format('mm')
			const seconds = countdown.format('ss')

			this.setState({ days, hours, minutes, seconds })
		}, 1000)
	}

	componentWillUnmount() {
		if (this.interval) clearInterval(this.interval)
	}

	render() {
		const { days, hours, minutes, seconds } = this.state
		const daysRadius = this.mapNumber(days, 30, 0, 0, 360)
		const hoursRadius = this.mapNumber(hours, 24, 0, 0, 360)
		const minutesRadius = this.mapNumber(minutes, 60, 0, 0, 360)
		const secondsRadius = this.mapNumber(seconds, 60, 0, 0, 360)

        // Se já acabou o tempo, não atualiza mais a tela
        if (!seconds) return null

		return (
			<div>
				<h1>Tempo até o último dia do mês</h1>
				<div className='countdown-wrapper'>
					{days && (
						<div className='countdown-item'>
							<SVGCircle radius={daysRadius} />
							{days}
							<span>dias</span>
						</div>
					)}
					{hours && (
						<div className='countdown-item'>
							<SVGCircle radius={hoursRadius} />
							{hours}
							<span>horas</span>
						</div>
					)}
					{minutes && (
						<div className='countdown-item'>
							<SVGCircle radius={minutesRadius} />
							{minutes}
							<span>minutos</span>
						</div>
					)}
					{seconds && (
						<div className='countdown-item'>
							<SVGCircle radius={secondsRadius} />
							{seconds}
							<span>segundos</span>
						</div>
					)}
				</div>
			</div>
		)
	}

	// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
	mapNumber = (number, in_min, in_max, out_min, out_max) => {
		return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
	}
}
