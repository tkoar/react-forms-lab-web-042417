import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: true
    }
  }

  savePoem(event) {
    let poem = event.target.value
    this.setState({
      poem: poem,
      isValid: this.isValidPoem(poem)
    })
  }

  isValidPoem(poem) {
    if (poem) {
      var lineArr = poem.split("\n").filter(line => line)
      var lineWords = lineArr.map(line => {
        return line.split(" ").filter(word => word)
      })
      let line1 = lineWords[0].length
      let line2 = lineWords[1].length
      let line3 = lineWords[2].length
      if (line1 === 5 && line2 === 3 && line3 === 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.savePoem.bind(this)}
        />
        { !this.state.isValid &&
          <div id="poem-validation-error"
            style={{color: 'red'}}>
            This poem is not written in the right structure!
          </div>
        }

        </div>
    )
  }
}

export default PoemWriter;
