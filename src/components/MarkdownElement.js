import React from 'react';
import marked from 'marked';
import Parser from 'html-react-parser';

export default class MarkdownElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onClickClear = this.onClickClear.bind(this);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  onHandleChange = (e) => {
    const markdown = e.target.value;
 
    this.setState(() => {
      return {
        markdown
      }
    })
  };

  onClickClear = () => {
    this.setState(() => {
      return {
        markdown: ""
      }
    })
  };

  

  render() {
    
    return (   
      <div className="container-fluid mt-5">
        <div className="content row d-flex justify-content-center align-items-center">
          <div className="col-md-5 col-10 mr-0 ml-1 px-0">
            <textarea className="form-control" onChange={this.onHandleChange} value={this.state.markdown}></textarea>
          </div>
          <div className="content col-md-1 col-10 mx-4 px-1 d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-secondary my-5" onClick={this.onClickClear}>Clear Input</button>
          </div>
         {/*           
            <div className="col-4 mx-0 px-0 form-control">
            {this.state.markdown != "" && Parser(marked(this.state.markdown))}
          </div>
        */}
          <div className="content content-bottom col-md-5 col-10 mr-1 px-0">
            <div className="form-control output"> 
                {this.state.markdown != "" && Parser(marked(this.state.markdown))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

