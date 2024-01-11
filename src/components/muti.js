import React from "react";
import './muti.css';
import { users } from "./textData";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


// ProductList
class User1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.upProductVote = this.upProductVote.bind(this);
        this.downProductVote = this.downProductVote.bind(this);
    }


    componentDidMount() {
        // for(let i = 0; i < users.length; i++)
        // {
        //     users[i].id = i + 1;
        // }

        this.setState({ data: users});
        // this.setState()
    }


    upProductVote(productid) {
        // let res = this.state.data;

        let res = this.state.data.map((obj) => {

            if (obj.id === productid) {

                return Object.assign({}, obj, {
                    votes: (obj.votes || 0) + 1
                });
            }
            else {
                return obj;
            }
            
        });
        
        this.setState({
            data: res,
        });
        console.log('Up vote ' + productid);
    }

         downProductVote(productid) {
            let res1 = this.state.data.map((obj) => {
    
                if (obj.id === productid) {

                   return Object.assign({}, obj,{
                    votes: (obj.votes || 0 ) - 1
                   });

                }
                else {
                    return obj;
                }
                
            });
    
            this.setState({
                data: res1,
            });
    }
    
    // let res = this.state.data;
        
        // console.log(res);
        render() {

            // id property added
            // let res1 = users.map( (obj, index) => {
    
            //     let colon = Object.assign({}, obj)
            //     colon.id = index + 1;
            //     return colon;    
    
            // });
    
            let arrOfObj = this.state.data.map((obj, index) => (
    
                <User2
                    key={index + 'ty65'}
                    id={obj.id} //basically yee prop iss liy beh raha hoon kiu kay ye 
                    name={obj.name}
                    age={obj.age}
                    description = {obj.discription}
                    vote={this.upProductVote}
                    votee={this.downProductVote}
                    votes={obj.votes}
                    imgeUrl={obj.imgUrl}
                    submit = {obj.submitted}
    
                />
            ));
    
            let sortedArr = arrOfObj.sort((elem1, elem2) => {
                if (elem1.props.votes > elem2.props.votes) {
                    return -1;
                }
                if (elem1.props.votes < elem2.props.votes) {
                    return 1;
                }
                return 0;
            })

            return (
                <div className='unstackable'>
                    {sortedArr}
                </div>
    
            )
    }
}
    

class User2 extends React.Component {

    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
        this.handler1 = this.handler1.bind(this);
    }

    handler() {
        this.props.vote(this.props.id);
    }
    handler1()
    {
        this.props.votee(this.props.id);
    }

    render() {

        return (
            
          <div className="main">
              <div className='item'>
                <div className='image'>
                    <img src={this.props.imgeUrl} />
                </div>
                <div className='content'>
                    <div className='header'>
                        <a>
                            <h2 className="client-name">{this.props.name}</h2>

                            <FontAwesomeIcon className="icon" icon={faAngleUp} onClick={this.handler} />
                        
                            <h3>Votes: {this.props.votes}</h3>   

                            <FontAwesomeIcon className="icondown" icon={faAngleDown} onClick={this.handler1}/>
                        </a>
                    </div>
                    <div className='description'>
                        <a href={this.props.name}>
                            {this.props.title}
                        </a>
                        <p className="discrip">
                            <h3>Description:</h3>{this.props.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span><h3>Submitted by:</h3></span>
                        {this.props.submit}
                        {/* <img
                            className='ui avatar image'
                            src={this.props.submitterAvatarUrl}
                        /> */}
                    </div>
                </div>
            </div>
          </div>
        )
    }

}
export default User1;

/*now we want the product data(child) muttable so, first we crearte the state of parent compo and intially empty
we can't directly wirte data in state this.state.product and can't directly used in sort method
we want to seed the state for ProductList with the data in Seed. React have the set of lifecycle methods
so we get the data through that method componentDidMount it will mounte the content to our page 
we will write in this method iss main data file say lay krr as a state likhy gay joo parent User1 main banay ga!
componentDidMount() {
this.state = Seed.products;
}
1. ager hum directly data state kay ander rekhy gay tu yee technically arr mutatte ho gii
this.state.seed.products.sort( (a, b) ( b.id - a.id )
2. react provide us lifecycle method componentDidMount so, we will write state into it and seed.product  
componentDidMount() {
this.state = Seed.products;
}                       // it is also invaild

3. the Last only solution for 
this.setState({data: users})

basically state mutable hain
1. lekin this.setState immutable banatti tu hian ager hum arr or object to immtable treat kray gay tu woo kabhi update 
nhi hoo gii!!
2. ager hum (this.state.nums) aik variable ko assign kray tu yee dono same memory location main data save kry gii
So when we modify the array with push(), we’re modifying the same array that this.state.nums is pointing to.
due to treating the array as immutable however, naturally mutable

# the problem is we want to modify the array without channing the original array
so we used there concat()
While you might be able to “get
away” with mutating the state in many situations, it’s better practice to treat state
as immutable.

*/