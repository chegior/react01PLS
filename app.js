/** @jsx React.DOM */

(function(){
    'use strict';//tell this browser to execute in strict mode

    var Quiz=React.createClass({
        render:function (){
            return (
                <div>
                   {this.props.books.map(function(b){
                       return (<Book 
                       title={b}/>);
                   })}
                </div>

                );
                
        }
    });   
    
    var Book = React.createClass({
        render:function(){
            return(
                <div>
                    <h3>{this.props.title}</h3>
                </div>
            );
        }

    });
    
    ReactDOM.render( <Quiz books={['Lord of the ring','the hansel','VRX']}/>, document.getElementById("app"));
}) ();


