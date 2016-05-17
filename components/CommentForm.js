import React, { Component } from 'react'

export default class CommentForm extends Component {
	constructor() {
		super();
		this.state = {
			characters : 0
		}
	}

	render() {
		return(
			<form className = "comment-form" onSubmit = { this.handleSubmit.bind(this) }>
				<label>New comment</label>
				<div className ="comment-form-fields">
					<input placeholder = "Name:" ref = {(input) => this.author = input} />
					<textarea placeholder="Comment:" ref = {(input) => this.text = input } onChange = { this.getCharacters.bind(this) }/> 
				</div>
				<p> { this.state.characters } characters </p>
				<div className = "comment-form-actions">
					<button type ='submit'>
						Post Comment
					</button>
				</div>
			</form>
			)
	}

	getCharacters() {
		this.setState({
			characters: this.text.value.length
		})
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.addComment(this.author.value, this.text.value);

		this.author.value = ''
		this.text.value = ''

		this.setState({ 
			characters: 0
		})
	}
}