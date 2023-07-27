import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const [value, setValue] = useState('');

	const onChangeHandler = (event) => {
		const inputValue = event.target.value;
		setValue(inputValue);
	};

	console.log(value);

	return (
		<div>
			<input type="text" onChange={onChangeHandler} value={value} />
		</div>
	);
};

export default App;

/*
function User({ children }) {
	return <div>{children}</div>;
}

function App() {
	return <User>안녕하세요</User>;
}
export default App;
*/

/*
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
*/

/*
function Child({ name, setName }) {
	return (
		<div>
			<button onClick={() => setName('밀란')}>이름 바꾸기</button>
			<div>내 이름은 {name}이에요.</div>
		</div>
	);
}

function Mother({ name, setName }) {
	return (
		<div>
			<Child name={name} setName={setName} />
		</div>
	);
}

function GrandFather() {
	const [name, setName] = useState('미란');

	return (
		<div>
			<Mother name={name} setName={setName} />
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<GrandFather />
		</div>
	);
}


// Child.defaultProps = {
// 	name: '밀란',
// };


export default App;
*/

/*
import React from 'react';
function App() {
	//자바스크립트 영역
	const handleClick = () => {
		alert('클릭!');
	};

	return (
		//HTML/JSX 영역
		<div
			style={{
				height: '100vh',
				display: ' flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<span>이것은 내가 만든 App 컴포넌트입니다.</span>
			<button onClick={handleClick}>클릭!</button>
		</div>
	);
}

export default App;
*/

/* 다른 컴포넌트를 품는 컴포넌트를 부모 컴포넌트라고 부르고, 다른 컴포넌트 안에서 품어지는 컴포넌트를 자식 컴포넌트라고 부른다.
// src/App.js
import React from "react";

function Child() {
  return <div>나는 자식입니다.</div>;
}

function App() {
  return <Child />;
}

export default App;
*/

/*
<p style={{color: 'orange', fontSize: '20px'}}>orange</p>

//혹은 스타일 딕셔너리를 변수로 만들고 쓸 수 있어요!
function App() {
  const styles = {
    color: 'orange',
    fontSize: '20px'
  };

  return (
    <div className="App">
      <p style={styles}>orange</p>
    </div>
  );
}
*/
