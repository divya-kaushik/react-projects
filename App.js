const parent = React.createElement(
    'div', 
    {id : 'parent'} , 
    [
        React.createElement(
            'div', 
            {id : 'child1'} , 
            React.createElement(
                'h1', 
                {id : 'heading11'} , 
                'I am heading 1 of first child'
            ),
            React.createElement(
                'h2', 
                {id : 'heading12'} , 
                'I am heading 2 of first child'
            ),
        ),
        React.createElement(
            'div', 
            {id : 'child2'} , 
            React.createElement(
                'h1', 
                {id : 'heading21'} , 
                'I am heading 1 of second child'
            ),
            React.createElement(
                'h2', 
                {id : 'heading22'} , 
                'I am heading 2 of second child'
            ),
        ),
    ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);