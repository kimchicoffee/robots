import React, { Component } from 'react'

export default class Comment extends Component {
	render() {
		return (
			<article className = 'comment'>
				<p className = 'comment-header'> {this.props.author} </p>
				<p className = 'comment-body'> {this.props.text} </p>
			</article>
			)
	}
}