export const CreateItem = ({onClick}) =>
    <button onClick={e => { e.preventDefault(); onClick(); } } >Create new</button>