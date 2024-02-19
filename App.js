import React from 'react';
import ReactDOM  from 'react-dom/client';

// React.craeteElement ==> ReactElement - Js Object ==> HTMLElement(render)

// JSX ==> Babel transpiles it to React.craeteElement ==> ReactElement - Js Object ==> HTMLElement(render)

// JSX is not HTML in js , its HTML/XML like syntax , jsx transpiled - Parcel - babel


// React Functional Component
const elem = <span>React Element </span>
const Title = () => (
<h1>
    {elem}
    React Title
</h1>
)

const HeadingComponent = () =>  (
    <>
        {/* <TitleComponent /> */}
        {Title()}
        <Title />
        <h1>Functional Component</h1>
    </>
    )

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
