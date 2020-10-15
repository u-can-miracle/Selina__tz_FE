import * as React from 'react'
import classnames from 'classnames'

interface IProps {
	hoverDelay?: number
	className?: string
	keyProp?: string
	children: JSX.Element | string,
	menuComponent: JSX.Element | string,
	isDebugging?: boolean
	shouldCallOnLeave?: boolean
	onEnter?: () => void
	onLeave?: () => void
}

function Hoverable({
	hoverDelay = 300,
	children,
	menuComponent,
	className,
	keyProp,
	isDebugging = false, // for debugging: disable hiding menus
	onEnter,
	onLeave,
	shouldCallOnLeave = true
}: IProps) {
	const [timer, setTimer] = React.useState<number>(0)
	const [isVisible, setVisisble] = React.useState(false)

	function waitToShowChildComp(){
		const timerId = window.setTimeout(() => {
			setVisisble(true)

			if (onEnter) {
				onEnter()
			}
		}, hoverDelay)

		setTimer(timerId)
	}

	function clearTimer() {
		clearTimeout(timer)
		if (!isDebugging && isVisible) {
			setVisisble(false)
		}

		if (!isDebugging && shouldCallOnLeave && onLeave) {
			onLeave()
		}
	}

	const classes = classnames('hoverable', className, {
		'hoverable--active': isVisible,
	})

	return (
		<li
			key={keyProp}
			className={classes}
			onMouseEnter={waitToShowChildComp}
			onMouseLeave={clearTimer}
		>
			{children}
			{isVisible && menuComponent}
		</li>
	)
}

export default Hoverable
