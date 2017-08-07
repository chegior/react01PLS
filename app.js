/** @jsx React.DOM */

(function(){
    'use strict';//tell this browser to execute in strict mode

    var Quiz = React.createClass({
        render:function (){
            return 
                <div>
                    <h2>THIS IS A COMPONENT</h2>
                </div>
        }
    });    
    
    React.renderComponent( <Quiz data={'foo'}/>,
                            document.getElementById("app"));
}) ();


