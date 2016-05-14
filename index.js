import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import './style.css'
import CommentBox from './components/CommentBox'

render(
	<CommentBox />,
	document.getElementById('comment-box')
	)