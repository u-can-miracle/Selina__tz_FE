import * as React from 'react'
import classnames from 'classnames'

interface IItem {
	id: string
	value: string
}
interface IProps {
	items: IItem[]
	isHoverable?: boolean
	menuComponent?: JSX.Element | string,
	listClass?: string
	itemClass?: string
	childrenRender?: (item: IItem) => void
}

const ItemsList = ({
	items,
	listClass,
	itemClass,
	childrenRender,
}: IProps) => {
	const listClasses = classnames('item-list', listClass)
	const itemClasses = classnames('item-list__item', itemClass)

	return (
		<ul className={listClasses}>
			{!items.length && <li className={itemClasses} key={'loading'}>Loading ...</li>}
			{!!items.length && items.map(item => {
				return childrenRender ? childrenRender(item) : (
					<li
						className={itemClasses}
						key={item.id}
					>
						{item.value}
					</li>
				)}
			)}
		</ul>
	)
}

export default ItemsList
