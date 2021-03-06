import React, {
    Component
} from 'react';

class Counter extends Component {

    state = {
        value: this.props.value,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3']
    };
    renderTags () {
        if (this.state.tags.length === 0) return <p>nooo</p>
    }


    handleIncrement = () => {
  
        this.setState ({value: this.state.value + 1})
    };
render() {

        

        return ( 
        <React.Fragment >
        <img src={this.state.imageUrl}/>
    {this.props.children}
            <span className={this.getBadgetClasses()}> {this.formatCount()} </span>

            <button onClick={ this.handleIncrement } className="btn btn-primary btn-sm">increment</button > 
        <ul>
            {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>

        );
    }

    getBadgetClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {
            value
        } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;