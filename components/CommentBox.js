import React, { Component } from 'react'

import Comment from './Comment'
import CommentForm from './CommentForm'

export default class CommentBox extends Component {
	constructor() {
		super()
		this.state = {comments: []}
	}

	componentWillMount() {
		this.fetchComments();
	}

	render() {
		const comments = this.getComments();
		return (
			<div className = "row comments-container">
				<div className = "cell">
					<h2> Join The Discussion </h2>
					<section className = "comment-box">
						<CommentForm addComment = { this.addComment.bind(this) } />
						<h3 className = "comment-count">{ this.getCommentsTitle(comments.length) }</h3>
						<section className = "comment-list">
					 		{ comments }
					 	</section>
					</section>
				</div>
			</div>
			)
	}

	getComments() {
		return this.state.comments.map((comment) => {
			return <Comment author = {comment.author} text ={comment.text} key = {comment.id} />
		})
	}

	getCommentsTitle(comments) {
		if (comments === 0 || comments === undefined) {
			return ('There is no comment why don\'t you write one?')
		} else if (comments === 1) {
			return ('1 comment')
		} else if (comments > 1) {
			return (`${comments} comments`)
		}
	}

	addComment(author, text) {
		const comment = {
			id: this.state.comments.length,
			author: author,
			text, text
		}

		this.setState({ comments: this.state.comments.concat([comment])})
	}

	fetchComments() {
		$.ajax({
			method: 'GET',
			url: '/api/comments',
			dataType: 'json',
			success: (comments) => {
				this.setState({
					comments
				})
			},
			error: (xhr, status, err) => {
				console.error('/api/comments', status, err.toString());
			}
		})
	}
}