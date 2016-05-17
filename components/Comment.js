import React, { Component } from 'react'

export default class Comment extends Component {
	constructor() {
		super()
		this.state = { isAbusive: false }
	}

	render() {
		let commentText = this.state.isAbusive ? <em> Content marked as abusive </em> : this.props.text
		let reportLabel = this.state.isAbusive ? 'Withdral Report' : 'Report as Abuse'
		
		return (
			<article className = 'comment'>
				<p className = 'comment-header'> {this.props.author} </p>
				<p className = 'comment-body'> { commentText } </p>
				<div className = "comment-actions">
					<a href = '#' onClick = { this.handleDelete.bind(this) }> Delete Comment</a>
					<a href = '#' onClick = { this.toggleAbuse.bind(this) }> { reportLabel }</a>
				</div>
			</article>
			)
	}

	handleDelete(event) {
		event.preventDefault()
		this.props.onDelete(this.props.id);
	}

	toggleAbuse(event) {
		event.preventDefault()
		this.setState({ isAbusive: !(this.state.isAbusive) })
	}
}