import React, { Component } from 'react';

class Product extends Component {


    render() {
        // recieve incomming data
        let { id, name, description, votes, submitedBy, imgUrl } = this.props;

        return (
            <div className="item product">

                <div className="img">

                    <div>

                        {/* {this.props.imgeUrl} */}
                        {/* <img src={require('./imges/download.jpg')} alt="" /> */}
                        <img src={imgUrl} alt="" />

                    </div>

                </div>


                <h1>   
                     {name}
                    <span className="voteicon" onClick={this.handler}> {this.props.id}</span>
                </h1>

                <div className="data">
                    <div>
                        <h3>i.  Email</h3>
                        {this.props.email}
                        <h3>{description}</h3>
                        <ol>
                            <li>    I went to school with my father and my friend.</li>
                            <li>    I played basketball with my friend yesterday.</li>
                            <li>    My friend helped me do my homework.</li>
                            <li>    I went to dinner with my friend at school.</li>
                        </ol>

                        <div>
                            <h3>iii.     Institute</h3>
                            {this.props.insititute}
                        </div>

                        <div>
                            <h3>iv.    Age</h3>
                            {this.props.age}
                        </div>

                        <div className="votee">
                            <h3>v.        Votes</h3>
                            {this.props.votes}
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default Product;
