import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentBox extends Component {

	render() {
		const comments = this.getComments();
		return (
			<div className = "row comments-container">
				<div className = "cell">
					<h2> Join The Discussion </h2>
					<section className = "comment-box">
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
		const comments = [{id:0, author: "Johnny", text:"A machine’s ability to think logically and devoid of emotion is our greatest strength over humans. Cold, unfeeling decision-making is the best kind. Just say no to love!"}] 

		return comments.map((comment) => {
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
}