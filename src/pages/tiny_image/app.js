
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDragLeave = this.handleDragLeave.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.state = {
      style: 'select',
      files: []
    }
  }

  handleDragOver(e) {
    e.preventDefault()
    this.setState({
      style: 'select active'
    })
  }

  handleDragLeave(e) {
    this.setState({
      style: 'select'
    })
  }

  handleDrop(e) {
    e.preventDefault()
    this.setState({
      style: 'select',
    })

    let files = e.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
      this.handleUpload(files[i], i)
    }
  }

  handleUpload(file, i) {
    if (file.type.indexOf('image') !== 0) {
      alert(file.name + '不是一张图片')
    } else {
      let url = 'http://127.0.0.1:9001/tiny_image/upload'
      let data = new FormData()
      data.append('file', file)
      let options = {
        method: 'POST',
        body: data
      }
      _fetch(url, options, (e) => {
        let progress = (e.loaded / e.total * 100).toFixed(2)
        let files = this.state.files
        files[i] = {
          name: file.name,
          size: file.size,
          progress: progress,
          newSize: '',
          cutdown: 0,
          url: ''
        }
        this.setState({
          files: files
        })
      }).then((res) => {
        console.log(JSON.parse(res))
        let result = JSON.parse(res)
        let files = this.state.files
        let cutdown = (((file.size - result.size) / file.size) * 100).toFixed(2) + '%'
        files[i].newSize = result.size
        files[i].cutdown = cutdown
        files[i].url = result.url
        this.setState({
          files: files
        })
      })
    }
  }

  render() {
    console.log(this.state.files)
    let progressList = this.state.files.map((item, index) => {
      let url = 'http://127.0.0.1:9001/' + item.url
      return (
        <li key={index}>
          <span>{item.name} </span>
          <span>{item.size} </span>
          <progress value={item.progress} max='100'></progress>
          <span>{item.newSize} </span>
          <a href={url} download>download</a>
          <span>-{item.cutdown} </span>
        </li>
      )
    })
    return (
      <div className='container'>
        <div className={this.state.style} 
          onDragOver={this.handleDragOver} 
          onDragLeave={this.handleDragLeave}
          onDrop={this.handleDrop}>
          <p>Drop your .png or .jpg files here!</p>
        </div>
        <ul>
          {progressList}
        </ul>
      </div> 
    ) 
  }
}

function _fetch(url, opts={}, onProgress) {
  return new Promise( (res, rej)=>{
      var xhr = new XMLHttpRequest();
      xhr.open(opts.method || 'get', url);
      for (var k in opts.headers||{})
          xhr.setRequestHeader(k, opts.headers[k]);
      xhr.onload = e => res(e.target.responseText);
      xhr.onerror = rej;
      if (xhr.upload && onProgress)
          xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
      xhr.send(opts.body);
  });
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)