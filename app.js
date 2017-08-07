/** @jsx React.DOM */

(function(){
    'use strict';//tell this browser to execute in strict mode

    var Quiz=React.createClass({
        render:function (){
            return (
                <div>
                    <h2>
                    TEST COMPONENT {this.props.data} 
                    </h2> 
                </div>

                );
                
        }
    });   
    
    var Book = React.createClass({
        render:function(){
            return(
                <h3>Second Component</h3>
            );
        }

    });
    
    ReactDOM.render( <Quiz data={"Dymanic Component"}/>, document.getElementById("app"));
}) ();


