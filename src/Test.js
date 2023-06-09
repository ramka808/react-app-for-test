import React, { useRef, useState } from 'react'
import axios from 'axios'

function CreateDocButton() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [nameDoc, setNameDoc] = useState('')
	const [path, setPath] = useState('')

	const sendReq = async (name1, email1, nameDoc1, path1) => {
		let res1
		await fetch('http://localhost:3201/api/formdata', {
			// await fetch('http://localhost:3200/api/getData', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				name: name1,
				email: email1,
				nameDoc: nameDoc1,
				path: path1
			})
		})
			.then((response) => response.json())
			.then((response) => {
				res1 = response
			})
	}

	return (
		<div>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='name'
			/>
			<br></br>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='email'
			/>
			<br></br>
			<input
				value={nameDoc}
				onChange={(e) => setNameDoc(e.target.value)}
				placeholder='name doc'
			/>

			<br></br>
			<input
				value={path}
				onChange={(e) => setPath(e.target.value)}
				placeholder='path'
			/>
			<button
				style={{ cursor: 'pointer' }}
				onClick={() => sendReq(name, email, nameDoc, path)}
			>
				Отправить на сервер
			</button>
		</div>
	)
}

export default CreateDocButton
